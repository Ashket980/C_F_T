import React from 'react';
import { VictoryBar, VictoryChart, VictoryGroup, VictoryAxis, VictoryLegend } from 'victory';
import './Bargraphstyles.css';

const data = [
  { flavor: 'Electricity', blue: 3, red: 9 },
  { flavor: 'waste', blue: 7, red: 3 },
  { flavor: 'text1', blue: 4, red: 5 },
  { flavor: 'text2', blue: 4, red: 5 },
  { flavor: 'text3', blue: 4, red: 5 },
];

const GroupedBarChart = () => (
  <div className="chart-container">
    <div className="chart-description">
      <h3>Analysis</h3>
      <p>description text here...</p>
    </div>
    <div className="chart">
      <VictoryChart domainPadding={25}>
        <VictoryAxis tickValues={[1, 2, 3, 4, 5]} tickFormat={['Electricity', 'text', 'text', 'text', 'text']} />
        <VictoryAxis dependentAxis />
        <VictoryGroup offset={20}>
          <VictoryBar data={data} x="flavor" y="blue" style={{ data: { fill: 'blue' } }} />
          <VictoryBar data={data} x="flavor" y="red" style={{ data: { fill: 'red' } }} />
        </VictoryGroup>
        <VictoryLegend
          x={250}
          y={20}
          orientation="horizontal"
          gutter={20}
          data={[
            { name: 'Present', symbol: { fill: 'blue' } },
            { name: 'Standard', symbol: { fill: 'red' } },
          ]}
        />
      </VictoryChart>
    </div>
  </div>
);

export default GroupedBarChart;
