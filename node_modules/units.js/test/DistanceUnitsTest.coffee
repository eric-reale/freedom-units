TwitterCldr = require('twitter_cldr').load('en')
Units = require('../dist/units.en')
require('should')

exports.DistanceUnitsTest =

  'test can be converted into another unit': (test) ->
    test.ok(new Units.Meters(5, TwitterCldr).in(Units.Yards).value.should.be.within(5.4680, 5.4681))
    test.ok(new Units.Inches(12, TwitterCldr).in(Units.Feet).value.should.be.within(0.999, 1.001))
    test.ok(new Units.Yards(1, TwitterCldr).in(Units.Feet).value.should.be.within(2.999, 3.001))
    test.ok(new Units.Miles(1, TwitterCldr).in(Units.Meters).value.should.be.within(1609.344, 1609.345))
    test.done()
    
  'test Meters return a MetersFormatter': (test) ->
    formatter = new Units.Meters(4, TwitterCldr).formatter()
    test.ok(formatter.should.be.an.instanceof(Units.MetersFormatter))
    test.done()
    
  'test Inches return an InchesFormatter': (test) ->
    formatter = new Units.Inches(4, TwitterCldr).formatter()
    test.ok(formatter.should.be.an.instanceof(Units.InchesFormatter))
    test.done()
    
  'test Yards return a YardsFormatter': (test) ->
    formatter = new Units.Yards(4, TwitterCldr).formatter()
    test.ok(formatter.should.be.an.instanceof(Units.YardsFormatter))
    test.done()
    
  'test Miles return a MilesFormatter': (test) ->
    formatter = new Units.Miles(4, TwitterCldr).formatter()
    test.ok(formatter.should.be.an.instanceof(Units.MilesFormatter))
    test.done()
    
  'test Feet return a FeetFormatter': (test) ->
    formatter = new Units.Feet(4, TwitterCldr).formatter()
    test.ok(formatter.should.be.an.instanceof(Units.FeetFormatter))
    test.done()