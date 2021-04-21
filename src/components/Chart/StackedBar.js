import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import Charts from "fusioncharts/fusioncharts.charts";
import PowerCharts from "fusioncharts/fusioncharts.powercharts";
import ReactFusionCharts from "react-fusioncharts";

ReactFusionCharts.fcRoot(FusionCharts, Charts, FusionTheme);

class StackedBarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: {
        chart: {
          placevaluesinside: "0",
          showvalues: "0",
          theme: "fusion",
        },
        categories: this.props.categories,
        dataset: this.props.dataset,
      },
    };
  }

  render() {
    return (
      <div>
        <ReactFusionCharts
          type="stackedbar2d"
          height={450}
          width="100%"
          dataFormat="JSON"
          dataSource={this.state.dataSource}
        />
      </div>
    );
  }
}

export default StackedBarChart;
