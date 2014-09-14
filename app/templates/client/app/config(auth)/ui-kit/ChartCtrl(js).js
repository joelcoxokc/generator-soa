(function() {
  'use strict';
  angular.module('<%= scriptAppName %>').controller('chartCtrl', [
    '$scope', function($scope) {
      $scope.easypiechart = {
        percent: 65,
        options: {
          animate: {
            duration: 1000,
            enabled: true
          },
          barColor: '#31C0BE',
          lineCap: 'round',
          size: 180,
          lineWidth: 5
        }
      };
      $scope.easypiechart2 = {
        percent: 35,
        options: {
          animate: {
            duration: 1000,
            enabled: true
          },
          barColor: '#66B5D7',
          lineCap: 'round',
          size: 180,
          lineWidth: 10
        }
      };
      $scope.easypiechart3 = {
        percent: 68,
        options: {
          animate: {
            duration: 1000,
            enabled: true
          },
          barColor: '#60CD9B',
          lineCap: 'square',
          size: 180,
          lineWidth: 20,
          scaleLength: 0
        }
      };
      $scope.gaugeChart1 = {
        data: {
          maxValue: 3000,
          animationSpeed: 40,
          val: 1375
        },
        options: {
          lines: 12,
          angle: 0,
          lineWidth: 0.47,
          pointer: {
            length: 0.6,
            strokeWidth: 0.03,
            color: '#000000'
          },
          limitMax: 'false',
          colorStart: '#A3C86D',
          colorStop: '#A3C86D',
          strokeColor: '#E0E0E0',
          generateGradient: true,
          percentColors: [[0.0, '#60CD9B'], [1.0, '#60CD9B']]
        }
      };
      $scope.gaugeChart2 = {
        data: {
          maxValue: 3000,
          animationSpeed: 45,
          val: 1200
        },
        options: {
          lines: 12,
          angle: 0,
          lineWidth: 0.47,
          pointer: {
            length: 0.6,
            strokeWidth: 0.03,
            color: '#464646'
          },
          limitMax: 'true',
          colorStart: '#7ACBEE',
          colorStop: '#7ACBEE',
          strokeColor: '#F1F1F1',
          generateGradient: true,
          percentColors: [[0.0, '#66B5D7'], [1.0, '#66B5D7']]
        }
      };
      return $scope.gaugeChart3 = {
        data: {
          maxValue: 3000,
          animationSpeed: 50,
          val: 1100
        },
        options: {
          lines: 12,
          angle: 0,
          lineWidth: 0.47,
          pointer: {
            length: 0.6,
            strokeWidth: 0.03,
            color: '#464646'
          },
          limitMax: 'true',
          colorStart: '#FF7857',
          colorStop: '#FF7857',
          strokeColor: '#F1F1F1',
          generateGradient: true,
          percentColors: [[0.0, '#E87352'], [1.0, '#E87352']]
        }
      };
    }
  ]).controller('morrisChartCtrl', [
    '$scope', function($scope) {
      $scope.mainData = [
        {
          month: '2013-01',
          xbox: 294000,
          will: 136000,
          playstation: 244000
        }, {
          month: '2013-02',
          xbox: 228000,
          will: 335000,
          playstation: 127000
        }, {
          month: '2013-03',
          xbox: 199000,
          will: 159000,
          playstation: 130000
        }, {
          month: '2013-04',
          xbox: 174000,
          will: 160000,
          playstation: 82000
        }, {
          month: '2013-05',
          xbox: 255000,
          will: 318000,
          playstation: 82000
        }, {
          month: '2013-06',
          xbox: 298400,
          will: 401800,
          playstation: 98600
        }, {
          month: '2013-07',
          xbox: 370000,
          will: 225000,
          playstation: 159000
        }, {
          month: '2013-08',
          xbox: 376700,
          will: 303600,
          playstation: 130000
        }, {
          month: '2013-09',
          xbox: 527800,
          will: 301000,
          playstation: 119400
        }
      ];
      $scope.simpleData = [
        {
          year: '2008',
          value: 20
        }, {
          year: '2009',
          value: 10
        }, {
          year: '2010',
          value: 5
        }, {
          year: '2011',
          value: 5
        }, {
          year: '2012',
          value: 20
        }, {
          year: '2013',
          value: 19
        }
      ];
      $scope.comboData = [
        {
          year: '2008',
          a: 20,
          b: 16,
          c: 12
        }, {
          year: '2009',
          a: 10,
          b: 22,
          c: 30
        }, {
          year: '2010',
          a: 5,
          b: 14,
          c: 20
        }, {
          year: '2011',
          a: 5,
          b: 12,
          c: 19
        }, {
          year: '2012',
          a: 20,
          b: 19,
          c: 13
        }, {
          year: '2013',
          a: 28,
          b: 22,
          c: 20
        }
      ];
      return $scope.donutData = [
        {
          label: "Download Sales",
          value: 12
        }, {
          label: "In-Store Sales",
          value: 30
        }, {
          label: "Mail-Order Sales",
          value: 20
        }, {
          label: "Online Sales",
          value: 19
        }
      ];
    }
  ]).controller('flotChartCtrl', [
    '$scope', function($scope) {
      var areaChart, barChart, lineChart1;
      lineChart1 = {};
      lineChart1.data1 = [[1, 15], [2, 20], [3, 14], [4, 10], [5, 10], [6, 20], [7, 28], [8, 26], [9, 22], [10, 23], [11, 24]];
      lineChart1.data2 = [[1, 9], [2, 15], [3, 17], [4, 21], [5, 16], [6, 15], [7, 13], [8, 15], [9, 29], [10, 21], [11, 29]];
      $scope.line1 = {};
      $scope.line1.data = [
        {
          data: lineChart1.data1,
          label: 'Product A'
        }, {
          data: lineChart1.data2,
          label: 'Product B',
          lines: {
            fill: false
          }
        }
      ];
      $scope.line1.options = {
        series: {
          lines: {
            show: true,
            fill: true,
            fillColor: {
              colors: [
                {
                  opacity: 0
                }, {
                  opacity: 0.3
                }
              ]
            }
          },
          points: {
            show: true,
            lineWidth: 2,
            fill: true,
            fillColor: "#ffffff",
            symbol: "circle",
            radius: 5
          }
        },
        colors: ["#31C0BE", "#8170CA", "#E87352"],
        tooltip: true,
        tooltipOpts: {
          defaultTheme: false
        },
        grid: {
          hoverable: true,
          clickable: true,
          tickColor: "#f9f9f9",
          borderWidth: 1,
          borderColor: "#eeeeee"
        },
        xaxis: {
          ticks: [[1, 'Jan.'], [2, 'Feb.'], [3, 'Mar.'], [4, 'Apr.'], [5, 'May'], [6, 'June'], [7, 'July'], [8, 'Aug.'], [9, 'Sept.'], [10, 'Oct.'], [11, 'Nov.'], [12, 'Dec.']]
        }
      };
      areaChart = {};
      areaChart.data1 = [[2007, 15], [2008, 20], [2009, 10], [2010, 5], [2011, 5], [2012, 20], [2013, 28]];
      areaChart.data2 = [[2007, 15], [2008, 16], [2009, 22], [2010, 14], [2011, 12], [2012, 19], [2013, 22]];
      $scope.area = {};
      $scope.area.data = [
        {
          data: areaChart.data1,
          label: "Value A",
          lines: {
            fill: true
          }
        }, {
          data: areaChart.data2,
          label: "Value B",
          points: {
            show: true
          },
          yaxis: 2
        }
      ];
      $scope.area.options = {
        series: {
          lines: {
            show: true,
            fill: false
          },
          points: {
            show: true,
            lineWidth: 2,
            fill: true,
            fillColor: "#ffffff",
            symbol: "circle",
            radius: 5
          },
          shadowSize: 0
        },
        grid: {
          hoverable: true,
          clickable: true,
          tickColor: "#f9f9f9",
          borderWidth: 1,
          borderColor: "#eeeeee"
        },
        colors: ["#60CD9B", "#8170CA"],
        tooltip: true,
        tooltipOpts: {
          defaultTheme: false
        },
        xaxis: {
          mode: "time"
        },
        yaxes: [
          {}, {
            position: "right"
          }
        ]
      };
      barChart = {};
      barChart.data1 = [[2008, 20], [2009, 10], [2010, 5], [2011, 5], [2012, 20], [2013, 28]];
      barChart.data2 = [[2008, 16], [2009, 22], [2010, 14], [2011, 12], [2012, 19], [2013, 22]];
      barChart.data3 = [[2008, 12], [2009, 30], [2010, 20], [2011, 19], [2012, 13], [2013, 20]];
      $scope.barChart = {};
      $scope.barChart.data = [
        {
          label: "Value A",
          data: barChart.data1
        }, {
          label: "Value B",
          data: barChart.data2
        }, {
          label: "Value C",
          data: barChart.data3
        }
      ];
      $scope.barChart.options = {
        series: {
          stack: true,
          bars: {
            show: true,
            fill: 1,
            barWidth: 0.3,
            align: "center",
            horizontal: false,
            order: 1
          }
        },
        grid: {
          hoverable: true,
          borderWidth: 1,
          borderColor: "#eeeeee"
        },
        tooltip: true,
        tooltipOpts: {
          defaultTheme: false
        },
        colors: ["#60CD9B", "#66B5D7", "#EEC95A", "#E87352"]
      };
      $scope.pieChart = {};
      $scope.pieChart.data = [
        {
          label: "Download Sales",
          data: 12
        }, {
          label: "In-Store Sales",
          data: 30
        }, {
          label: "Mail-Order Sales",
          data: 20
        }, {
          label: "Online Sales",
          data: 19
        }
      ];
      $scope.pieChart.options = {
        series: {
          pie: {
            show: true
          }
        },
        legend: {
          show: true
        },
        grid: {
          hoverable: true,
          clickable: true
        },
        colors: ["#60CD9B", "#66B5D7", "#EEC95A", "#E87352"],
        tooltip: true,
        tooltipOpts: {
          content: "%p.0%, %s",
          defaultTheme: false
        }
      };
      $scope.donutChart = {};
      $scope.donutChart.data = [
        {
          label: "Download Sales",
          data: 12
        }, {
          label: "In-Store Sales",
          data: 30
        }, {
          label: "Mail-Order Sales",
          data: 20
        }, {
          label: "Online Sales",
          data: 19
        }
      ];
      $scope.donutChart.options = {
        series: {
          pie: {
            show: true,
            innerRadius: 0.5
          }
        },
        legend: {
          show: true
        },
        grid: {
          hoverable: true,
          clickable: true
        },
        colors: ["#60CD9B", "#66B5D7", "#EEC95A", "#E87352"],
        tooltip: true,
        tooltipOpts: {
          content: "%p.0%, %s",
          defaultTheme: false
        }
      };
      $scope.donutChart2 = {};
      $scope.donutChart2.data = [
        {
          label: "Download Sales",
          data: 12
        }, {
          label: "In-Store Sales",
          data: 30
        }, {
          label: "Mail-Order Sales",
          data: 20
        }, {
          label: "Online Sales",
          data: 19
        }, {
          label: "Direct Sales",
          data: 15
        }
      ];
      return $scope.donutChart2.options = {
        series: {
          pie: {
            show: true,
            innerRadius: 0.5
          }
        },
        legend: {
          show: false
        },
        grid: {
          hoverable: true,
          clickable: true
        },
        colors: ["#1BB7A0", "#39B5B9", "#52A3BB", "#619CC4", "#6D90C5"],
        tooltip: true,
        tooltipOpts: {
          content: "%p.0%, %s",
          defaultTheme: false
        }
      };
    }
  ]).controller('flotChartCtrl.realtime', ['$scope', function($scope) {}]).controller('sparklineCtrl', [
    '$scope', function($scope) {
      $scope.demoData1 = {
        data: [3, 1, 2, 2, 4, 6, 4, 5, 2, 4, 5, 3, 4, 6, 4, 7],
        options: {
          type: 'line',
          lineColor: '#fff',
          highlightLineColor: '#fff',
          fillColor: '#60CD9B',
          spotColor: false,
          minSpotColor: false,
          maxSpotColor: false,
          width: '100%',
          height: '150px'
        }
      };
      $scope.simpleChart1 = {
        data: [3, 1, 2, 3, 5, 3, 4, 2],
        options: {
          type: 'line',
          lineColor: '#31C0BE',
          fillColor: '#bce0df',
          spotColor: false,
          minSpotColor: false,
          maxSpotColor: false
        }
      };
      $scope.simpleChart2 = {
        data: [3, 1, 2, 3, 5, 3, 4, 2],
        options: {
          type: 'bar',
          barColor: '#31C0BE'
        }
      };
      $scope.simpleChart3 = {
        data: [3, 1, 2, 3, 5, 3, 4, 2],
        options: {
          type: 'pie',
          sliceColors: ['#31C0BE', '#60CD9B', '#E87352', '#8170CA', '#EEC95A', '#60CD9B']
        }
      };
      $scope.tristateChart1 = {
        data: [1, 2, -3, -5, 3, 1, -4, 2],
        options: {
          type: 'tristate',
          posBarColor: '#95b75d',
          negBarColor: '#fa8564'
        }
      };
      $scope.largeChart1 = {
        data: [3, 1, 2, 3, 5, 3, 4, 2],
        options: {
          type: 'line',
          lineColor: '#674E9E',
          highlightLineColor: '#7ACBEE',
          fillColor: '#927ED1',
          spotColor: false,
          minSpotColor: false,
          maxSpotColor: false,
          width: '100%',
          height: '150px'
        }
      };
      $scope.largeChart2 = {
        data: [3, 1, 2, 3, 5, 3, 4, 2],
        options: {
          type: 'bar',
          barColor: '#31C0BE',
          barWidth: 10,
          width: '100%',
          height: '150px'
        }
      };
      return $scope.largeChart3 = {
        data: [3, 1, 2, 3, 5],
        options: {
          type: 'pie',
          sliceColors: ['#31C0BE', '#60CD9B', '#E87352', '#8170CA', '#EEC95A', '#60CD9B'],
          width: '150px',
          height: '150px'
        }
      };
    }
  ]);

}).call(this);

