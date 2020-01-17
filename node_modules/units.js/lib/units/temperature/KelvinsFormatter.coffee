class Units.KelvinsFormatter extends Units.ScalingFormatter

  constructor: (cldr=TwitterCldr) ->
    super('kelvins', 1, cldr, 1000, Units.ScalingFormatter.ONE, Units.ScalingFormatter.ONE)