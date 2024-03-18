
import React, { useEffect, useState } from "react";
import { VictoryPie } from "victory";
import "./PieChartStyles.css"

const PieChart = ({ total, activeTab , inputValues,inputValues1,inputValues2,inputValues3,inputValues4,inputValues5,inputValues6,inputValues7,inputValues8,inputValues9,inputValues10,inputValues11,inputValues12}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData =
      activeTab === 0
        ? [
            { x: "Electricity", y: inputValues * total },
            { x: "Waste Production", y: inputValues1 * total },
            { x: "Water Consumption", y: inputValues2*total },
            { x: "LPG", y: inputValues3 * total },
            { x: "CAR", y: inputValues4 * total },
            { x: "BUS", y: inputValues5 * total },
            { x: "TRAIN", y: inputValues6 * total },
            { x: "Watching Tv", y: inputValues7 * total },
            { x: "Plastic Consumption", y: inputValues8 * total },
            { x: "Smartphone Usage ", y: inputValues9 * total },
            { x: "New Cars", y: inputValues10 * total },
            { x: "Computer and Laptop", y: inputValues11 * total },
            { x: "Laptop Usage", y: inputValues12 * total },
          ].filter(dataPoint => dataPoint.y !== 0)
        : [
            { x: "Agriculture", y: inputValues * total },
            { x: "Water", y: inputValues1* total },
            { x: "Deforestation", y: inputValues2 * total },
            { x: "New coal mine", y: inputValues3 * total },
            { x: "Wind Turbine", y: inputValues4 * total },
            { x: "Solar panel", y: inputValues5 * total },
            { x: "Steel", y: inputValues6 * total },
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
              "#E67E22",
              "#F1C40F ",
              "#0E6251",
              "#154360",
              "#512E5F",
              "#641E16"
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
