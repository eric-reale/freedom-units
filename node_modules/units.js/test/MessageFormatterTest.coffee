TwitterCldr = require('twitter_cldr').load('en')
Units = require('../dist/units.en')

exports.MessageFormatterTest =

  'test can format a simple message': (test) ->
    formatted = Units.MessageFormatter.format("Hello {world}", world: 'world', TwitterCldr)
    test.equal(formatted, 'Hello world')
    test.done()

  'test can format a message with two placeholders': (test) ->
    formatted = Units.MessageFormatter.format("{hello} {world}", world: 'world', hello: 'Howdy', TwitterCldr)
    test.equal(formatted, 'Howdy world')
    test.done()

  'test can format a multi-message': (test) ->
    messages = {one: 'Hello folk', other: 'Hello folks'}
    formatted = Units.MessageFormatter.format(messages, count: 1, TwitterCldr)
    test.equal(formatted, 'Hello folk', TwitterCldr)
    formatted = Units.MessageFormatter.format(messages, count: 56, TwitterCldr)
    test.equal(formatted, 'Hello folks', TwitterCldr)
    test.done()