class Units.Kelvins extends Units.TemperatureUnit
  FORMATTER: undefined
  
  toKelvins: ->
    @value

  fromKelvins: (kelvins) ->
    kelvins
    
  formatter: ->
    @FORMATTER = if @FORMATTER? then @FORMATTER else new Units.KelvinsFormatter(@cldr)