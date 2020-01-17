# Base class for units representing a mass.
class Units.MassUnit extends Units.FormattableQuantity
  # Converts this instance to another mass unit
  #
  # @param [Object] massClass the unit to convert this instance into
  in: (massClass) ->
    convertedMass = new massClass(0, @cldr)
    convertedMass.value = (@value / @massMultiplier()) * convertedMass.massMultiplier()
    convertedMass 
  
  # Returns the conversion factor of this unit.
  #
  # @private
  massMultiplier: ->
    0