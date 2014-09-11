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
  var name = this.name;

  var prompts = [
    {
      type    : 'input',
      name    : 'name',
      message : 'What is the name of this server?',
      default : this.name // Default to current folder name
    },{
      type    : 'input',
      name    : 'servicePort',
      message : 'What port would you like this server to run on?',
      default : 3000 // Default to current folder name
    },{
      type: "confirm",
      name: "useRoute",
      message: "Would you like a client route to go with this server",
    }
  ];
  this.prompt(prompts, function (props) {
    this.servicePort = props.servicePort;

    if(props.useRoute) this.filters.useRoute = true;
    this.filters.server = true;


    done();
  }.bind(this));
};

Generator.prototype.generateRoute = function(){
  if(this.filters.useRoute){
    this.composeWith('soa:model-route', {arguments: this.arguments}, {local:require.resolve('../model-route')});
  };
};

Generator.prototype.generateModel = function(){
  this.arguments.push('server');
  this.composeWith('soa:model', {arguments: this.arguments}, {local:require.resolve('../model')});
};

Generator.prototype.generateServer = function () {
  var dest = 'servers/'+this.name;
  this.sourceRoot(path.join(__dirname, './templates'));
  ngUtil.processDirectory(this, '.', dest);
};
