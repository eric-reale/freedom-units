class Units.FahrenheitFormatter extends Units.ScalingFormatter

  constructor: (cldr=TwitterCldr) ->
    super('fahrenheit', 1, cldr, 1000, Units.ScalingFormatter.ONE, Units.ScalingFormatter.ONE)