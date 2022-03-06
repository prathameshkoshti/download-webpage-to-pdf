import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";
import VariableRadiusPieChart from "./Charts/VariableRadiusPieChart";
import SemiCircleDonutChart from "./Charts/SemiCircleDonutChart";
import BubbleChart from "./Charts/BubbleChart";
import PyramidChart from "./Charts/PyramidChart";
import "./App.css";

function App() {
  const chart = useRef(null);

  const downloadChartInPDF = () => {
    // change below number if content is getting cropped out of the pdf
    const pdfHeight = 37;
    let html = document.documentElement;
    let height = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    let heightCM = height / 35.35;
    const opt = {
      margin: 1,
      filename: "file.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        width: window.innerWidth,
      },
      jsPDF: {
        unit: "cm",
        format: [heightCM, pdfHeight],
        orientation: "portrait",
      },
    };
    const element = document.getElementById(chart.current.id);
    html2pdf(element, opt);
  };

  return (
    <div className="App">
      <div className="button_container">
        <button onClick={downloadChartInPDF}>Download</button>
      </div>
      <div id="chart_container" ref={chart}>
        <div className="row">
          <LineChart />
        </div>
        <div className="row">
          <PieChart />
          <VariableRadiusPieChart />
          <SemiCircleDonutChart />
        </div>
        <div className="row">
          <BubbleChart />
          <PyramidChart />
        </div>
        {/* Uncomment below lines to see how pdf looks when there are more charts */}
        {/* <div className="row">
          <LineChart />
        </div>
        <div className="row">
          <PieChart />
          <VariableRadiusPieChart />
          <SemiCircleDonutChart />
        </div>
        <div className="row">
          <BubbleChart />
          <PyramidChart />
        </div> */}
      </div>
    </div>
  );
}

export default App;
