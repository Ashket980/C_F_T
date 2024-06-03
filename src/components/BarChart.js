// BarChart.js

import React from 'react';
import Plot from 'react-plotly.js';

const BarChart = ({ data }) => {
  return (
    <Plot
      data={data}
      layout={{
        width: 1000,
        height: 500,
        title: 'your carbon footprint distribution',
      }}
    />
  );
};

export default BarChart;