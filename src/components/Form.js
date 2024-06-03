import React from 'react';
import { useState, useEffect } from 'react';
import "./Formstyles.css"
import styled from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PieChart from './PieChart';
import PieChart1 from './PieChart1';
import GroupedBarChart from './Bargraph';
import BarChart from './BarChart';
import { Link } from 'react-router-dom';




const StyledX=styled.div`
  font-size:24px;
  font-weight:bold;
  color:#333;
  margin-top:10px;
  border:3px solid green;
  border-radius:15px;
  display: inline-block;
  padding:10px
`;

// const Calculator = () => {
//   const [inputValues, setInputValues] = useState([]);
//   const [total, setTotal] = useState("");
//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//     setInputValues(["", "", "", "", ""]); // Reset input values when switching tabs
//     setTotal("");
//   };








  
  

//   const handleInputChange = (event, index) => {
//     const newInputValues = [...inputValues];
//     newInputValues[index] = event.target.value;
//     setInputValues(newInputValues);
//   };

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();

//   //   const sum = inputValues.reduce((acc, currentValue, index) => {
//   //     const number = parseFloat(currentValue);
//   //     if (!isNaN(number)) {
//   //       switch (activeTab) {
//   //         case 0:
//   //           switch (index) {
//   //             case 0:
//   //               return acc + number * 0.85;
//   //             case 1:
//   //               return acc + number * 3.5;
//   //             case 2:
//   //               return acc + number * 0;
//   //             case 3:
//   //               return acc + number * 2.983;
//   //             case 4:
//   //               return acc + number * 0.381;//CAR
//   //             case 5:
//   //               return acc + number * 0.0376;//BUS
//   //             case 6:
//   //               return acc + number * 0.167;//TRAIN
//   //             case 7:
//   //               return acc + number * 0.2555;//TV
//   //             case 8:
//   //               return acc + number *5.525; //PLASTIC
//   //             case 9:
//   //               return acc + number * 0.191; //MOBILE
//   //             case 10:
//   //               return acc + number * 12000; //NEW CAR
//   //             case 11:
//   //               return acc + number * 329 ; //LAPTOP
//   //             case 12:
//   //               return acc + number * 0.043; //LAPTOP usage
//   //             default:
//   //               return acc;
//   //           }
//   //         case 1:
//   //           switch (index) {
//   //             case 0:
//   //               return acc + number;
//   //             case 1:
//   //                 return acc + number;
//   //             case 2:
//   //               return acc + number *2000;
//   //             case 3:
//   //               return acc + number *8400000;
//   //             case 4:
//   //               return acc + number *30;
//   //             case 5:
//   //               return acc + number *12500;
//   //             case 6:
//   //               return acc + number *0.4;
//   //             default:
//   //               return acc;
//   //           }
//   //           case 2:
//   //             switch(index){
//   //               case 0:
//   //                 return acc + number *2.983;//LPG
//   //               case 1:
//   //                 return acc + number *0.85;//Electricity
//   //               case 2:
//   //                 return acc + number *0.381;//Car
//   //               case 3:
//   //                 return acc + number * 0.0376;//BUS
//   //               case 4:
//   //                 return acc + number * 0.167;//Train

//   //               default:
//   //                 return acc;
//   //             }
//   //             case 3:
//   //             switch(index){
//   //               case 0:
//   //                 return acc + number * 0.2555;//TV
//   //               case 1:
//   //                 return acc + number * 0.191;//Mobile
//   //               case 2:
//   //                 return acc + number * 329 ; //LAPTOP
//   //               case 3:
//   //                 return acc + number * 0.043;//Laptop usage
//   //               default:
//   //                 return acc;  
//   //             }
//   //             case 4:
//   //             switch(index){
//   //               case 0:
//   //                 return acc + number * 0.178;//coffee
//   //               case 1:
//   //                 return acc + number * 0.002;//bread
//   //               case 2:
//   //                 return acc+ number * 1.362;//Milk
//   //               case 3 :
//   //                 return acc+number*4.7;//Rice
//   //               case 4:
//   //                 return acc + number*0.016;//Non veg
//   //               default:
//   //                 return acc;
//   //             }
//   //             case 5:
//   //             switch(index){
//   //               case 0:
//   //                 return acc + number * 12000; //NEW CAR
//   //               case 1:
//   //                 return acc + number * 52330;//New Building
//   //               default:
//   //                 return acc;
                  
//   //             }
//   //             case 6:
//   //             switch(index){
//   //               case 0:
//   //                 return acc + number * 5.525;//Plastic 
//   //               case 1:
//   //                 return acc + number * 0.08; //Boiling water
//   //               default:
//   //                 return acc;
                  
//   //             }
//   //             case 8:
//   //               switch(index){
//   //                 case 0:
//   //                   return acc + number * 0.7972;//agro
//   //                 case 1:
//   //                   return acc + number * 0.52;//mining
//   //                 case 2:
//   //                   return acc + number * 1.176;//Power
//   //                 case 3 :
//   //                   return acc + number * 0.139;//cement
//   //                 case 4 :
//   //                   return acc + number * 0.508;//iron
//   //                 case 5 :
//   //                   return acc + number * 0.25;//chemical
//   //                 case 6 :
//   //                   return acc + number * 0.85;//non metallic 
//   //               }
//   //       }
//   //     }
//   //     return acc;
//   //   }, 0);

//   //   setTotal(sum);










//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const sum = inputValues.reduce((acc, currentValue, index) => {
//       const number = parseFloat(currentValue);
//       if (!isNaN(number)) {
      
//             switch (index) {
//               case 0:
//                 return acc + number*3.5//waste;
//               case 1:
//                 return acc + number;
//               case 2:
//                 return acc + number * 2000;
//               case 3:
//                 return acc + number * 8400000;
//               case 4:
//                 return acc + number * 30;
//               case 5:
//                 return acc + number * 12500;
//               case 6:
//                 return acc + number * 0.4;
//               case 7:
//                 return acc + number * 2.983;//LPG
//               case 8:
//                 return acc + number * 0.85;//Electricity
//               case 9:
//                 return acc + number * 0.381;//Car
//               case 10:
//                 return acc + number * 0.0376;//BUS
//               case 11:
//                 return acc + number * 0.167;//Train
//               case 12:
//                 return acc + number * 0.2555;//TV
//               case 13:
//                 return acc + number * 0.191;//Mobile
//               case 14:
//                 return acc + number * 329; //LAPTOP
//               case 15:
//                 return acc + number * 0.043;//Laptop usage
//               case 16:
//                 return acc + number * 0.178;//coffee
//               case 17:
//                 return acc + number * 0.002;//bread
//               case 18:
//                 return acc + number * 1.362;//Milk
//               case 19:
//                 return acc + number * 4.7;//Rice
//               case 20:
//                 return acc + number * 0.016;//Non veg
//               case 21:
//                 return acc + number * 12000; //NEW CAR
//               case 22:
//                 return acc + number * 52330;//New Building
//               case 23:
//                 return acc + number * 5.525;//Plastic 
//               case 24:
//                 return acc + number * 0.08; //Boiling water
//               case 25:
//                 return acc + number * 0.7972;//agro
//               case 26:
//                 return acc + number * 0.52;//mining
//               case 27:
//                 return acc + number * 1.176;//Power
//               case 28:
//                 return acc + number * 0.139;//cement
//               case 29:
//                 return acc + number * 0.508;//iron
//               case 30:
//                 return acc + number * 0.25;//chemical
//               case 31:
//                 return acc + number * 0.85;//non metallic 
//               default:
//                 return acc;
//             }
          
//       }
//       return acc;
//     }, 0);

//     setTotal(sum);

//   };


























// //   return (
// //     <>
// //     <div className="formbox">
// //       <h2 id='h2'>Fill in The required Data</h2>
// //       <Tabs
// //         value={activeTab}
// //         onChange={handleTabChange}
// //         aria-label="tabs example"
// //         variant="scrollable" // Allow tabs to be scrollable
// //         scrollButtons="auto"
// //       >
// //         <Tab label="Individual" id="individual-tab" />
// //         <Tab label="Industry" id="industry-tab" />
// //         <Tab label="Primary Sources" id="Primary"/>
// //         <Tab label="Consumer Electronics" id="Comsumer"/>
// //         <Tab label="Food Habits" id="Food"/>
// //         <Tab label="Luxuiries" id="Luxuiries"/>
// //         <Tab label="Others" id="Others"/>
// //         <Tab label="General" id="General"/>
// //         <Tab label="Type" id="Type"/>
// //       </Tabs>
// //       <form className="form" onSubmit={handleSubmit}>
// //         {activeTab === 0 && (
// //           <>
            
// //           </>
// //         )}
// //         {activeTab === 1 && (
// //           <>
// //             <div>
// //               <label for ="id">
// //                 Agriculture Waste:
// //                 <input
// //                   id="input"
// //                   name="Agriculture_Waste"
// //                   type="number"
// //                   value={inputValues[0]}
// //                   onChange={(event) => handleInputChange(event, 0)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 Water Consumption:
// //                 <input
// //                   id="input"
// //                   name="Water_consumption"
// //                   type="number"
// //                   value={inputValues[1]}
// //                   onChange={(event) => handleInputChange(event, 1)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 Deforestation {'('}in hectare{')'}:
// //                 <input
// //                   id="input"
// //                   name="Deforestation"
// //                   type="number"
// //                   value={inputValues[2]}
// //                   onChange={(event) => handleInputChange(event, 2)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 A New Coal Mine {'('}in nos{')'}:
// //                 <input
// //                   id="input"
// //                   name="A_new_coal_mine"
// //                   type="number"
// //                   value={inputValues[3]}
// //                   onChange={(event) => handleInputChange(event, 3)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 Wind Turbine-Iinstallation {'('}in nos{')'}:
// //                 <input
// //                   id="input"
// //                   name="Wind_Turbin"
// //                   type="number"
// //                   value={inputValues[4]}
// //                   onChange={(event) => handleInputChange(event, 4)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 Solar Panels-installation {'('}in MW{')'}:
// //                 <input
// //                   id="input"
// //                   name="Solar_Panel"
// //                   type="number"
// //                   value={inputValues[5]}
// //                   onChange={(event) => handleInputChange(event, 5)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 Steel consumption/production {'('}in tons{')'}:
// //                 <input
// //                   id="input"
// //                   name="Steel_Consumption"
// //                   type="number"
// //                   value={inputValues[6]}
// //                   onChange={(event) => handleInputChange(event, 6)}
// //                 />
// //               </label>
// //             </div>
// //             {/* Add more inputs for industry as needed */}
// //           </>
// //         )}
// //         {activeTab === 2 && (
// //           <>
// //             <div>
// //               <label>
// //                 LPG {'('}in Kg{')'}:
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[0]}
// //                   onChange={(event) => handleInputChange(event, 0)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 Electricity {'('}in Kwh{')'}:
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[1]}
// //                   onChange={(event) => handleInputChange(event, 1)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 Car {'('}in Km{')'}:
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[2]}
// //                   onChange={(event) => handleInputChange(event, 2)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 Bus {'('}in Km{')'}:
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[3]}
// //                   onChange={(event) => handleInputChange(event, 3)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 Train {'('}in Km{')'}:
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[4]}
// //                   onChange={(event) => handleInputChange(event, 4)}
// //                 />
// //               </label>
// //             </div>

// //           </>)}
// //           {activeTab === 3 && (
// //           <>
// //             <div>
// //               <label>
// //                 Watching Tv {'('}in Hrs{')'}:
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[0]}
// //                   onChange={(event) => handleInputChange(event, 0)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 Smartphones usage {'('}in hrs{')'}:
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[1]}
// //                   onChange={(event) => handleInputChange(event, 1)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 Computer and Laptop {'('}in nos{')'}:
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[2]}
// //                   onChange={(event) => handleInputChange(event, 2)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 Pc usage duration {'('}in hrs{')'}:
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[3]}
// //                   onChange={(event) => handleInputChange(event, 3)}
// //                 />
// //               </label>
// //             </div>
// //           </>)}
          
// //           {activeTab === 4 && (
// //             <>
// //             <div>
// //               <label>
// //                 Coffee/Tea {'('}in cups{')'}:
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[0]}
// //                   onChange={(event) => handleInputChange(event, 0)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 Loaf Of Bread {'('}in g{')'}:
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[1]}
// //                   onChange={(event) => handleInputChange(event, 1)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 Milk Consumption {'('}in l{')'}:
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[2]}
// //                   onChange={(event) => handleInputChange(event, 2)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 Rice  {'('}in Kg{')'}:
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[3]}
// //                   onChange={(event) => handleInputChange(event, 3)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 Non-Veg {'('}in g{')'}:
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[4]}
// //                   onChange={(event) => handleInputChange(event, 4)}
// //                 />
// //               </label>
// //             </div>
// //             </>
// //           )}
// //           {activeTab === 5 && (
// //             <>
// //             <div>
// //               <label>
// //                 New Car {'('}in nos{')'}:
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[0]}
// //                   onChange={(event) => handleInputChange(event, 0)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 New Build-house {'('}in nos{')'}:
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[1]}
// //                   onChange={(event) => handleInputChange(event, 1)}
// //                 />
// //               </label>
// //             </div>
// //             </>
// //           )}
// //           {activeTab === 6 && (
// //             <>
// //             <div>
// //               <label>
// //                 Plastic Usage {'('}in Kg{')'}:
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[0]}
// //                   onChange={(event) => handleInputChange(event, 0)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 Boiling Water {'('}in L{')'}:
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[1]}
// //                   onChange={(event) => handleInputChange(event, 1)}
// //                 />
// //               </label>
// //             </div>
// //             </>
// //           )}
// //           {activeTab === 8 && (
// //             <>
// //             <div>
// //               <label>
// //                 Agro Based :
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[0]}
// //                   onChange={(event) => handleInputChange(event, 0)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 Mining Based :
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[1]}
// //                   onChange={(event) => handleInputChange(event, 1)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 Power Industry :
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[2]}
// //                   onChange={(event) => handleInputChange(event, 2)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 Cement Industry :
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[3]}
// //                   onChange={(event) => handleInputChange(event, 3)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 Iron and Steel Industry :
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[1]}
// //                   onChange={(event) => handleInputChange(event, 4)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 Chemical Industry :
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[1]}
// //                   onChange={(event) => handleInputChange(event, 5)}
// //                 />
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 Non Metallic :
// //                 <input
// //                   id="input"
// //                   type="number"
// //                   value={inputValues[1]}
// //                   onChange={(event) => handleInputChange(event, 6)}
// //                 />
// //               </label>
// //             </div>
// //             </>
// //           )
// //         }
// //         <button type="submit" className='button'>Calculate Total</button>
// //       </form>
// //       {/* Display total */}
// //       <StyledX>Total: {total}</StyledX>
// //       <div style={{ display: 'flex' }}>
// //         {total && <PieChart total={total} activeTab={activeTab} inputValues={inputValues[0]} inputValues1={inputValues[1]} inputValues2={inputValues[2]} inputValues3={inputValues[3]} inputValues4={inputValues[4]} inputValues5={inputValues[5]} inputValues6={inputValues[6]} inputValues7={inputValues[7]} inputValues8={inputValues[8]} inputValues9={inputValues[9]} inputValues10={inputValues[10]} inputValues11={inputValues[11]} inputValues12={inputValues[12]}/>}
// //         {total && <PieChart1 />}
// //       </div>
      
// //     </div>
// //     <div>
    
// //     <GroupedBarChart total={total} activeTab={activeTab} inputValues={inputValues[0]} inputValues1={inputValues[1]} inputValues2={inputValues[2]} inputValues3={inputValues[3]} />
// //     {/* <BarGraph/> */}
// //     </div>
// //     </>
// //   );
// // };



// return (
//   <>
//   <div className="formbox">
//     <h2 id='h2'>Fill in The required Data</h2>
    
//     <form className="form" onSubmit={handleSubmit}>
// <h2>Industry</h2>
// <div className="input-grid">
//           <div className="input-container">
//             <label for ="id">
//               Agriculture Waste:
//               <input
//                 id="Agriculture_Waste"
//                 name="Agriculture_Waste"
//                 type="number"
//                 value={inputValues[0]}
//                 onChange={(event) => handleInputChange(event, 0) }
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               Water Consumption:
//               <input
//                 id="Water_consumption"
//                 name="Water_consumption"
//                 type="number"
//                 value={inputValues[1]}
//                 onChange={(event) => handleInputChange(event, 1)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               Deforestation {'('}in hectare{')'}:
//               <input
//                 id="Deforestation"
//                 name="Deforestation"
//                 type="number"
//                 value={inputValues[2]}
//                 onChange={(event) => handleInputChange(event, 2)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               A New Coal Mine {'('}in nos{')'}:
//               <input
//                 id="A_new_coal_mine"
//                 name="A_new_coal_mine"
//                 type="number"
//                 value={inputValues[3]}
//                 onChange={(event) => handleInputChange(event, 3)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               Wind Turbine-Iinstallation {'('}in nos{')'}:
//               <input
//                 id="Wind_Turbin"
//                 name="Wind_Turbin"
//                 type="number"
//                 value={inputValues[4]}
//                 onChange={(event) => handleInputChange(event, 4)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               Solar Panels-installation {'('}in MW{')'}:
//               <input
//                 id="Solar_Panel"
//                 name="Solar_Panel"
//                 type="number"
//                 value={inputValues[5]}
//                 onChange={(event) => handleInputChange(event, 5)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               Steel consumption/production {'('}in tons{')'}:
//               <input
//                 id="Steel_Consumption"
//                 name="Steel_Consumption"
//                 type="number"
//                 value={inputValues[6]}
//                 onChange={(event) => handleInputChange(event, 6)}
//               />
//             </label>
//           </div >
//           <h2>Primary Sources</h2>
//           <div className="input-container">
//             <label>
//               LPG {'('}in Kg{')'}:
//               <input
//                 id="lpg"
//                 name="lpg"
//                 type="number"
//                 value={inputValues[7]}
//                 onChange={(event) => handleInputChange(event, 7)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               Electricity {'('}in Kwh{')'}:
//               <input
//                 id="elec"
//                 name='elec'
//                 type="number"
//                 value={inputValues[8]}
//                 onChange={(event) => handleInputChange(event, 8)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               Car {'('}in Km{')'}:
//               <input
//                 id="car"
//                 name="car"
//                 type="number"
//                 value={inputValues[9]}
//                 onChange={(event) => handleInputChange(event, 9)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               Bus {'('}in Km{')'}:
//               <input
//                 id="bus"
//                 name="bus"
//                 type="number"
//                 value={inputValues[10]}
//                 onChange={(event) => handleInputChange(event, 10)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               Train {'('}in Km{')'}:
//               <input
//                 id="train"
//                 name="train"
//                 type="number"
//                 value={inputValues[11]}
//                 onChange={(event) => handleInputChange(event, 11)}
//               />
//             </label>
//           </div>
// <h2>Consumer Electronics</h2>
//           <div className="input-container">
//             <label>
//               Watching Tv {'('}in Hrs{')'}:
//               <input
//                 id="tv"
//                 name="tv"
//                 type="number"
//                 value={inputValues[12]}
//                 onChange={(event) => handleInputChange(event,12)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               Smartphones usage {'('}in hrs{')'}:
//               <input
//                 id="phone"
//                 name="phone"
//                 type="number"
//                 value={inputValues[13]}
//                 onChange={(event) => handleInputChange(event, 13)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               Computer and Laptop {'('}in nos{')'}:
//               <input
//                 id="pc"
//                 name="pc"
//                 type="number"
//                 value={inputValues[14]}
//                 onChange={(event) => handleInputChange(event, 14)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               Pc usage duration {'('}in hrs{')'}:
//               <input
//                 id="pcu"
//                 name="pcu"
//                 type="number"
//                 value={inputValues[15]}
//                 onChange={(event) => handleInputChange(event, 15)}
//               />
//             </label>
//           </div>
//         <h2>Food Habits</h2>
//           <div className="input-container">
//             <label>
//               Coffee/Tea {'('}in cups{')'}:
//               <input
//                 id="tea"
//                 name="tea"
//                 type="number"
//                 value={inputValues[16]}
//                 onChange={(event) => handleInputChange(event, 16)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               Loaf Of Bread {'('}in g{')'}:
//               <input
//                 id="bread"
//                 name="bread"
//                 type="number"
//                 value={inputValues[17]}
//                 onChange={(event) => handleInputChange(event, 17)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               Milk Consumption {'('}in l{')'}:
//               <input
//                 id="milk"
//                 name="milk"
//                 type="number"
//                 value={inputValues[18]}
//                 onChange={(event) => handleInputChange(event, 18)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               Rice  {'('}in Kg{')'}:
//               <input
//                 id="rice"
//                 name="rice"
//                 type="number"
//                 value={inputValues[19]}
//                 onChange={(event) => handleInputChange(event, 19)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               Non-Veg {'('}in g{')'}:
//               <input
//                 id="nonveg"
//                 name="nonveg"
//                 type="number"
//                 value={inputValues[20]}
//                 onChange={(event) => handleInputChange(event, 20)}
//               />
//             </label>
//           </div>
//           <h2>Luxuiries</h2>
//           <div className="input-container">
//             <label>
//               New Car {'('}in nos{')'}:
//               <input
//                 id="newcar"
//                 name="newcar"
//                 type="number"
//                 value={inputValues[21]}
//                 onChange={(event) => handleInputChange(event, 21)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               New Build-house {'('}in nos{')'}:
//               <input
//                 id="house"
//                 name="house"
//                 type="number"
//                 value={inputValues[22]}
//                 onChange={(event) => handleInputChange(event, 22)}
//               />
//             </label>
//           </div>
//           <h2>Others</h2>
//           <div className="input-container">
//             <label>
//               Plastic Usage {'('}in Kg{')'}:
//               <input
//                 id="plastic"
//                 name="plastic"
//                 type="number"
//                 value={inputValues[23]}
//                 onChange={(event) => handleInputChange(event, 23)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               Boiling Water {'('}in L{')'}:
//               <input
//                 id="water"
//                 name="water"
//                 type="number"
//                 value={inputValues[24]}
//                 onChange={(event) => handleInputChange(event, 24)}
//               />
//             </label>
//           </div>
//           <h2>Type</h2>
//           <div className="input-container">
//             <label>
//               Agro Based :
//               <input
//                 id="agro"
//                 name="agro"
//                 type="number"
//                 value={inputValues[25]}
//                 onChange={(event) => handleInputChange(event, 25)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               Mining Based :
//               <input
//                 id="mining"
//                 name="mining"
//                 type="number"
//                 value={inputValues[26]}
//                 onChange={(event) => handleInputChange(event, 26)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               Power Industry :
//               <input
//                 id="power"
//                 name="power"
//                 type="number"
//                 value={inputValues[27]}
//                 onChange={(event) => handleInputChange(event, 27)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               Cement Industry :
//               <input
//                 id="cement"
//                 name="cement"
//                 type="number"
//                 value={inputValues[28]}
//                 onChange={(event) => handleInputChange(event, 28)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               Iron and Steel Industry :
//               <input
//                 id="iron"
//                 name="iron"
//                 type="number"
//                 value={inputValues[29]}
//                 onChange={(event) => handleInputChange(event, 29)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               Chemical Industry :
//               <input
//                 id="chemical"
//                 name="chemical"
//                 type="number"
//                 value={inputValues[30]}
//                 onChange={(event) => handleInputChange(event, 30)}
//               />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               Non Metallic :
//               <input
//                 id="nonm"
//                 name="nonm"
//                 type="number"
//                 value={inputValues[31]}
//                 onChange={(event) => handleInputChange(event, 31)}
//               />
//             </label>
//           </div>
          
//       <button type="submit" className='button'>Calculate Total</button>
//     </div>
//     </form>
//     {/* Display total */}
//     <StyledX>Total: {total}</StyledX>
//     <div style={{ display: 'flex' }}>
//       {total && <PieChart total={total} activeTab={activeTab} inputValues={inputValues[0]} inputValues1={inputValues[1]} inputValues2={inputValues[2]} inputValues3={inputValues[3]} inputValues4={inputValues[4]} inputValues5={inputValues[5]} inputValues6={inputValues[6]} inputValues7={inputValues[7]} inputValues8={inputValues[8]} inputValues9={inputValues[9]} inputValues10={inputValues[10]} inputValues11={inputValues[11]} inputValues12={inputValues[12]}/>}
//       {total && <PieChart1 />}
//     </div>
    
//   </div>
//   <div>
  
//   <GroupedBarChart total={total} activeTab={activeTab} inputValues={inputValues[0]} inputValues1={inputValues[1]} inputValues2={inputValues[2]} inputValues3={inputValues[3]} />
//   {/* <BarGraph/> */}
//   </div>
//   </>
// );
// };


// export default Calculator;














const Calculator = ({ handleSubmit, handleOnChange }) => {
  const [inputValues, setInputValues] = useState([]);
  const [total, setTotal] = useState("");

  const handleInputChange = (event, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  
const [showSecondButton,setShowSecondButton]=useState(false);

  return (
    <>
    
      <div className="formbox">

      <p>
            *Enter all data values for a month
            </p>
        <form className='form' onSubmit={handleSubmit}>
        <div className="input-container">
              <label for="id">
                User Name:
                <input
                  id="UserName"
                  name="UserName"
                  type="text"
                  value={inputValues[33]}
                  onChange={handleOnChange}
                  
                />
              </label>
            </div>
            
            <h2>Primary Sources</h2>
            <div className="input-container">
              <label>
                LPG {'('}in Kg{')'}:
                <input
                  id="lpg"
                  name="lpg"
                  type="number"
                  value={inputValues[7]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Electricity {'('}in Kwh{')'}:
                <input
                  id="elec"
                  name='elec'
                  type="number"
                  value={inputValues[8]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Car {'('}in Km{')'}:
                <input
                  id="car"
                  name="car"
                  type="number"
                  value={inputValues[9]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Bus {'('}in Km{')'}:
                <input
                  id="bus"
                  name="bus"
                  type="number"
                  value={inputValues[10]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Train {'('}in Km{')'}:
                <input
                  id="train"
                  name="train"
                  type="number"
                  value={inputValues[11]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
          
            <h2>Consumer Electronics</h2>
            <div className="input-container">
              <label>
                Watching Tv {'('}in Hrs{')'}:
                <input
                  id="tv"
                  name="tv"
                  type="number"
                  value={inputValues[12]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Smartphones usage {'('}in hrs{')'}:
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  value={inputValues[13]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Computer and Laptop {'('}in nos{')'}:
                <input
                  id="pc"
                  name="pc"
                  type="number"
                  value={inputValues[14]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Pc usage duration {'('}in hrs{')'}:
                <input
                  id="pcu"
                  name="pcu"
                  type="number"
                  value={inputValues[15]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <h2>Food Habits</h2>
            <div className="input-container">
              <label>
                Coffee/Tea {'('}in cups{')'}:
                <input
                  id="tea"
                  name="tea"
                  type="number"
                  value={inputValues[16]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Loaf Of Bread {'('}in kg{')'}:
                <input
                  id="bread"
                  name="bread"
                  type="number"
                  value={inputValues[17]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Milk Consumption {'('}in l{')'}:
                <input
                  id="milk"
                  name="milk"
                  type="number"
                  value={inputValues[18]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Rice  {'('}in Kg{')'}:
                <input
                  id="rice"
                  name="rice"
                  type="number"
                  value={inputValues[19]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Non-Veg {'('}in kg{')'}:
                <input
                  id="nonveg"
                  name="nonveg"
                  type="number"
                  value={inputValues[20]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <h2>Luxuiries</h2>
            <div className="input-container">
              <label>
                New Car {'('}in nos{')'}:
                <input
                  id="newcar"
                  name="newcar"
                  type="number"
                  value={inputValues[21]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                New Build-house {'('}in nos{')'}:
                <input
                  id="house"
                  name="house"
                  type="number"
                  value={inputValues[22]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            
            <h2>Type</h2>
            <div className="input-container">
              <label>
                Agro Based :
                <input
                  id="agro"
                  name="agro"
                  type="number"
                  value={inputValues[25]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Mining Based :
                <input
                  id="mining"
                  name="mining"
                  type="number"
                  value={inputValues[26]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Power Industry :
                <input
                  id="power"
                  name="power"
                  type="number"
                  value={inputValues[27]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Cement Industry :
                <input
                  id="cement"
                  name="cement"
                  type="number"
                  value={inputValues[28]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Iron and Steel Industry :
                <input
                  id="iron"
                  name="iron"
                  type="number"
                  value={inputValues[29]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Chemical Industry :
                <input
                  id="chemical"
                  name="chemical"
                  type="number"
                  value={inputValues[30]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Non Metallic :
                <input 
                  id="nonm"
                  name="nonm"
                  type="number"
                  value={inputValues[31]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                A New Coal Mine {'('}in nos{')'}:
                <input
                  id="A_new_coal_mine"
                  name="A_new_coal_mine"
                  type="number"
                  value={inputValues[3]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <h2>Industry</h2>
          <div className="input-grid">
            <div className="input-container">
              <label for="id">
                Waste Production (in KG):
                <input
                  id="Agriculture_Waste"
                  name="Agriculture_Waste"
                  type="number"
                  value={inputValues[32]}
                  onChange={handleOnChange}
                  
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Water Consumption:
                <input
                  id="Water_consumption"
                  name="Water_consumption"
                  type="number"
                  value={inputValues[1]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Deforestation {'('}in hectare{')'}:
                <input
                  id="Deforestation"
                  name="Deforestation"
                  type="number"
                  value={inputValues[2]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            
            <div className="input-container">
              <label>
                Wind Turbine-Iinstallation {'('}in nos{')'}:
                <input
                  id="Wind_Turbin"
                  name="Wind_Turbin"
                  type="number"
                  value={inputValues[4]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Solar Panels-installation {'('}in KW{')'}:
                <input
                  id="Solar_Panel"
                  name="Solar_Panel"
                  type="number"
                  value={inputValues[5]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Steel consumption/production {'('}in tons{')'}:
                <input
                  id="Steel_Consumption"
                  name="Steel_Consumption"
                  type="number"
                  value={inputValues[6]}
                  onChange={handleOnChange}
                />
              </label>
            </div >
            
            <u><h2>Others</h2></u>
            <div className="input-container">
              <label>
                Plastic Usage {'('}in Kg{')'}:
                <input
                  id="plastic"
                  name="plastic"
                  type="number"
                  value={inputValues[23]}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Boiling Water {'('}in L{')'}:
                <input
                  id="water"
                  name="water"
                  type="number"
                  value={inputValues[24]}
                  onChange={handleOnChange}
                />
              </label>
            </div>

            <button type="submit" className='button' onClick={()=>setShowSecondButton(true)}>Submit</button>
          </div>

        </form>


      </div>
      
      <div>{total}</div>
      {showSecondButton&&(
      <div className="view-data-button">
        <Link to="../data"><button>View Data</button></Link>
      </div>)}
      
      
    
    </>
    
  )

}

export default Calculator