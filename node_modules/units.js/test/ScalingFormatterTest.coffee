TwitterCldr = require('twitter_cldr').load('en')
Units = require('../dist/units.en')

exports.ScalingFormatterTest =

  'test can convert value up': (test) ->
    formatter = new Units.ScalingFormatter('foo', 0, TwitterCldr, 10, -2, 2)
    test.equal(formatter.convert(1), 1)
    test.equal(formatter.convert(10), 1)
    test.equal(formatter.convert(100), 1)
    test.equal(formatter.convert(1000), 10)
    test.done()

  'test can compute index up': (test) ->
    formatter = new Units.ScalingFormatter('foo', 0, TwitterCldr, 10, -2, 2)
    test.equal(formatter.computeIndex(1), 0)
    test.equal(formatter.computeIndex(10), 1)
    test.equal(formatter.computeIndex(100), 2)
    test.equal(formatter.computeIndex(1000), 2)
    test.done()

  'test can convert value down': (test) ->
    formatter = new Units.ScalingFormatter('foo', 0, TwitterCldr, 10, -2, 2)
    test.equal(formatter.convert(0.1), 1)
    test.equal(formatter.convert(0.01), 1)
    test.equal(formatter.convert(0.001), 0.1)
    test.done()

  'test can compute index down': (test) ->
    formatter = new Units.ScalingFormatter('foo', 0, TwitterCldr, 10, -2, 2)
    test.equal(formatter.computeIndex(0.1), -1)
    test.equal(formatter.computeIndex(0.01), -2)
    test.equal(formatter.computeIndex(0.001), -2)
    test.done()
    
  'test can compute precision': (test) ->
    formatter = new Units.ScalingFormatter('foo', 0, TwitterCldr, 10, -2, 2)
    test.equal(formatter.computePrecision(1.001, 1), 0)
    test.equal(formatter.computePrecision(1.001, 2), 0)
    test.equal(formatter.computePrecision(1.001, 3), 3)
    test.equal(formatter.computePrecision(1.001, 4), 4)
    test.equal(formatter.computePrecision(-1.001, 1), 0)
    test.equal(formatter.computePrecision(-1.001, 2), 0)
    test.equal(formatter.computePrecision(-1.001, 3), 3)
    test.equal(formatter.computePrecision(-1.001, 4), 4)
    test.done()