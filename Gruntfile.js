module.exports = function(grunt) {

  grunt.initConfig({
    jasmine : {
      src : 'src/*.js',
      options: {
        specs : 'spec/*Spec.js',
        helpers: 'spec/*Helper.js',
        vendor: [
          "http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js",
          "vendor/*.js"
        ]
      }
    }
  });
  
  // Register tasks.
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  
  // Default task.
  grunt.registerTask('default', 'jasmine');
};
