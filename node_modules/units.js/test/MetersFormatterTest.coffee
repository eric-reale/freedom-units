TwitterCldr = require('twitter_cldr').load('en')
Units = require('../dist/units.en')

exports.MetersFormatterTest =

  'test can format short': (test) ->
    formatter = new Units.MetersFormatter(TwitterCldr)
    test.equal(formatter.formatShort(0), '0m')
    test.equal(formatter.formatShort(0.000000000001), '1pm')
    test.equal(formatter.formatShort(0.000000001), '1nm')
    test.equal(formatter.formatShort(0.000001), '1µm')
    test.equal(formatter.formatShort(0.001), '1mm')
    test.equal(formatter.formatShort(0.1), '100mm')
    test.equal(formatter.formatShort(1), '1m')
    test.equal(formatter.formatShort(999), '999m')
    test.equal(formatter.formatShort(1000), '1km')
    test.equal(formatter.formatShort(1000000), '1,000km')
    test.done()
    
  'test can format long': (test) ->
    formatter = new Units.MetersFormatter(TwitterCldr)
    test.equal(formatter.formatLong(0.000000000001), '1 picometer')
    test.equal(formatter.formatLong(0.000000001), '1 nanometer')
    test.equal(formatter.formatLong(0.000000002), '2 nanometers')
    test.equal(formatter.formatLong(0.000001), '1 micrometer')
    test.equal(formatter.formatLong(0.001), '1 millimeter')
    test.equal(formatter.formatLong(0.1), '100 millimeters')
    test.equal(formatter.formatLong(1), '1 meter')
    test.equal(formatter.formatLong(999), '999 meters')
    test.equal(formatter.formatLong(1000), '1 kilometer')
    test.equal(formatter.formatLong(1300), '1.3 kilometers')
    test.equal(formatter.formatLong(1000000), '1,000 kilometers')
    test.done()