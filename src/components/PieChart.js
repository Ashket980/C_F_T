
import React, { useEffect, useState } from "react";
import { VictoryPie } from "victory";
import "./PieChartStyles.css"

const PieChart = ({ total, activeTab , inputValues,inputValues1,inputValues2,inputValues3,inputValues4}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData =
      activeTab === 0
        ? [
            { x: "Electricity", y: inputValues * total },
            { x: "Waste Production", y: inputValues1 * total },
            { x: "Water Consumption", y: inputValues2*total },
            { x: "LPG", y: inputValues3 * total },
            { x: "Transportation", y: inputValues4 * total },
          ].filter(dataPoint => dataPoint.y !== 0)
        : [
            { x: "Agriculture Waste", y: total },
            { x: "Water Consumption", y: total },
          ];

    setData(newData);
  }, [total, activeTab]);

  return (
    <div id="pie">
      {activeTab === 0 && (
        <div>
          <h2>Individual Data Distribution</h2>
          <VictoryPie
            data={data}
            colorScale={[
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#8A2BE2",
              "#00CED1",
            ]}
            labelRadius={({ innerRadius }) => innerRadius + 40}
            padAngle={3}
            innerRadius={50}
          />
        </div>
      )}
      {activeTab === 1 && (
        <div>
          <h2>Industry Data Distribution</h2>
          <VictoryPie
            data={data}
            colorScale={["#FF6384", "#36A2EB"]}
            labelRadius={({ innerRadius }) => innerRadius + 40}
            padAngle={3}
            innerRadius={50}
          />
        </div>
      )}
    </div>
  );
};

export default PieChart;
