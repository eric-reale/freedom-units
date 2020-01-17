class Units.Ounces extends Units.MassUnit
  FORMATTER: undefined
  
  massMultiplier: ->
    35.274

  formatter: ->
    @FORMATTER = if @FORMATTER? then @FORMATTER else new Units.OuncesFormatter(@cldr)