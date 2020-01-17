class Units.CelsiusFormatter extends Units.ScalingFormatter

  constructor: (cldr=TwitterCldr) ->
    super('celsius', 1, cldr, 1000, Units.ScalingFormatter.ONE, Units.ScalingFormatter.ONE)