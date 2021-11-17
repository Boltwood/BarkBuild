module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            "options": { "separator": ";" },
            "build": {
                "src": ["js/bark.js"],
                "dest": "js/app.js"
            }
        },
        sass: {
            dist: {
              options: {
                sourcemap: false,
                compress: false,
                yuicompress: false,
                style: 'expanded',
              },
              files: {
                'css/main.css' : 'main.scss',
                'css/bark.css' : 'bark.scss',
                'css/var.css' : 'var.scss'
              }
            },
          },
          watch: {
            css: {
              files: '**/*.scss',
              tasks: ['sass']
            }
          }
        
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Task definitions
    grunt.registerTask('default', ['concat']);        
    grunt.registerTask('default',['watch']);
};