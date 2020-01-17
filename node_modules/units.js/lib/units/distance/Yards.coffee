class Units.Yards extends Units.DistanceUnit
  FORMATTER: undefined
  
  distanceMultiplier: ->
    1.09361
    
  formatter: ->
    @FORMATTER = if @FORMATTER? then @FORMATTER else new Units.YardsFormatter(@cldr)