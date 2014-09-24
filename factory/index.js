'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('ng-modules:factory', {arguments: this.arguments}, { local: require.resolve('generator-ng-modules/factory') });
  }
});

module.exports = Generator;