# Base class for formatters that auto-scale the value before formatting it.
#
# This is useful for units that are fractionable into sub-units (e.g. Watts into
# MilliWatts) or multiplicable into super-units (e.g. Bytes into TeraBytes).
# When presented a value, formatters of this class will determine the best sub-
# or super-unit to use, then convert the value and format it appropriately.
#
# Translations for scaling formatters are stored as an object under the root
# translation key. Each property refers to the translations for one step of the
# scale, and the name of the property is that of the step it represents:
#
# 'distance': {
#   'ONE': {...} // Translations for the main unit, e.g. meters
#   'KILO': {...} // kilometers
#   'MEGA': {...} // micrometers
#   'MILLI': {...} // millimeters
# }
class Units.ScalingFormatter

  @FEMTO: -5
  @PICO: -4
  @NANO: -3
  @MICRO: -2
  @MILLI: -1
  @ONE: 0
  @KILO: 1
  @MEGA: 2
  @GIGA: 3
  @TERA: 4
  @PETA: 5
  @EXA: 6
  @ZETTA: 7
  
  PREFIXES:
    '-5': 'FEMTO'
    '-4': 'PICO'
    '-3': 'NANO'
    '-2': 'MICRO'
    '-1': 'MILLI'
    '0': 'ONE'
    '1': 'KILO'
    '2': 'MEGA'
    '3': 'GIGA'
    '4': 'TERA'
    '5': 'PETA'
    '6': 'EXA'
    '7': 'ZETTA'

  # Constructs a new scaling formatter
  #
  # @param [String] key the key under which the translations for this
  # formatter are stored
  # @param [Number] precision the precision with which to format the values
  # passed to this formatter
  # @param [Object] cldr an implementation of CLDR
  # @param [Number] multiplier the scaling factor to use for converting values
  # @param [Number] minIndex the minimum significant power of the multiplier
  # representable by this formatter
  # @param [Number] maxIndex the maximum significant power of the multiplier
  # representable by this formatter
  constructor: (@key, @precision, @cldr, @multiplier, @minIndex, @maxIndex) ->

  # Converts the value to the proper scale, as per the configuration of this
  # class
  #
  # @param [Number] value the value to convert
  convert: (value) ->
    index = 0
    if value < 1
      (value = value * @multiplier; index--) while value < 1 and index > @minIndex
    else if value >= @multiplier
      (value = value / @multiplier; index++) while value >= @multiplier and index < @maxIndex
    value

  # Formats a value into a string, at a given precision
  #
  # @param [Number] value the value to format
  # @param [Number] precision the decimal precision to use
  format: (value, precision=@precision) ->
    precision = @computePrecision(value, precision)
    new @cldr.DecimalFormatter().format(value, precision: precision)

  # @private
  computePrecision: (value, precision) ->
    if precision == 0
      precision

    decimalPart = Math.abs(value - Math.round(value))
    if decimalPart == 0
      # Number is an integer – we should not display anything after the
      # decimal point
      0
    else
      # Let's see if there is a non-zero digit in the value's
      # decimal part that is before the desired precision
      log = Math.log(decimalPart) / Math.LN10
      firstSignificantIndex = Math.round(Math.abs(log))
      if firstSignificantIndex > precision
        0 
      else
        precision

  # @private
  translationKey: (value, name) ->
    unitTranslations = Units.Translations[@key]
    index = @computeIndex(value)
    prefix = @PREFIXES[index]
    unitTranslations[prefix][name]

  # @private
  longKey: (value) ->
    @translationKey(value, 'long')

  # Formats a value and include the full unit name.
  #
  # @param [Number] value the value to format
  # @param [Number] precision the decimal precision to use
  formatLong: (value, precision=@precision) ->
    convertedValue = @convert(value)
    count = parseFloat(convertedValue.toFixed(precision))
    Units.MessageFormatter.format(@longKey(value), value: @format(convertedValue, precision), count: count, @cldr)

  # @private
  shortKey: (value) ->
    @translationKey(value, 'short')

  # Formats a value and include the abbreviated unit name.
  #
  # @param [Number] value the value to format
  # @param [Number] precision the decimal precision to use
  formatShort: (value, precision=@precision) ->
    convertedValue = @convert(value)
    Units.MessageFormatter.format(@shortKey(value), value: @format(convertedValue, precision), @cldr)

  # @private
  longUnitKey: (value) ->
    @translationKey(value, 'long_name')

  # Returns the full unit name
  #
  # @param [Number] value the value for which the unit name should be returned
  unitLong: (value) ->
    Units.MessageFormatter.format(@longUnitKey(value))

  # @private
  shortUnitKey: (value) ->
    @translationKey(value, 'short_name')

  # Returns the abbreviated unit name
  #
  # @param [Number] value the value for which the unit name should be returned
  unitShort: (value) ->
    Units.MessageFormatter.format(@shortUnitKey(value))

  # Computes the index in the translation array where translations should be 
  # looked up
  #
  # @param [Number] value the value being formatted
  computeIndex: (value) ->
    return 0 if value == 0
    index = 0
    if value < 1
      (value = value * @multiplier; index--) while value < 1 and index > @minIndex
    else if value >= @multiplier
      (value = value / @multiplier; index++) while value >= @multiplier and index < @maxIndex
    index
