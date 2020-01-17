TwitterCldr = require('twitter_cldr').load('en')
Units = require('../dist/units.en')

exports.BytesFormatterTest =

  'test can format short': (test) ->
    formatter = new Units.BytesFormatter(TwitterCldr)
    test.equal(formatter.formatShort(1), '1B')
    test.equal(formatter.formatShort(1023), '1,023B')
    test.equal(formatter.formatShort(1024), '1KB')
    test.equal(formatter.formatShort(1024 * 1024), '1MB')
    test.equal(formatter.formatShort(1024 * 1024 + 300 * 1024), '1.3MB')
    test.equal(formatter.formatShort(1024 * 1024 * 1024), '1GB')
    test.equal(formatter.formatShort(1024 * 1024 * 1024 + 1024 * 1024 * 400), '1.4GB')
    test.done()
    
  'test can format long': (test) ->
    formatter = new Units.BytesFormatter(TwitterCldr)
    test.equal(formatter.formatLong(1), '1 byte')
    test.equal(formatter.formatLong(1023), '1,023 bytes')
    test.equal(formatter.formatLong(1024), '1 Kilobyte')
    test.equal(formatter.formatLong(1024 * 1024), '1 Megabyte')
    test.equal(formatter.formatLong(1024 * 1024 + 300 * 1024), '1.3 Megabytes')
    test.equal(formatter.formatLong(1024 * 1024 * 1024), '1 Gigabyte')
    test.equal(formatter.formatLong(1024 * 1024 * 1024 + 1024 * 1024 * 400), '1.4 Gigabytes')
    test.done()