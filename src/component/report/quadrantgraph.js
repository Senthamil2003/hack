import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Hours Studied", "Final"],
  [1,3],
  [2,1],
  [-1,4],
  [2,-3],
  [-3,-2],
  [2,-3]
];

export const options = {
  // Material design options
  chart: {
    title: "Students' Final Grades",
    subtitle: "based on hours studied",
  },
  hAxis: { title: "Hours Studied" },
  vAxis: { title: "Grade" },
};

export default function Graph() {
  return (
    <Chart
      chartType="Scatter"
      width="101%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
