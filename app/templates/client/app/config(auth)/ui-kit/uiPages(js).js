(function() {
  'use strict';
  angular.module('<%= scriptAppName %>').factory('uiPages', [
    function() {
      var pages = {
        charts: {
          icon: 'fa-bar-chart-o',
          children :[
          'others',
          'flot',
          'morris'
          ]
        },
        dashboard: {
          icon: 'fa-dashboard',
          children :[
          'dashboard'
          ]
        },
        forms: {
          icon: 'fa-pencil',
          children :[
          'elements',
          'layouts',
          'validation',
          'wizard'
          ]
        },
        mail: {
          icon: 'fa-envelope-o',
          children :[
          'compose',
          'inbox',
          'single'
          ]
        },
        maps: {
          icon: 'fa-map-marker',
          children :[
            'gmap',
            'jqvmap'
          ]
        },
        pages: {
          icon: 'fa-file-text-o',
          children :[
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
         ]
        },
        tables: {
          icon: 'fa-table',
          children :[
          'dynamic',
          'responsive',
          'static'
         ]
        },
        tasks: {
          icon: 'fa-map',
          children :[
          'tasks'
          ]
        },
        ui: {
          icon: 'fa-magic',
          children :[
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
      }
      return {
        all: function() {
          return pages;
        }
      };
    }
  ]);

}).call(this);

