# Base class representing a quantity in an arbitrary unit that may be formatted
class Units.FormattableQuantity
  # Initializes a instance of this class with a given value.
  #
  # @param [Number] value the value to encapsulate
  constructor: (@value, @cldr=TwitterCldr) ->
  
  # Formats this instance's value into a string, at a given precision.
  #
  # @param [Number] precision the optional decimal precision to use
  format: (precision) ->
    formatter = @formatter()
    precision = if precision? then precision else formatter.precision
    formatter.format(@value, precision)

  # Formats this instance's value and include the full unit name.
  #
  # @param [Number] precision the optional decimal precision to use
  formatLong: (precision) ->
    formatter = @formatter()
    precision = if precision? then precision else formatter.precision
    formatter.formatLong(@value, precision)

  # Formats this instance's value and include the abbreviated unit name.
  #
  # @param [Number] precision the optional decimal precision to use
  formatShort: (precision) ->
    formatter = @formatter()
    precision = if precision? then precision else formatter.precision
    formatter.formatShort(@value, precision)

  # Returns the full unit name.
  unitLong: ->
    @formatter().unitLong(@value)

  # Returns the abbreviated unit name.
  unitShort: ->
    @formatter().unitLong(@value)