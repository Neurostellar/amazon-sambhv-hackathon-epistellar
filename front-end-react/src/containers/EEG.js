import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class EEG extends Component {
  renderChart = () => {
    // Create chart instance
    this.chart = am4core.create("chartdiv", am4charts.XYChart);
    let chart = this.chart;
    chart.paddingRight = 20;

    let inputData = this.props.data;
    // console.log(inputData)
    // inputData = new Int8Array(inputData);
    // console.log(inputData);
    let data = []
    for (var i = 0; i < inputData.length; i++) {
        var datum = inputData[i];
        data.push({'time':i,'mV':datum});
    }
    // console.log(data);
    chart.data = data;
    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "time";
    categoryAxis.renderer.minGridDistance = 50;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.startLocation = 0.5;
    categoryAxis.endLocation = 0.5;

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.baseValue = -30;

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "mV";
    series.dataFields.categoryX = "time";
    series.strokeWidth = 2;
    series.tensionX = 0.77;

    // bullet is added because we add tooltip to a bullet for it to change color
    let bullet = series.bullets.push(new am4charts.Bullet());
    bullet.tooltipText = "{valueY}";

    bullet.adapter.add("fill", function(fill, target){
        if(target.dataItem.valueY < 0){
            return am4core.color("#FF0000");
        }
        return fill;
})
let range = valueAxis.createSeriesRange(series);
range.value = 0;
range.endValue = -1000;
range.contents.stroke = am4core.color("#FF0000");
range.contents.fill = range.contents.stroke;

// Add scrollbar
let scrollbarX = new am4charts.XYChartScrollbar();
scrollbarX.series.push(series);
chart.scrollbarX = scrollbarX;

chart.cursor = new am4charts.XYCursor();
  }

  componentDidMount() {
    let chart = null;
    this.renderChart()
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  componentDidUpdate(){
    this.renderChart()
  }

  render() {
    return (
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    );
  }
}

export default EEG;
