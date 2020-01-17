class Units.Kilograms extends Units.MassUnit
  FORMATTER: undefined
  
  massMultiplier: ->
    1

  formatter: ->
    @FORMATTER = if @FORMATTER? then @FORMATTER else new Units.KilogramsFormatter(@cldr)