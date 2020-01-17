class Units.Inches extends Units.DistanceUnit
  FORMATTER: undefined
  
  distanceMultiplier: ->
    39.3701
    
  formatter: ->
    @FORMATTER = if @FORMATTER? then @FORMATTER else new Units.InchesFormatter(@cldr)