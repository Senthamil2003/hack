import React from "react";
import { Chart } from "react-google-charts";
import "./report.css"

export const data = [
  ["Mark", "Mark per Topics"],
  ["Verbals", 78],
  ["Articles", 89],
  ["Vocabulary", 90],
  ["Report speech", 60],
  ["Conjuction", 92],
];

export const options = {
  title: "English Topic Wise analaysis",
  is3D: true,
};

export default function Pie() {
  return (
    <div className='reportcont'>
      <div  className='gph1'>
      <p className='rgp1'>Test Analysis</p>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>

    </div>

  );
}
