class Units.Pounds extends Units.MassUnit
  FORMATTER: undefined
  
  massMultiplier: ->
    2.20462

  formatter: ->
    @FORMATTER = if @FORMATTER? then @FORMATTER else new Units.PoundsFormatter(@cldr)