class Units.FeetFormatter extends Units.ScalingFormatter

  constructor: (cldr=TwitterCldr) ->
    super('feet', 1, cldr, 1000, Units.ScalingFormatter.ONE, Units.ScalingFormatter.ONE)