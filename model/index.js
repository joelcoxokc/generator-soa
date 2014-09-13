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
      message: 'Where would you like to create the client side model?',
      default: 'client/app/models'
    },{
      type: 'confirm',
      name: 'restangular',
      message: 'Would you like to use Restangular?',
    }
  ];
  this.prompt(prompts, function (props){
    if(props.restangular) this.filters.restangular = true;
    if (this.config.get('pluralizeRoutes') !== false) {
      name = name + 's';
      this.route = name;
    }

    this.dir = path.join(props.dir, this.name);


    if(this.arguments[1] === 'server') this.filters.server = true;
    if(this.arguments[2]) this.filters.serverPort = this.arguments[2];
    console.log('restangular', this.filters)
    console.log('server', this.filters.server)
    done();
  }.bind(this));

};

Generator.prototype.createSocket = function createSocket() {
  if(this.filters.server){
    var args = Array.prototype.slice.call(this.arguments);
    args.push(this.dir)
    this.composeWith('soa:socket', {arguments: args}, {local:require.resolve('../socket')});
  }
}

Generator.prototype.createFiles = function createFiles() {
  var dest = this.dir;
  this.sourceRoot(path.join(__dirname, './templates'));
  ngUtil.processDirectory(this, '.', dest);
};
