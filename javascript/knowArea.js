
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    //first pie chart
    var data = google.visualization.arrayToDataTable([
      ['Age Group', 'Fatality'],
      ['0-15',  2],
      ['16-25', 6],
      ['26-40', 7],
      ['41-65',8],
      ['>65',    12]
    ]);

    var options = {
      title: 'Fatality rate/Age groups'
    };
    //alert("here in first done ");

    var chart = new google.visualization.PieChart(document.getElementById('Agepiechart'));

    chart.draw(data, options);
   
    //Second pie chart to be displayed
    var data1 = google.visualization.arrayToDataTable([
      ['Impacted', 'Not impacted'],
      ['Covid', 35],
      ['No Covid', 65]
    ]);
  
    var options1 = {
      title: 'Impacted in this region '
    };
  
    var chart = new google.visualization.PieChart(document.getElementById('RFpiechart'));
  
    chart.draw(data1, options1);
    //alert("here in sec");
    
  
    var ldata = google.visualization.arrayToDataTable([
          ['Day', 'Infected', 'Reported' ],
          ['0-50',  1000,       958],
          ['51-100',  2000,     1998],
          ['101-200',  3500,    3000],
          ['>200',  4240,      3500]
        ]);

        var loptions = {
          title: 'Covid Spread',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
       
        var lchart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        lchart.draw(ldata, loptions);
  }
   

  