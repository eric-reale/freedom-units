class Units.PowerFormatter extends Units.ScalingFormatter

  constructor: (cldr=TwitterCldr) ->
    super('power', 1, cldr, 1000, Units.ScalingFormatter.PICO, Units.ScalingFormatter.TERA)