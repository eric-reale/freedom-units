class Units.MessageFormatter
  @format: (message, values, cldr=TwitterCldr) ->
    if message.constructor == String
      Units.MessageFormatter.substitute(message, values)
    else
      count = values['count']
      pluralKey = cldr.PluralRules.rule_for(count)
      Units.MessageFormatter.substitute(message[pluralKey], values)

  @substitute: (message, values) ->
    message.replace(/\{(\w+)\}/g, (name) ->
      values[name.slice(1, -1)]
    )