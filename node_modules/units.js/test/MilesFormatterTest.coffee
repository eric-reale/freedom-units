TwitterCldr = require('twitter_cldr').load('en')
Units = require('../dist/units.en')

exports.MilesFormatterTest =

  'test can format short': (test) ->
    formatter = new Units.MilesFormatter(TwitterCldr)
    test.equal(formatter.formatShort(0), '0mi')
    test.equal(formatter.formatShort(0.8), '0.8mi')
    test.equal(formatter.formatShort(1), '1mi')
    test.equal(formatter.formatShort(999), '999mi')
    test.equal(formatter.formatShort(3000), '3,000mi')
    test.done()
    
  'test can format long': (test) ->
    formatter = new Units.MilesFormatter(TwitterCldr)
    test.equal(formatter.formatLong(0), '0 miles')
    test.equal(formatter.formatLong(0.8), '0.8 miles')
    test.equal(formatter.formatLong(1), '1 mile')
    test.equal(formatter.formatLong(999), '999 miles')
    test.equal(formatter.formatLong(3000), '3,000 miles')
    test.done()