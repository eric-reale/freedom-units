module.exports = (grunt) ->

  grunt.initConfig
    nodeunit:
      files: ['build/**/*Test.js']
    pkg: grunt.file.readJSON('package.json')
    coffee:
      compileTests:
        expand: true,
        cwd: 'test',
        src: ['*.coffee'],
        dest: 'build',
        ext: '.js'
    codo:
      options:
        name: 'Units.js'
        title: 'Units.js API Documentation'
        extra: [ 'LICENSE-MIT' ]
        undocumented: yes
        stats: no
      src: ['lib/units']

  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-nodeunit')
  grunt.loadNpmTasks('grunt-codo')
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('compile', () ->
    for locale in ['en']
      data =
        translations: JSON.stringify(grunt.file.readYAML("locales/#{locale}.yml")[locale])
      translations = grunt.template.process(
            'Units.Translations = <%= translations %>', data: data)
      translationsFile = "build/locales/#{locale}.coffee"
      grunt.file.write(translationsFile, translations)
      destinationFile = "dist/units.#{locale}.js"

      coffeeCode = [
        'lib/units.coffee'
        translationsFile
        'lib/units/MessageFormatter.coffee'
        'lib/units/ScalingFormatter.coffee'
        'lib/units/PowerFormatter.coffee'
        'lib/units/BytesFormatter.coffee'
        'lib/units/distance/FeetFormatter.coffee'
        'lib/units/distance/InchesFormatter.coffee'
        'lib/units/distance/MetersFormatter.coffee'
        'lib/units/distance/MilesFormatter.coffee'
        'lib/units/distance/YardsFormatter.coffee'
        'lib/units/mass/KilogramsFormatter.coffee'
        'lib/units/mass/OuncesFormatter.coffee'
        'lib/units/mass/PoundsFormatter.coffee'
        'lib/units/temperature/CelsiusFormatter.coffee'
        'lib/units/temperature/FahrenheitFormatter.coffee'
        'lib/units/temperature/KelvinsFormatter.coffee'
        'lib/units/FormattableQuantity.coffee'
        'lib/units/distance/DistanceUnit.coffee'
        'lib/units/distance/Feet.coffee'
        'lib/units/distance/Inches.coffee'
        'lib/units/distance/Meters.coffee'
        'lib/units/distance/Miles.coffee'
        'lib/units/distance/Yards.coffee'
        'lib/units/mass/MassUnit.coffee'
        'lib/units/mass/Kilograms.coffee'
        'lib/units/mass/Ounces.coffee'
        'lib/units/mass/Pounds.coffee'
        'lib/units/temperature/TemperatureUnit.coffee'
        'lib/units/temperature/Celsius.coffee'
        'lib/units/temperature/Fahrenheit.coffee'
        'lib/units/temperature/Kelvins.coffee'
        'lib/expose.coffee'
      ].map(grunt.file.read).join(grunt.util.linefeed)

      javascriptCode = require('coffee-script').compile(coffeeCode);
      grunt.file.write(destinationFile, javascriptCode)
  )

  grunt.registerTask('uglify', () ->
    for locale in ['en']
      result = require('uglify-js').minify("dist/units.#{locale}.js", {mangle: true, compress: true});
      grunt.file.write("dist/units.#{locale}.min.js", result.code)
  )

  grunt.registerTask('default', ['compile', 'coffee:compileTests', 'nodeunit'])
  grunt.registerTask('package', ['default', 'uglify'])


