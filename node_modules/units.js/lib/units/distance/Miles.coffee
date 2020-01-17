class Units.Miles extends Units.DistanceUnit
  FORMATTER: undefined
  
  distanceMultiplier: ->
    0.000621371
    
  formatter: ->
    @FORMATTER = if @FORMATTER? then @FORMATTER else new Units.MilesFormatter(@cldr)