TwitterCldr = require('twitter_cldr').load('en')
Units = require('../dist/units.en')

exports.KilogramsFormatterTest =

  'test can format short': (test) ->
    formatter = new Units.KilogramsFormatter(TwitterCldr)
    test.equal(formatter.formatShort(0), '0kg')
    test.equal(formatter.formatShort(0.8), '800g')
    test.equal(formatter.formatShort(1), '1kg')
    test.equal(formatter.formatShort(999), '999kg')
    test.equal(formatter.formatShort(3000), '3t')
    test.done()
    
  'test can format long': (test) ->
    formatter = new Units.KilogramsFormatter(TwitterCldr)
    test.equal(formatter.formatLong(0), '0 kilograms')
    test.equal(formatter.formatLong(0.8), '800 grams')
    test.equal(formatter.formatLong(1), '1 kilogram')
    test.equal(formatter.formatLong(999), '999 kilograms')
    test.equal(formatter.formatLong(3000), '3 tons')
    test.done()