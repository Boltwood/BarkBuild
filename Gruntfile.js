module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            "options": { "separator": ";" },
            "build": {
                "src": ["js/bark.js"],
                "dest": "js/app.js"
            }
        }
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Task definitions
    grunt.registerTask('default', ['concat']);
};