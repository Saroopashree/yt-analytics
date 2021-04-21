import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import ReactFusionCharts from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import PowerCharts from "fusioncharts/fusioncharts.powercharts";
import TreeMap from "fusioncharts/fusioncharts.treemap";

ReactFusionCharts.fcRoot(FusionCharts, PowerCharts, TreeMap, FusionTheme);

class SunburstChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: {
        chart: {
          showplotborder: "1",
          theme: "fusion",
        },
        data: this.props.data ? this.props.data : [],
      },
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data != this.props.data) {
      this.setState({
        dataSource: { ...this.state.dataSource, data: this.props.data },
      });
    }
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReactFusionCharts
          type="sunburst"
          height={400}
          width={400}
          dataFormat="JSON"
          dataSource={this.state.dataSource}
        />
      </div>
    );
  }
}

export default SunburstChart;
