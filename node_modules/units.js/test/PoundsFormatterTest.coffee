TwitterCldr = require('twitter_cldr').load('en')
Units = require('../dist/units.en')

exports.KilogramsFormatterTest =

  'test can format short': (test) ->
    formatter = new Units.PoundsFormatter(TwitterCldr)
    test.equal(formatter.formatShort(0), '0lbs')
    test.equal(formatter.formatShort(0.8), '0.8lbs')
    test.equal(formatter.formatShort(1), '1lbs')
    test.equal(formatter.formatShort(999), '999lbs')
    test.equal(formatter.formatShort(3000), '3,000lbs')
    test.done()
    
  'test can format long': (test) ->
    formatter = new Units.PoundsFormatter(TwitterCldr)
    test.equal(formatter.formatLong(0), '0 pounds')
    test.equal(formatter.formatLong(0.8), '0.8 pounds')
    test.equal(formatter.formatLong(1), '1 pound')
    test.equal(formatter.formatLong(999), '999 pounds')
    test.equal(formatter.formatLong(3000), '3,000 pounds')
    test.done()