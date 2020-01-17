class Units.MetersFormatter extends Units.ScalingFormatter

  constructor: (cldr=TwitterCldr) ->
    super('meters', 1, cldr, 1000, Units.ScalingFormatter.PICO, Units.ScalingFormatter.KILO)