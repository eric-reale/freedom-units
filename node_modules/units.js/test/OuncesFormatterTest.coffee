TwitterCldr = require('twitter_cldr').load('en')
Units = require('../dist/units.en')

exports.KilogramsFormatterTest =

  'test can format short': (test) ->
    formatter = new Units.OuncesFormatter(TwitterCldr)
    test.equal(formatter.formatShort(0), '0oz')
    test.equal(formatter.formatShort(0.8), '0.8oz')
    test.equal(formatter.formatShort(1), '1oz')
    test.equal(formatter.formatShort(999), '999oz')
    test.equal(formatter.formatShort(3000), '3,000oz')
    test.done()
    
  'test can format long': (test) ->
    formatter = new Units.OuncesFormatter(TwitterCldr)
    test.equal(formatter.formatLong(0), '0 ounces')
    test.equal(formatter.formatLong(0.8), '0.8 ounces')
    test.equal(formatter.formatLong(1), '1 ounce')
    test.equal(formatter.formatLong(999), '999 ounces')
    test.equal(formatter.formatLong(3000), '3,000 ounces')
    test.done()