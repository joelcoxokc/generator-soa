'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('ng-modules:route', {arguments: this.arguments}, { local: require.resolve('generator-ng-modules/route') });
  }
});

module.exports = Generator;