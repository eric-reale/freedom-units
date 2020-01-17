# Represents a distance expressed in meters
class Units.Meters extends Units.DistanceUnit
  FORMATTER: undefined
  
  distanceMultiplier: ->
    1

  formatter: ->
    @FORMATTER = if @FORMATTER? then @FORMATTER else new Units.MetersFormatter(@cldr)