(function() {
  'use strict';
  angular.module('<%= scriptAppName %>').factory('uiPages', [
    function() {
      var pages = {
        charts: [
          'others',
          'flot',
          'morris'
        ],
        dashboard: [
          'dashboard'
        ],
        forms: [
          'elements',
          'layouts',
          'validation',
          'wizard'
        ],
        mail: [
          'compose',
          'inbox',
          'single'
        ],
        maps: [
          'gmap',
          'jqvmap'
        ],
        pages: [
          '404',
          '500',
          'about',
          'blank',
          'contact',
          'features',
          'forgot_password',
          'invoice',
          'lock_screen',
          'profle',
          'services',
          'signin',
          'signup'
        ],
        tables: [
          'dynamic',
          'responsive',
          'static'
        ],
        tasks: [
          'tasks'
        ],
        ui: [
          'buttons',
          'calendar',
          'components',
          'grids',
          'icons',
          'nested_lists',
          'pricing_tables',
          'timeline',
          'typography',
          'widgets',
        ]
      }
      return {
        all: function() {
          return pages;
        }
      };
    }
  ]);

}).call(this);

