class Units.PoundsFormatter extends Units.ScalingFormatter

  constructor: (cldr=TwitterCldr) ->
    super('pounds', 1, cldr, 1000, Units.ScalingFormatter.ONE, Units.ScalingFormatter.ONE)