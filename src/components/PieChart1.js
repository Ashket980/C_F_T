import React from 'react';
import { VictoryPie } from 'victory';
import "./PieChartStyles.css"

const PieChart1 = () => {
  const data = [
    { x: "One", y: 35 },
    { x: "Two", y: 40 },
    { x: "Three", y: 55 },
    { x: "Four", y: 20 },
    { x: "Five", y: 10 }
  ];

  return (
    <div id="pie">
      <div>
      <h2>Average Data Distribution</h2>
    <VictoryPie
      data={data}
      colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
    />
    </div>
    </div>
  );
};

export default PieChart1;
