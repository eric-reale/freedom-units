class Units.OuncesFormatter extends Units.ScalingFormatter

  constructor: (cldr=TwitterCldr) ->
    super('ounces', 1, cldr, 1000, Units.ScalingFormatter.ONE, Units.ScalingFormatter.ONE)