import React from "react";
import { VictoryChart, VictoryLine, VictoryAxis } from "victory";

const LineGraph = ({ data,data1 }) => {
  return (
    <VictoryChart width={500} height={300}>
      <VictoryAxis
        // You can customize the axis properties here
      />
      <VictoryAxis
        dependentAxis
        // You can customize the dependent axis properties here
      />
      <VictoryLine
        data={data}
        // You can customize the line properties here
      />
      <VictoryLine
        data1={data1}
        // You can customize the line properties here
      />
    </VictoryChart>
  );
};

export default LineGraph;
