import React, { Component } from "react";
import ApexChart from "react-apexcharts";

const data = [
  {
    id: "men",
    label: "men",
    value: 32.53792484936965,
    color: "#468df3",
  },
  {
    id: "women",
    label: "women",
    value: 3.079252346235851,
    color: "#ba72ff",
  },
  {
    id: "children",
    label: "children",
    value: 14.163650187828225,
    color: "#a1cfff",
  },
];

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
