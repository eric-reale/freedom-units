class Units.Feet extends Units.DistanceUnit  
  FORMATTER: undefined

  distanceMultiplier: ->
    3.28084
    
  formatter: ->
    @FORMATTER = if @FORMATTER? then @FORMATTER else new Units.FeetFormatter(@cldr)