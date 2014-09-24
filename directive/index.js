'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('ng-modules:directive', {arguments: this.arguments}, { local: require.resolve('generator-ng-modules/directive') });
  }
});

module.exports = Generator;