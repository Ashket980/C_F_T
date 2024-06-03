
// import React, { useEffect, useState } from "react";
// import { VictoryPie } from "victory";
// import "./PieChartStyles.css"

// const PieChart = ({ inputValues, inputValues1, inputValues2, inputValues3, inputValues4, inputValues5, inputValues6, inputValues7, inputValues8, inputValues9, inputValues10, inputValues11, inputValues12 }) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const newData = [
//       { x: "Electricity", y: inputValues },
//       { x: "Waste Production", y: inputValues1 },
//       { x: "Water Consumption", y: inputValues2 },
//       { x: "LPG", y: inputValues3 },
//       { x: "CAR", y: inputValues4 },
//       { x: "BUS", y: inputValues5 },
//       { x: "TRAIN", y: inputValues6 },
//       { x: "Watching Tv", y: inputValues7 },
//       { x: "Plastic Consumption", y: inputValues8 },
//       { x: "Smartphone Usage ", y: inputValues9 },
//       { x: "New Cars", y: inputValues10 },
//       { x: "Computer and Laptop", y: inputValues11 },
//       { x: "Laptop Usag", y: inputValues12 }
//     ].filter(dataPoint => dataPoint.y !== 0);
//     setData(newData);
//   }, [inputValues, inputValues1, inputValues2, inputValues3, inputValues4, inputValues5, inputValues6, inputValues7, inputValues8, inputValues9, inputValues10, inputValues11, inputValues12]);


//   return (
//     <div id="pie">
//       <div>
//         <h2>Individual Data Distribution</h2>
//         <VictoryPie
//           data={data}
//           colorScale={[
//             "#FF6384",
//             "#36A2EB",
//             "#FFCE56",
//             "#8A2BE2",
//             "#00CED1",
//             "#E67E22",
//             "#F1C40F ",
//             "#0E6251",
//             "#154360",
//             "#512E5F",
//             "#641E16"
//           ]}
//           labelRadius={({ innerRadius }) => innerRadius + 40}
//           padAngle={3}
//           innerRadius={50}
//         />
//       </div>


//     </div>
//   );
// };

// export default PieChart;


