(function() {
  'use strict';
  angular.module('<%= scriptAppName %>.ui.directives', []).directive('uiTime', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele) {
          var checkTime, startTime;
          startTime = function() {
            var h, m, s, t, time, today;
            today = new Date();
            h = today.getHours();
            m = today.getMinutes();
            s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            time = h + ":" + m + ":" + s;
            ele.html(time);
            return t = setTimeout(startTime, 500);
          };
          checkTime = function(i) {
            if (i < 10) {
              i = "0" + i;
            }
            return i;
          };
          return startTime();
        }
      };
    }
  ]).directive('uiWeather', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele, attrs) {
          var color, icon, skycons;
          color = attrs.color;
          icon = Skycons[attrs.icon];
          skycons = new Skycons({
            "color": color,
            "resizeClear": true
          });
          skycons.add(ele[0], icon);
          return skycons.play();
        }
      };
    }
  ]);

}).call(this);

