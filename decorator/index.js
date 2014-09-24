'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('ng-modules:decorator', {arguments: this.arguments}, { local: require.resolve('generator-ng-modules/decorator') });
  }
});

module.exports = Generator;