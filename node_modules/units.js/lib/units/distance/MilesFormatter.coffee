class Units.MilesFormatter extends Units.ScalingFormatter

  constructor: (cldr=TwitterCldr) ->
    super('miles', 1, cldr, 1000, Units.ScalingFormatter.ONE, Units.ScalingFormatter.ONE)