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
   return gulp.src('./.tmp').pipe(g.clean());
});
/*
 *  Styles
 */

gulp.task('styles:less', function(){
  return gulp.src(config.client.styles.less)
    .pipe(g.less())
    .pipe(gulp.dest(config.build.styles))
    .pipe(g.cached('built-less'))
    // .pipe(g.livereload());
});

/*
 *  Scripts (GULP Will compile both JavaScript and CoffeeScript, But the root file will come first)
 */

gulp.task('scripts:root', function(){
  return gulp.src(config.client.scripts.root)
    .pipe(g.coffee())
    .pipe(g.jshint())
      .on('error', errorHandler.onWarning)
    .pipe(g.jshint.reporter('default'))
    .pipe(g.ngAnnotate())
    .pipe(g.concat(config.app_file_name))
    .pipe( gulp.dest( config.build.scripts ) )
    // .pipe(g.livereload())
});
gulp.task('scripts:modules', function(){
  return gulp.src(config.client.scripts.modules)
    .pipe(g.coffee())
    .pipe(g.jshint())
      .on('error', errorHandler.onWarning)
    .pipe(g.jshint.reporter('default'))
    .pipe(g.ngAnnotate())
    .pipe(g.concat(config.modules_file_name))
    .pipe( gulp.dest( config.build.scripts ))
    // .pipe(g.livereload());
});


/*
 *  Templates
 *  =========
 */
gulp.task('templates:jade', function(){
  return gulp.src(config.client.templates.jade)
    .pipe(jade())
    .pipe(g.angularTemplatecache( config.jade_templates, { module: config.client.module}))
    .pipe(gulp.dest( config.build.templates ))
    // .pipe(g.livereload());
});
gulp.task('templates:html', function(){
  return gulp.src(config.client.templates.html)
    .pipe(g.angularTemplatecache( config.html_templates, { module: config.client.module}))
    .pipe(gulp.dest( config.build.templates ))
    // .pipe(g.livereload());
});


/*
 *  Inject Scripts
 *  =============
 */
gulp.task('inject:scripts',['scripts'], function(){
  var target = gulp.src('./client/index.html');
  var root = gulp.src(['./.tmp/scripts/app.js', './.tmp/scripts/modules.js'],{read: false});

  return target
    .pipe(g.inject(root, {
      addRootSlash: false,
      ignorePath: '.tmp'
    }))
    .pipe(gulp.dest('./client'));
});


/*
 *  Inject Styles
 *  =============
 */
gulp.task('inject:styles',['styles'], function(){
  var target = gulp.src('./client/index.html');
  var styles = gulp.src(['./.tmp/styles/*.css'] ,{read: false});
  return target
    .pipe(g.inject(styles, {
      addRootSlash: true,
      name: 'styles',
      ignorePath: '.tmp',
    })).pipe(gulp.dest('./client'));
});

/*
 *  Inject Templates
 *  ================
 */
gulp.task('inject:templates',['templates'], function(){
  var target = gulp.src('./client/index.html');
  var templates = gulp.src(['./.tmp/templates/*.js'],{read: false});
  return target
    .pipe(g.inject(templates, {
      addRootSlash: true,
      name: 'templates',
      ignorePath: '.tmp',
    })).pipe(gulp.dest('./client'));
});

/*
 *  Inject Vendor
 *  =============
 */

gulp.task('inject:vendor', function(){
  var target = gulp.src('./client/index.html');
  var vendor = gulp.src(['./client/vendor/*.js'], {read: false});
  return target
    .pipe( g.inject(vendor, {
      addRootSlash: false,
      relative: true,
      name: 'vendor'
    }))
    .pipe(gulp.dest('./client'));
});
/*
 *  Watch Index.html
 *  ================
 */
// gulp.task('index', function(){
//   return gulp.src(config.client.index)
//     .pipe(g.livereload());
// });

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
  gulp.watch(config.client.scripts.modules, ['scripts:modules']);


  gulp.watch(config.client.styles.less, ['styles:less']);
  // gulp.watch(config.client.styles.css, ['styles:css']);
  // gulp.watch(config.client.styles.stylus, ['styles:stylus']);
  gulp.watch(config.client.templates.jade, ['templates:jade']);
  gulp.watch(config.client.templates.html, ['templates:html']);
  // gulp.watch(config.client.index, ['index']);

  // var BuiltFiles = [
  //   config.build.scripts + '*.js',
  //   config.build.templates + '*.js',
  //   config.build.styles + '*.css',
  // ]
  // gulp.watch(BuiltFiles, notifyLiveReload)
});

/*
 * Styles
 */
gulp.task('styles', [ 'styles:less']);

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
gulp.task('inject', ['inject:styles', 'inject:vendor', 'inject:scripts', 'inject:templates']);

/*
 * Build
 */
gulp.task('build', function(cb){
  g.runSequence('clean', ['scripts', 'styles','templates'], 'inject', cb);
});

/*
 * Default
 */
gulp.task('default', function(cb){
  g.runSequence('build', ['wiredep', 'server', 'watch'], cb);
});



function notifyLiveReload(event){
  console.log('File ' + event.path + ' was ' + event.type + ', reloading...');
  gulp.src(event.path, { read:false })
    .pipe(g.livereload());
}
