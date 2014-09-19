var config = {

  client: {
    path: 'client',

    scripts: {
      <% if(filters.coffee){ %>root: 'client/app/app.coffee',
      modules: ['client/{app,components}/**/*.coffee','!client/{app,components}/**/*.spec.coffee', '!client/app/app.coffee'],<% } %>
      <% if(filters.js){ %>root: 'client/app/app.js',
      modules: ['client/{app,components}/**/*.js', '!client/app/app.js', '!client/{app,components}/**/*.spec.js'],<% } %>
    },

    styles: {
      <% if(filters.sass){ %>sass: ['client/styles/*.scss'],<% } %>
      <% if(filters.less){ %>less: ['client/styles/*.less'],<% } %>
      <% if(filters.css){ %>css: ['client/styles/*.css'],<% } %>
      <% if(filters.stylus){ %>stylus: ['client/styles/*.styl']<% } %>
    },

    index: 'client/index.html',
    templates:{
     jade: 'client/{app,components}/**/*.jade',
     html: ['client/{app,components}/**/*.html']
    },

    vendor: 'client/vendor/**/*.js',
    assets: 'client/assets/**/*',
    module: '<%= scriptAppName %>',

  },
  build: {
    path: '.tmp/',
    styles: '.tmp/styles/',
    scripts: '.tmp/scripts/',
    templates: '.tmp/templates/',
    dist: 'dist/public',
    assets: '.tmp/assets/',
    fonts: '.tmp/fonts'
  },
  app_file_name: 'app.js',
  modules_file_name: 'modules.js',
  vendor_file_name: 'vendor.js',
  css_file_name: 'app.css',
  jade_templates: 'jade-templates.js',
  html_templates: 'html-templates.js'
}
module.exports = config;