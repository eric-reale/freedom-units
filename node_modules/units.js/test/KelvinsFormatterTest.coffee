TwitterCldr = require('twitter_cldr').load('en')
Units = require('../dist/units.en')

exports.KelvinsFormatterTest =

  'test can format short': (test) ->
    formatter = new Units.KelvinsFormatter(TwitterCldr)
    test.equal(formatter.formatShort(0), '0K')
    test.equal(formatter.formatShort(0.8), '0.8K')
    test.equal(formatter.formatShort(1), '1K')
    test.equal(formatter.formatShort(999), '999K')
    test.equal(formatter.formatShort(3000), '3,000K')
    test.done()
    
  'test can format long': (test) ->
    formatter = new Units.KelvinsFormatter(TwitterCldr)
    test.equal(formatter.formatLong(0), '0 Kelvin degrees')
    test.equal(formatter.formatLong(0.8), '0.8 Kelvin degrees')
    test.equal(formatter.formatLong(1), '1 Kelvin degree')
    test.equal(formatter.formatLong(999), '999 Kelvin degrees')
    test.equal(formatter.formatLong(3000), '3,000 Kelvin degrees')
    test.done()