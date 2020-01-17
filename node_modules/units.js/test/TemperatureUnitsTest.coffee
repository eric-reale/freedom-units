TwitterCldr = require('twitter_cldr').load('en')
Units = require('../dist/units.en')
require('should')

exports.TemperatureUnitsTest =

  'test can be converted into another unit': (test) ->
    test.ok(new Units.Celsius(1, TwitterCldr).in(Units.Kelvins).value.should.be.within(274.149, 274.151))
    test.ok(new Units.Fahrenheit(32, TwitterCldr).in(Units.Celsius).value.should.be.within(-0.01, 0.01))
    test.ok(new Units.Kelvins(32, TwitterCldr).in(Units.Fahrenheit).value.should.be.within(-402.071, -402.069))
    test.done()
    
  'test Celsius return a CelsiusFormatter': (test) ->
    formatter = new Units.Celsius(4, TwitterCldr).formatter()
    test.ok(formatter.should.be.an.instanceof(Units.CelsiusFormatter))
    test.done()
    
  'test Fahrenheit return a FahrenheitFormatter': (test) ->
    formatter = new Units.Fahrenheit(4, TwitterCldr).formatter()
    test.ok(formatter.should.be.an.instanceof(Units.FahrenheitFormatter))
    test.done()
    
  'test Kelvin return a KelvinsFormatter': (test) ->
    formatter = new Units.Kelvins(4, TwitterCldr).formatter()
    test.ok(formatter.should.be.an.instanceof(Units.KelvinsFormatter))
    test.done()