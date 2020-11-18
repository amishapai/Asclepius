
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
  var bdata = google.visualization.arrayToDataTable([
    ['Age Group', 'Rf Low', 'Rf Meduim', 'Rf High'],
    ['0-15', 30, 80,17],
    ['16-25', 30, 23,11],
    ['26-40', 10, 20,27],
    ['41-65', 3, 80,91],
    ['>65', 30, 80,170]
  ]);

  var boptions = {
    chart: {
      title: 'Risk Factor Distribution',
      subtitle: 'Risk Factor as Low/Medium/High',
    }
  };

  var chart = new google.charts.Bar(document.getElementById('chart_div'));

  chart.draw(bdata, google.charts.Bar.convertOptions(boptions));
}
