(function() {
  'use strict';
  angular.module('<%= scriptAppName %>.localization', []).factory('localize', [
    '$http', '$rootScope', '$window', function($http, $rootScope, $window) {
      var localize;
      localize = {
        language: '',
        url: void 0,
        resourceFileLoaded: false,
        successCallback: function(data) {
          localize.dictionary = data;
          localize.resourceFileLoaded = true;
          return $rootScope.$broadcast('localizeResourcesUpdated');
        },
        setLanguage: function(value) {
          localize.language = value.toLowerCase().split("-")[0];
          return localize.initLocalizedResources();
        },
        setUrl: function(value) {
          localize.url = value;
          return localize.initLocalizedResources();
        },
        buildUrl: function() {
          if (!localize.language) {
            localize.language = ($window.navigator.userLanguage || $window.navigator.language).toLowerCase();
            localize.language = localize.language.split("-")[0];
          }
          return 'i18n/resources-locale_' + localize.language + '.js';
        },
        initLocalizedResources: function() {
          var url;
          url = localize.url || localize.buildUrl();
          return $http({
            method: "GET",
            url: url,
            cache: false
          }).success(localize.successCallback).error(function() {
            return $rootScope.$broadcast('localizeResourcesUpdated');
          });
        },
        getLocalizedString: function(value) {
          var result, valueLowerCase;
          result = void 0;
          if (localize.dictionary && value) {
            valueLowerCase = value.toLowerCase();
            if (localize.dictionary[valueLowerCase] === '') {
              result = value;
            } else {
              result = localize.dictionary[valueLowerCase];
            }
          } else {
            result = value;
          }
          return result;
        }
      };
      return localize;
    }
  ]).directive('i18n', [
    'localize', function(localize) {
      var i18nDirective;
      i18nDirective = {
        restrict: "EA",
        updateText: function(ele, input, placeholder) {
          var result;
          result = void 0;
          if (input === 'i18n-placeholder') {
            result = localize.getLocalizedString(placeholder);
            return ele.attr('placeholder', result);
          } else if (input.length >= 1) {
            result = localize.getLocalizedString(input);
            return ele.text(result);
          }
        },
        link: function(scope, ele, attrs) {
          scope.$on('localizeResourcesUpdated', function() {
            return i18nDirective.updateText(ele, attrs.i18n, attrs.placeholder);
          });
          return attrs.$observe('i18n', function(value) {
            return i18nDirective.updateText(ele, value, attrs.placeholder);
          });
        }
      };
      return i18nDirective;
    }
  ]).controller('LangCtrl', [
    '$scope', 'localize', function($scope, localize) {
      $scope.lang = 'English';
      $scope.setLang = function(lang) {
        switch (lang) {
          case 'English':
            localize.setLanguage('EN-US');
            break;
          case 'Español':
            localize.setLanguage('ES-ES');
            break;
          case '日本語':
            localize.setLanguage('JA-JP');
            break;
          case '中文':
            localize.setLanguage('ZH-TW');
            break;
          case 'Deutsch':
            localize.setLanguage('DE-DE');
            break;
          case 'français':
            localize.setLanguage('FR-FR');
            break;
          case 'Italiano':
            localize.setLanguage('IT-IT');
            break;
          case 'Portugal':
            localize.setLanguage('PT-BR');
            break;
          case 'Русский язык':
            localize.setLanguage('RU-RU');
            break;
          case '한국어':
            localize.setLanguage('KO-KR');
        }
        return $scope.lang = lang;
      };
      return $scope.getFlag = function() {
        var lang;
        lang = $scope.lang;
        switch (lang) {
          case 'English':
            return 'flags-american';
          case 'Español':
            return 'flags-spain';
          case '日本語':
            return 'flags-japan';
          case '中文':
            return 'flags-china';
          case 'Deutsch':
            return 'flags-germany';
          case 'français':
            return 'flags-france';
          case 'Italiano':
            return 'flags-italy';
          case 'Portugal':
            return 'flags-portugal';
          case 'Русский язык':
            return 'flags-russia';
          case '한국어':
            return 'flags-korea';
        }
      };
    }
  ]);

}).call(this);
