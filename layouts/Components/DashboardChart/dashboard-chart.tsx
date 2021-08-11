

import React, {useEffect} from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import homeStyle from '../../../styles/home.module.scss';

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dataviz);

// Hide Amchart logo 
am4core.addLicense("ch-custom-attribution");

export default function DashboardChart(){
    useEffect(function() {
        var chart = am4core.create(homeStyle.dashboardchart, am4charts.XYChart);
        // Add data
        chart.data = [{
          "date": new Date(0, 1, 0),
          "total": 450,
          "capital": 362,
        }, {
          "date": new Date(0, 2, 0),
          "total": 269,
          "capital": 450,
        }, {
          "date": new Date(0, 3, 0),
          "total": 700,
          "capital": 358,
        }, {
          "date": new Date(0, 4, 0),
          "total": 490,
          "capital": 367,
        }, {
          "date": new Date(0, 5, 0),
          "total": 500,
          "capital": 485,
        }, {
          "date": new Date(0, 6, 0),
          "total": 550,
          "capital": 354,
        }, {
          "date": new Date(0, 7, 0),
          "total": 420,
          "capital": 350,
        },{
            "date": new Date(0, 8, 0),
            "total": 550,
            "capital": 354,
          }, {
            "date": new Date(0, 9, 0),
            "total": 600,
            "capital": 550,
          },{
            "date": new Date(0, 10, 0),
            "total": 350,
            "capital": 454,
          }, {
            "date": new Date(0, 11, 0),
            "total": 490,
            "capital": 310,
          },
          {
            "date": new Date(0, 12, 0),
            "total": 450,
            "capital": 320,
          },
    ];

        // Create axes
        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        // Create series
        function createSeries(field:string, name:string) {
          var series = chart.series.push(new am4charts.LineSeries());
          series.dataFields.valueY = field;
          series.dataFields.dateX = "date";
          series.name = name;
          series.tooltipText = "{dateX}: [b]{valueY}[/]";
          series.strokeWidth = 2;
          // series.color
          if(field == "total") {
            series.stroke = am4core.color("#7433FF");
          }else {
            series.stroke = am4core.color("#4BDE97")
          }
        

          series.tooltipText = "{name}: [bold]{valueY}[/]";
          series.tensionX = 0.8;
          series.showOnInit = true;
        
          var interfaceColors = new am4core.InterfaceColorSet();
        
          valueAxis.renderer.line.strokeOpacity = 0.01;
          valueAxis.renderer.line.strokeWidth = 2;
          valueAxis.renderer.line.stroke = series.stroke;
          valueAxis.renderer.labels.template.fill = am4core.color("#B9B9B9");
          dateAxis.renderer.labels.template.fill = am4core.color("#B9B9B9");

          
          return series;
        }

        var series1 = createSeries("total", "Series #1");
        var series2 = createSeries("capital", "Series #2");

        // chart.legend = new am4charts.Legend();
        chart.cursor = new am4charts.XYCursor();
        return () => {
            chart.dispose(); 
        }
    });

    return (
        <div id={`${homeStyle.dashboardchart}`}>

        </div>
    );
}