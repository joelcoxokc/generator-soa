'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('ng-modules:service', {arguments: this.arguments}, { local: require.resolve('generator-ng-modules/service') });
  }
});

module.exports = Generator;