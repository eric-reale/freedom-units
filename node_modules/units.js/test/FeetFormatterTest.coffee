TwitterCldr = require('twitter_cldr').load('en')
Units = require('../dist/units.en')

exports.FeetFormatterTest =

  'test can format short': (test) ->
    formatter = new Units.FeetFormatter(TwitterCldr)
    test.equal(formatter.formatShort(0), '0ft')
    test.equal(formatter.formatShort(0.8), '0.8ft')
    test.equal(formatter.formatShort(1), '1ft')
    test.equal(formatter.formatShort(999), '999ft')
    test.equal(formatter.formatShort(3000), '3,000ft')
    test.done()
    
  'test can format long': (test) ->
    formatter = new Units.FeetFormatter(TwitterCldr)
    test.equal(formatter.formatLong(0), '0 feet')
    test.equal(formatter.formatLong(0.8), '0.8 feet')
    test.equal(formatter.formatLong(1), '1 foot')
    test.equal(formatter.formatLong(999), '999 feet')
    test.equal(formatter.formatLong(3000), '3,000 feet')
    test.done()