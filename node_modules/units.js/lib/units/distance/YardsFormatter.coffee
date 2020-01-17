class Units.YardsFormatter extends Units.ScalingFormatter

  constructor: (cldr=TwitterCldr) ->
    super('yards', 1, cldr, 1000, Units.ScalingFormatter.ONE, Units.ScalingFormatter.ONE)