class Units.InchesFormatter extends Units.ScalingFormatter

  constructor: (cldr=TwitterCldr) ->
    super('inches', 1, cldr, 1000, Units.ScalingFormatter.ONE, Units.ScalingFormatter.ONE)