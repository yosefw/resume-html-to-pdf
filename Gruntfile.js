module.exports = function(grunt) {
  
  grunt.initConfig({
    
    less: {
      development: {
        options: {
          paths: ["/src"],
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers : [ "last 2 versions" ]})
          ]
        },
        files: {
          "styles.css": "src/styles.less"
        }
      }
    },

    browserSync: {
      bsFiles: {
        src : ['index.html', 'styles.css']
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "."
        }
      }
    },
    
    watch: {
      files: "src/*.less",
      tasks: ["less"]
    }
  });
  
  
  // Load grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
  grunt.registerTask('default', ['browserSync', 'watch']);
};
