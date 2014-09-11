'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var util = require('util');
var ngUtil = require('../util');
var ScriptBase = require('../script-base.js');

// var Generator = yeoman.generators.Base.extend({
//   compose: function() {
//     this.composeWith('ng-component:route', {arguments: this.arguments}, { local: require.resolve('generator-ng-component/route') });
//   }
// });

// module.exports = Generator;


var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.askFor = function askFor() {
  var done = this.async();
  var name = this.name;
  var prompts = [
    {
      name: 'dir',
      message: 'Where would you like to create this route?',
      default: 'client/app'
    },{
      name: 'route',
      message: 'What will the url of your route be?',
      default: '/' + name
    },
  ];
  this.prompt(prompts, function (props){
    this.route = props.route;
    this.dir = path.join(props.dir, this.name);
    var dir = this.dir;
    if(dir.split('/')[0] === 'client'){
      dir = dir.split('/').splice(1).join('/')
    }
    this.log(dir)
    this.log(this.dir)
    this.htmlUrl = path.join(dir, this.name + '.html');

    done();
  }.bind(this));

};
Generator.prototype.createFiles = function createFiles() {
  var dest = this.dir;
  this.sourceRoot(path.join(__dirname, './templates'));
  ngUtil.processDirectory(this, '.', dest);
};
