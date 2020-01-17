TwitterCldr = require('twitter_cldr').load('en')
Units = require('../dist/units.en')

exports.CelsiusFormatterTest =

  'test can format short': (test) ->
    formatter = new Units.CelsiusFormatter(TwitterCldr)
    test.equal(formatter.formatShort(0), '0℃')
    test.equal(formatter.formatShort(0.8), '0.8℃')
    test.equal(formatter.formatShort(1), '1℃')
    test.equal(formatter.formatShort(999), '999℃')
    test.equal(formatter.formatShort(3000), '3,000℃')
    test.done()
    
  'test can format long': (test) ->
    formatter = new Units.CelsiusFormatter(TwitterCldr)
    test.equal(formatter.formatLong(0), '0 Celsius degrees')
    test.equal(formatter.formatLong(0.8), '0.8 Celsius degrees')
    test.equal(formatter.formatLong(1), '1 Celsius degree')
    test.equal(formatter.formatLong(999), '999 Celsius degrees')
    test.equal(formatter.formatLong(3000), '3,000 Celsius degrees')
    test.done()