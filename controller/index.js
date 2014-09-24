'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('ng-modules:controller', {arguments: this.arguments}, { local: require.resolve('generator-ng-modules/controller') });
  }
});

module.exports = Generator;