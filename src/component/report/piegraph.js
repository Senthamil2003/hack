import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Mark", "Mark per subject"],
  ["English", 78],
  ["Physics", 89],
  ["Chemistry", 90],
  ["Social Science", 60],
  ["Maths", 92],
];

export const options = {
  title: "My Daily Activities",
  is3D: true,
};

export default function Pie() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
