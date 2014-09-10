'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var util = require('util');
var ngUtil = require('../util');
var ScriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.promptClientService = function () {
  var done = this.async();

  var prompts = [
    {
      type    : 'input',
      name    : 'name',
      message : 'What is the name of this server?',
      default : this.arguments // Default to current folder name
    },{
      type    : 'input',
      name    : 'servicePort',
      message : 'What port would you like this server to run on?',
      default : 3000 // Default to current folder name
    },{
      type: "list",
      name: "ngComponent",
      default: 'route',
      message: "What type of angular component would you like to connect with?",
      choices: ["route", "service"],
      filter: function( val ) { return val.toLowerCase(); }
    }{
      name: 'route_dir',
      message: 'Where would you like to create this route?',
      default: 'client/app'
    },{
      name: 'route',
      message: 'What will the url of your route be?',
      default: '/' + name
    },{
      name: 'model_dir',
      message: 'Where would you like to create this client api model?',
      default: 'client/app/models'
    }
  ]
  this.prompt(prompts, function (props) {
    this.servicePort = props.servicePort;
    this.composeWith('ng-component:' +props.ngComponent, {arguments: this.arguments}, { local: require.resolve('generator-ng-component/'+props.ngComponent) });
    // this.composeWith('ng-component:model', {arguments: this.arguments}, { local: require.resolve('generator-ng-component/model') });
    this.route_dir = path.join(props.route_dir, this.name);
    this.model_dir = path.join(props.model_dir, this.name);
    this.route = props.route;
    done();
  }.bind(this));
};

Generator..prototype.generateRoute = function(){



};

Generator.prototype.createFiles = function createFiles() {
  var basePath = this.config.get('basePath') || '';
  this.htmlUrl = ngUtil.relativeUrl(basePath, path.join(this.dir,this.name + '.html'));
  ngUtil.copyTemplates(this, 'route');
};
}
Generator.prototype.generateModel = function(){
  this.sourceRoot(path.join(__dirname, '../model'));
  ngUtil.processDirectory(this, '.', this.dir)
}
Generator.prototype.generateServer = function () {

  this.log(this.filters)
  var dest = 'servers/'+this.arguments;
  this.sourceRoot(path.join(__dirname, './templates'));
  ngUtil.processDirectory(this, '.', dest);
};

module.exports = Generator;



// 'use strict';
// var path = require('path');
// var yeoman = require('yeoman-generator');
// var util = require('util');
// var ngUtil = require('../util');
// var ScriptBase = require('../script-base.js');

// var Generator = module.exports = function Generator() {
//   ScriptBase.apply(this, arguments);
// };

// util.inherits(Generator, ScriptBase);

// Generator.prototype.askFor = function askFor() {

//   var done = this.async();
//   var name = this.name;

//   var base = this.config.get('routesBase') || '/api/';
//   if(base.charAt(base.length-1) !== '/') {
//     base = base + '/';
//   }

//   // pluralization defaults to true for backwards compat
//   if (this.config.get('pluralizeRoutes') !== false) {
//     name = name + 's';
//   }

//   var prompts = [
//     {
//       name: 'route',
//       message: 'What will the url of your endpoint to be?',
//       default: base + name
//     }
//   ];

//   this.prompt(prompts, function (props) {
//     if(props.route.charAt(0) !== '/') {
//       props.route = '/' + props.route;
//     }

//     this.route = props.route;
//     done();
//   }.bind(this));
// };

// Generator.prototype.registerEndpoint = function registerEndpoint() {
//   if(this.config.get('insertRoutes')) {
//     var routeConfig = {
//       file: this.config.get('registerRoutesFile'),
//       needle: this.config.get('routesNeedle'),
//       splicable: [
//         "app.use(\'" + this.route +"\', require(\'./api/" + this.name + "\'));"
//       ]
//     };
//     ngUtil.rewriteFile(routeConfig);
//   }

//   if (this.filters.socketio) {
//     if(this.config.get('insertSockets')) {
//       var socketConfig = {
//         file: this.config.get('registerSocketsFile'),
//         needle: this.config.get('socketsNeedle'),
//         splicable: [
//           "require(\'../api/" + this.name + '/' + this.name + ".socket\').register(socket);"
//         ]
//       };
//       ngUtil.rewriteFile(socketConfig);
//     }
//   }
// };

// Generator.prototype.createFiles = function createFiles() {
//   var dest = this.config.get('endpointDirectory') || 'server/api/' + this.name;
//   this.sourceRoot(path.join(__dirname, './templates'));
//   ngUtil.processDirectory(this, '.', dest);
// };

