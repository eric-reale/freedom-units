class Units.Celsius extends Units.TemperatureUnit
  FORMATTER: undefined
  
  toKelvins: ->
    @value + 273.15

  fromKelvins: (kelvins) ->
    kelvins - 273.15
    
  formatter: ->
    @FORMATTER = if @FORMATTER? then @FORMATTER else new Units.CelsiusFormatter(@cldr)