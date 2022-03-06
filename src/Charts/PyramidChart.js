import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import funnel from "highcharts/modules/funnel.js";
funnel(Highcharts);

export default function PyramidChart() {
  const options = {
    chart: {
      type: "pyramid",
    },
    title: {
      text: "Sales pyramid",
      x: -50,
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b> ({point.y:,.0f})",
          softConnector: true,
        },
        center: ["40%", "50%"],
        width: "80%",
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "Unique users",
        data: [
          ["Website visits", 15654],
          ["Downloads", 4064],
          ["Requested price list", 1987],
          ["Invoice sent", 976],
          ["Finalized", 846],
        ],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            plotOptions: {
              series: {
                dataLabels: {
                  inside: true,
                },
                center: ["50%", "50%"],
                width: "100%",
              },
            },
          },
        },
      ],
    },
  };
  return (
    <div className="w-50">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
