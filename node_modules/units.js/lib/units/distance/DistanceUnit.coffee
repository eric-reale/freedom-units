# Base class for units representing a distance.
class Units.DistanceUnit extends Units.FormattableQuantity
  # Converts this instance to another distance unit
  #
  # @param [Object] distanceClass the unit to convert this instance into
  in: (distanceClass) ->
    convertedDistance = new distanceClass(0, @cldr)
    convertedDistance.value = (@value / @distanceMultiplier()) * convertedDistance.distanceMultiplier()
    convertedDistance
  
  # Returns the conversion factor of this unit.
  #
  # @private
  distanceMultiplier: ->
    0