import React, {useRef, useEffect} from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dataviz);

// Hide Amchart logo 
am4core.addLicense("ch-custom-attribution");


export default function DominancePieChart(){
  useEffect(() => {
    // Create chart instance
    // var chart = am4core.create("chartdiv", am4charts.PieChart);
    var chart = am4core.create("chartdiv", am4charts.PieChart);

      // Add data
      chart.data = [ {
        "scholar_name": "scholar A",
        "value": 501.9, 
        "color": am4core.color("#9F7DE1")
      }, {
        "scholar_name": "scholar B",
        "value": 301.9,
        "color": am4core.color("#ACB9FF")
      }, {
        "scholar_name": "scholar C",
        "value": 201.1, 
        "color": am4core.color("#5f4b87")
      }, {
      }, {
        "scholar_name": "scholar D",
        "value": 201.1, 
        "color": am4core.color("#000")
      }];
      
      // Add and configure Series
      var pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "value";
      pieSeries.dataFields.category = "scholar_name";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 0;
      
      
      pieSeries.ticks.template.disabled = true;
      pieSeries.labels.template.disabled = true;
      
      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;
      pieSeries.slices.template.propertyFields.fill = "color";


    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div 
      id="chartdiv" 
      className="chart"
      style={{ width: "100%", height: "280px" }}>
    </div>
  )
}
