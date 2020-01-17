TwitterCldr = require('twitter_cldr').load('en')
Units = require('../dist/units.en')
require('should')

exports.MassUnitsTest =

  'test can be converted into another unit': (test) ->
    test.ok(new Units.Pounds(1, TwitterCldr).in(Units.Ounces).value.should.be.within(15.99, 16.01))
    test.ok(new Units.Kilograms(1, TwitterCldr).in(Units.Pounds).value.should.be.within(2.2, 2.21))
    test.done()
    
  'test Kilograms return a KilogramsFormatter': (test) ->
    formatter = new Units.Kilograms(4, TwitterCldr).formatter()
    test.ok(formatter.should.be.an.instanceof(Units.KilogramsFormatter))
    test.done()
    
  'test Ounces return an OuncesFormatter': (test) ->
    formatter = new Units.Ounces(4, TwitterCldr).formatter()
    test.ok(formatter.should.be.an.instanceof(Units.OuncesFormatter))
    test.done()
    
  'test Pounds return a PoundsFormatter': (test) ->
    formatter = new Units.Pounds(4, TwitterCldr).formatter()
    test.ok(formatter.should.be.an.instanceof(Units.PoundsFormatter))
    test.done()