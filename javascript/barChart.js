
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
  var bdata = google.visualization.arrayToDataTable([
    ['Age Group', 'Rf Low', 'Rf Meduim', 'Rf High'],
    ['0-15', 300, 200,0],
    ['16-25', 350, 300,110],
    ['26-40', 500, 750,780],
    ['41-65', 30, 800,910],
    ['>65', 300, 800,1700]
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
