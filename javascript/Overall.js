google.charts.load('current', {'packages':['corechart', 'scatter']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {


  var chartDiv = document.getElementById('chart_div');

  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Zone');
  data.addColumn('number', 'Risk Factor');
  data.addColumn('number', 'Fatality');

  data.addRows([
    [0, 0, 67],  [1, 1, 88],   [2, 2, 77],
    [3, 3, 93],  [4, 4, 85],   [5, 5, 91],
    [6, 6, 71],  [7, 7, 78],   [8, 8, 93],
    [9, 9, 80],  [10, 10, 82], [11, 0, 75],
    [12, 5, 80], [13, 3, 90],  [14, 1, 72],
    [15, 5, 75], [16, 6, 68],  [17, 7, 98],
    [18, 3, 82], [19, 9, 94],  [20, 2, 79],
    [21, 2, 95], [22, 2, 86],  [23, 3, 67],
    [24, 4, 60], [25, 2, 80],  [26, 6, 92],
    [27, 2, 81], [28, 8, 79],  [29, 9, 83]
  ]);

  var materialOptions = {
    chart: {
      title: 'Fatality within zones',
      subtitle: 'based on Risk Factor'
    },
    width: 800,
    height: 500,
    series: {
      0: {axis: 'Risk Factor'},
      1: {axis: 'Fatality'}
    },
    axes: {
      y: {
        'Risk Facto': {label: 'Risk Facto'},
        'Fatality': {label: 'Fatality'}
      }
    }
  };

  var classicOptions = {
    width: 800,
    series: {
      0: {targetAxisIndex: 0},
      1: {targetAxisIndex: 1}
    },
    title: 'Fatality within zones and Risk Factor',

    vAxes: {
      // Adds titles to each axis.
      0: {title: 'Risk Factor'},
      1: {title: 'Fatality'}
    }
  };

  function drawMaterialChart() {
    var classicChart = new google.visualization.ScatterChart(chartDiv);
    classicChart.draw(data, classicOptions);
   // var materialChart = new google.charts.Scatter(chartDiv);
    //materialChart.draw(data, google.charts.Scatter.convertOptions(materialOptions));
   
  }



  drawMaterialChart();
};
