'use strict';
(function(){
  angular
    .module('<%= scriptAppName %>.directives', [
      'imgHolder',
      'customBackground',
      'uiColorSwitch',
      'toggleMinNav',
      'collapseNav',
      'highlightActive',
      'toggleOffCanvas',
      'slimScroll',
      'goBack'
    ])
}).call(this);