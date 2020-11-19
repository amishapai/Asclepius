
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    //first pie chart
    var data = google.visualization.arrayToDataTable([
      ['Age Group', 'Fatality'],
      ['0-15',  11],
      ['16-25',  2],
      ['26-40',  2],
      ['41-65', 2],
      ['>65',    7]
    ]);

    var options = {
      title: 'Age wise Fatality rate'
    };
    //alert("here in first done ");

    var chart = new google.visualization.PieChart(document.getElementById('Agepiechart'));

    chart.draw(data, options);
   
    //Second pie chart to be displayed
    var data1 = google.visualization.arrayToDataTable([
      ['Impacted', 'Not impacted'],
      ['Covid', 20],
      ['No Covid', 80]
    ]);
  
    var options1 = {
      title: 'Impacted in this region '
    };
  
    var chart = new google.visualization.PieChart(document.getElementById('RFpiechart'));
  
    chart.draw(data1, options1);
    //alert("here in sec");
    
  
    var ldata = google.visualization.arrayToDataTable([
          ['Day', 'Infected', 'Reported', 'Population'],
          ['0-20',  1000,      400,            2000],
          ['21-40',  1170,      460,           2000],
          ['41-60',  660,       1120,          2000],
          ['>60',  1030,      540,             2000]
        ]);

        var loptions = {
          title: 'Covid Spread',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
       
        var lchart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        lchart.draw(ldata, loptions);
  }
   

  