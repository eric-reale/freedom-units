class Units.Fahrenheit extends Units.TemperatureUnit
  FORMATTER: undefined
  
  toKelvins: ->
    (@value + 459.67) * 5 / 9

  fromKelvins: (kelvins) ->
    (kelvins * 9 / 5) - 459.67
    
  formatter: ->
    @FORMATTER = if @FORMATTER? then @FORMATTER else new Units.FahrenheitFormatter(@cldr)