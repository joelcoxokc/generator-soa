var gulp        = require('gulp'),
    g           = require('gulp-load-plugins')({lazy: false}),
    noop        = g.util.noop,
    es          = require('event-stream'),
    bowerFiles  = require('main-bower-files'),
    rimraf      = require('rimraf'),
    queue       = require('streamqueue'),
    lazypipe    = require('lazypipe'),
    stylish     = require('jshint-stylish'),
    bower       = require('./bower'),
    isWatching  = false,
    jade        = require('gulp-jade'),
    del         = require('del');


var htmlminOpts = {
  removeComments: true,
  collapseWhitespace: true,
  removeEmptyAttributes: false,
  collapseBooleanAttributes: true,
  removeRedundantAttributes: true
};

var errorHandler  = require('./build/errors');
var config        = require('./build/config');


gulp.task('clean', function(done){
   return gulp.src('.tmp').pipe(g.clean());
});
/*
 *  Styles
 */
<% if(filters.sass){ %>
gulp.task('styles:sass', function(){
  return gulp.src(config.client.styles.sass)
    .pipe(g.rubySass({
      compass: true,
      style:'expanded',
      loadPath: ['client/bower_components','client/styles']
    }))
    .pipe(gulp.dest(config.build.styles))
    .pipe(g.cached('built-sass'))
    .pipe(g.livereload());
});
<% } %><% if(filters.less){ %>
gulp.task('styles:less', function(){
  return gulp.src(config.client.styles.less)
    .pipe(g.less())
    .pipe(gulp.dest(config.build.styles))
    .pipe(g.cached('built-less'))
    .pipe(g.livereload());
});
<% } %>
/*
 *  Scripts (GULP Will compile both JavaScript and CoffeeScript, But the root file will come first)
 */
 <% if(filters.js){ %>
gulp.task('scripts:root', function(){
  return gulp.src(config.client.scripts.root)
    .pipe(g.jshint())
      .on('error', errorHandler.onWarning)
    .pipe(g.jshint.reporter('default'))
    .pipe(g.ngAnnotate())
    .pipe(g.concat(config.app_file_name))
    .pipe( gulp.dest( config.build.scripts ) )
    .pipe(g.livereload())
});
gulp.task('scripts:modules', function(){
  return gulp.src(config.client.scripts.modules)
    .pipe(g.jshint())
      .on('error', errorHandler.onWarning)
    .pipe(g.jshint.reporter('default'))
    .pipe(g.ngAnnotate())
    .pipe(g.concat(config.modules_file_name))
    .pipe( gulp.dest( config.build.scripts ) )
    .pipe(g.livereload())
});
<% } %><% if(filters.coffee){ %>
gulp.task('scripts:root', function(){
  return gulp.src(config.client.scripts.root)
    .pipe(g.coffee())
    .pipe(g.jshint())
      .on('error', errorHandler.onWarning)
    .pipe(g.jshint.reporter('default'))
    .pipe(g.ngAnnotate())
    .pipe(g.concat(config.app_file_name))
    .pipe( gulp.dest( config.build.scripts ) )
    .pipe(g.livereload())
});
gulp.task('scripts:modules', function(){
  return gulp.src(config.client.scripts.modules)
    .pipe(g.coffee())
    .pipe(g.jshint())
      .on('error', errorHandler.onWarning)
    .pipe(g.jshint.reporter('default'))
    .pipe(g.ngAnnotate())
    .pipe(g.concat(config.modules_file_name))
    .pipe( gulp.dest( config.build.scripts ) )
    .pipe(g.livereload())
});
<% } %>



/*
 *  Templates
 *  =========
 */

gulp.task('templates:jade', function(){
  return gulp.src(config.client.templates.jade)
    .pipe(jade())
    .pipe(g.angularTemplatecache( config.jade_templates, { module: config.client.module}))
    .pipe(gulp.dest( config.build.templates ))
    .pipe(g.livereload());
});
gulp.task('templates:html', function(){
  return gulp.src(config.client.templates.html)
    .pipe(g.angularTemplatecache( config.html_templates, { module: config.client.module}))
    .pipe(gulp.dest( config.build.templates ))
    .pipe(g.livereload());
});


/*
 *  Inject Scripts
 *  =============
 */
gulp.task('inject:scripts', function(){
  var target = gulp.src(config.client.index);
  var root = gulp.src(config.build.scripts+config.app_file_name,{read: false});
  var modules = gulp.src(config.build.scripts+config.modules_file_name,{read: false});
  return target
    .pipe(g.inject(root, {
      addRootSlash: false,
      name: 'root',
      transform: function(filepath, file, i, length){
        console.log("FILES", filepath.split('.tmp')[1]);
        return '<script type="text/javascript" src="'+filepath.split('.tmp')[1]+'"></script>';
      }
    }))
    .pipe(g.inject(modules, {
      addRootSlash: false,
      name: 'modules',
      transform: function(filepath, file, i, length){
        console.log("FILES", filepath.split('.tmp')[1]);
        return '<script type="text/javascript" src="'+filepath.split('.tmp')[1]+'"></script>';
      }
    }))
    .pipe(gulp.dest('client'));
});

/*
 *  Inject Vendor
 *  =============
 */

gulp.task('inject:vendor', function(){
  var target = gulp.src(config.client.index);
  var vendor = gulp.src( config.client.vendor, {read: false});
  return target
    .pipe( g.inject(vendor, {
      addRootSlash: false,
      relative: true,
      name: 'vendor'
    }))
    .pipe(gulp.dest('client'));
});

/*
 *  Inject Styles
 *  =============
 */
gulp.task('inject:styles', function(){
  var target = gulp.src(config.client.index);
  var styles = gulp.src( config.build.styles+'*.css' ,{read: false});
  return target
    .pipe(g.inject(styles, {
      addRootSlash: true,
      name: 'styles',
      transform: function(filepath, file, i, length){
        console.log("FILES", filepath.split('.tmp')[1]);
        return '<link rel="stylesheet" href="'+filepath.split('.tmp')[1]+'">';
      }
    })).pipe(gulp.dest('client'));
});

/*
 *  Inject Templates
 *  ================
 */
gulp.task('inject:templates', function(){
  var target = gulp.src(config.client.index);
  var templates = gulp.src( config.build.templates+'*.js'  ,{read: false});
  return target
    .pipe(g.inject(templates, {
      addRootSlash: false,
      name: 'templates',
      transform: function(filepath, file, i, length){
        console.log("FILES", filepath.split('.tmp')[1]);
        return '<script type="text/javascript" src="'+filepath.split('.tmp')[1]+'"></script>';
      }
    })).pipe(gulp.dest('client'));
});

/*
 *  Watch Index.html
 *  ================
 */
gulp.task('index', function(){
  return gulp.src(config.client.index)
    .pipe(g.livereload());
});

/*
 *  Copy Assets
 *  ============
 */
gulp.task('assets', function(){
  return gulp.src(config.client.assets)
    .pipe(gulp.dest(config.build.assets))
});

/*
 *  Inject Dependencies
 *  ==================
 */
gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;

  gulp.src('client/styles/*.scss')
    .pipe(wiredep({
        directory: 'client/bower_components'
    }))
    .pipe(gulp.dest('client/styles'));

  gulp.src('client/*.html')
    .pipe(wiredep({
      directory: 'client/bower_components',
      exclude: ['bootstrap-sass-official']
    }))
    .pipe(gulp.dest('client'));
});


/*
 *  Run Server
 *  ==========
 */
gulp.task('server', function () {
  g.nodemon({ script: 'servers/server/app.js', ext: 'html js', ignore: ['ignored.js'] })
    // .on('change', ['lint'])
    .on('restart', function () {
      console.log('restarted!')
    });
});


/*
 *  Watch Files
 *  ============
 */
gulp.task('watch', function(){

  gulp.watch(config.client.scripts.root, ['scripts:root']);
  gulp.watch(config.client.scripts.modules, ['scripts:modules', 'inject:scripts']);

  <% if(filters.sass){ %>gulp.watch(config.client.styles.sass, ['styles:sass']);<% } %>
  <% if(filters.less){ %>gulp.watch(config.client.styles.less, ['styles:less']);<% } %>
  // gulp.watch(config.client.styles.css, ['styles:css']);
  // gulp.watch(config.client.styles.stylus, ['styles:stylus']);
  gulp.watch(config.client.templates.jade, ['templates:jade']);
  gulp.watch(config.client.templates.html, ['templates:html']);
  gulp.watch(config.client.index, ['index']);

  var BuiltFiles = [
    config.build.scripts + '*.js',
    config.build.templates + '*.js',
    config.build.styles + '*.css',
  ]
  gulp.watch(BuiltFiles, notifyLiveReload)
});

/*
 * Styles
 */
gulp.task('styles', [<% if(filters.sass){ %>'styles:sass'<% } %><% if(filters.less){ %> 'styles:less'<% } %>]);

 /*
 * Scripts
 */
gulp.task('scripts', ['scripts:root', 'scripts:modules']);

/*
 * Templates
 */
gulp.task('templates', ['templates:html','templates:jade']);

/*
 * Inject
 */
gulp.task('inject', ['inject:styles', 'inject:scripts', 'inject:templates', 'inject:vendor']);

/*
 * Build
 */
gulp.task('build', function(cb){
  g.runSequence('clean', ['scripts', 'styles', 'templates', 'wiredep'], 'inject', cb);
});

/*
 * Default
 */
gulp.task('default', function(cb){
  g.runSequence('build', ['server', 'watch'], cb);
});



function notifyLiveReload(event){
  console.log('File ' + event.path + ' was ' + event.type + ', reloading...');
  gulp.src(event.path, { read:false })
    .pipe(g.livereload());
}
