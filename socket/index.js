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

Generator.prototype.askFor = function askFor() {
  var done = this.async();
  var name = this.name;
  var prompts = [
    {
      name: 'dir',
      message: 'Where would you like to create the client side socket?',
      default: this.arguments[3]
    }
  ];
  this.prompt(prompts, function (props){

    if(this.arguments[1] === 'server') this.filters.server = true;
    if(this.arguments[2]) this.filters.serverPort = this.arguments[2];
    if(this.arguments[3]) this.dir = this.arguments[3];

    done();
  }.bind(this));

};
Generator.prototype.createFiles = function createFiles() {
  var dest = this.dir;
  this.sourceRoot(path.join(__dirname, './templates'));
  ngUtil.processDirectory(this, '.', dest);
};
