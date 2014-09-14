(function() {
  'use strict';
  angular.module('v3App').directive('gaugeChart', [
    function() {
      return {
        restrict: 'A',
        scope: {
          data: '=',
          options: '='
        },
        link: function(scope, ele, attrs) {
          var data, gauge, options;
          data = scope.data;
          options = scope.options;
          gauge = new Gauge(ele[0]).setOptions(options);
          gauge.maxValue = data.maxValue;
          gauge.animationSpeed = data.animationSpeed;
          return gauge.set(data.val);
        }
      };
    }
  ]).directive('flotChart', [
    function() {
      return {
        restrict: 'A',
        scope: {
          data: '=',
          options: '='
        },
        link: function(scope, ele, attrs) {
          var data, options, plot;
          data = scope.data;
          options = scope.options;
          return plot = $.plot(ele[0], data, options);
        }
      };
    }
  ]).directive('flotChartRealtime', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele, attrs) {
          var data, getRandomData, plot, totalPoints, update, updateInterval;
          data = [];
          totalPoints = 300;
          getRandomData = function() {
            var i, prev, res, y;
            if (data.length > 0) {
              data = data.slice(1);
            }
            while (data.length < totalPoints) {
              prev = (data.length > 0 ? data[data.length - 1] : 50);
              y = prev + Math.random() * 10 - 5;
              if (y < 0) {
                y = 0;
              } else {
                if (y > 100) {
                  y = 100;
                }
              }
              data.push(y);
            }
            res = [];
            i = 0;
            while (i < data.length) {
              res.push([i, data[i]]);
              ++i;
            }
            return res;
          };
          update = function() {
            plot.setData([getRandomData()]);
            plot.draw();
            setTimeout(update, updateInterval);
          };
          data = [];
          totalPoints = 300;
          updateInterval = 200;
          plot = $.plot(ele[0], [getRandomData()], {
            series: {
              lines: {
                show: true,
                fill: true
              },
              shadowSize: 0
            },
            yaxis: {
              min: 0,
              max: 100
            },
            xaxis: {
              show: false
            },
            grid: {
              hoverable: true,
              borderWidth: 1,
              borderColor: '#eeeeee'
            },
            colors: ["#5BDDDC"]
          });
          return update();
        }
      };
    }
  ]).directive('sparkline', [
    function() {
      return {
        restrict: 'A',
        scope: {
          data: '=',
          options: '='
        },
        link: function(scope, ele, attrs) {
          var data, options, sparkResize, sparklineDraw;
          data = scope.data;
          options = scope.options;
          sparkResize = void 0;
          sparklineDraw = function() {
            return ele.sparkline(data, options);
          };
          $(window).resize(function(e) {
            clearTimeout(sparkResize);
            return sparkResize = setTimeout(sparklineDraw, 200);
          });
          return sparklineDraw();
        }
      };
    }
  ]).directive('morrisChart', [
    function() {
      return {
        restrict: 'A',
        scope: {
          data: '='
        },
        link: function(scope, ele, attrs) {
          var colors, data, func, options;
          data = scope.data;
          switch (attrs.type) {
            case 'line':
              if (attrs.lineColors === void 0 || attrs.lineColors === '') {
                colors = null;
              } else {
                colors = JSON.parse(attrs.lineColors);
              }
              options = {
                element: ele[0],
                data: data,
                xkey: attrs.xkey,
                ykeys: JSON.parse(attrs.ykeys),
                labels: JSON.parse(attrs.labels),
                lineWidth: attrs.lineWidth || 2,
                lineColors: colors || ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed']
              };
              return new Morris.Line(options);
            case 'area':
              if (attrs.lineColors === void 0 || attrs.lineColors === '') {
                colors = null;
              } else {
                colors = JSON.parse(attrs.lineColors);
              }
              options = {
                element: ele[0],
                data: data,
                xkey: attrs.xkey,
                ykeys: JSON.parse(attrs.ykeys),
                labels: JSON.parse(attrs.labels),
                lineWidth: attrs.lineWidth || 2,
                lineColors: colors || ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
                behaveLikeLine: attrs.behaveLikeLine || false,
                fillOpacity: attrs.fillOpacity || 'auto',
                pointSize: attrs.pointSize || 4
              };
              return new Morris.Area(options);
            case 'bar':
              if (attrs.barColors === void 0 || attrs.barColors === '') {
                colors = null;
              } else {
                colors = JSON.parse(attrs.barColors);
              }
              options = {
                element: ele[0],
                data: data,
                xkey: attrs.xkey,
                ykeys: JSON.parse(attrs.ykeys),
                labels: JSON.parse(attrs.labels),
                barColors: colors || ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
                stacked: attrs.stacked || null
              };
              return new Morris.Bar(options);
            case 'donut':
              if (attrs.colors === void 0 || attrs.colors === '') {
                colors = null;
              } else {
                colors = JSON.parse(attrs.colors);
              }
              options = {
                element: ele[0],
                data: data,
                colors: colors || ['#0B62A4', '#3980B5', '#679DC6', '#95BBD7', '#B0CCE1', '#095791', '#095085', '#083E67', '#052C48', '#042135']
              };
              if (attrs.formatter) {
                func = new Function('y', 'data', attrs.formatter);
                options.formatter = func;
              }
              return new Morris.Donut(options);
          }
        }
      };
    }
  ]);

}).call(this);

