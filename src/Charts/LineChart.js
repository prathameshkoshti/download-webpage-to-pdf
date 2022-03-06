import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function LineChart() {
  const options = {
    title: {
      text: "My chart",
    },
    series: [
      {
        data: [1, 2, 3],
      },
    ],
  };
  return (
    <div className="w-100">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
