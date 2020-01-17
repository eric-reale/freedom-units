# Base class for units representing a temperature.
class Units.TemperatureUnit extends Units.FormattableQuantity
  # Converts this instance to another temperature unit
  #
  # @param [Object] temperatureClass the unit to convert this instance into
  in: (temperatureClass) ->
    convertedTemperature = new temperatureClass(0, @cldr)
    convertedTemperature.value = convertedTemperature.fromKelvins(@toKelvins())
    convertedTemperature 
  
  # Returns the value of this unit in Kelvins
  #
  # @private
  toKelvins: ->
    0
  
  # Returns the value of this unit in Kelvins
  #
  # @private
  fromKelvins: (kelvins) ->
    0
    