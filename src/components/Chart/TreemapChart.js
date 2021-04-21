import React, { Component } from "react";
import ApexChart from "react-apexcharts";

class TreemapChart extends Component {
  constructor(props) {
    super(props);

    this.options = {
      legend: {
        show: true,
      },
      chart: {
        height: 400,
        type: "treemap",
      },
    };
    this.series = [
      {
        data: this.props.data,
      },
    ];
  }

  render() {
    return (
      <div style={{ color: "#000" }}>
        <ApexChart
          options={this.options}
          series={this.series}
          type="treemap"
          height={400}
        />
      </div>
    );
  }
}

export default TreemapChart;
