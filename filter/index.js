'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('ng-modules:filter', {arguments: this.arguments}, { local: require.resolve('generator-ng-modules/filter') });
  }
});

module.exports = Generator;