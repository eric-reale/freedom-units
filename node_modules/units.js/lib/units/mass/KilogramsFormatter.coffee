class Units.KilogramsFormatter extends Units.ScalingFormatter

  constructor: (cldr=TwitterCldr) ->
    super('kilograms', 1, cldr, 1000, Units.ScalingFormatter.FEMTO, Units.ScalingFormatter.GIGA)