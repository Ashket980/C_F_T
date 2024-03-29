// import {useState,useEffect} from 'react';
// import "./Formstyles.css"
// import styled from 'styled-components';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import PieChart from './PieChart';
// import PieChart1 from './PieChart1';
// import GroupedBarChart from './Bargraph';

// const StyledX=styled.div`
// font-size:24px;
// font-weight:bold;
// color:#333;
// margin-top:10px;
// border:3px solid green;
// border-radius:15px;
// display: inline-block;
// padding:10px
// `;
// const Calculator = () => {
//   const [inputValues, setInputValues] = useState(["", "", "", "", ""]);
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

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const sum = inputValues.reduce((acc, currentValue, index) => {
//       const number = parseFloat(currentValue);
//       if (!isNaN(number)) {
//         switch (activeTab) {
//           case 0:
//             switch (index) {
//               case 0:
//                 return acc + number * 0.85;
//               case 1:
//                 return acc + number * 3.5;
//               case 2:
//                 return acc + number * 0;
//               case 3:
//                 return acc + number * 2.983;
//               case 4:
//                 return acc + number * 0;
//               default:
//                 return acc;
//             }
//           case 1:
//             return acc + number;
//           default:
//             return acc;
//         }
//       }
//       return acc;
//     }, 0);

//     setTotal(sum);
//   };

  
//   return (
//     <div className="formbox">
//       <h2 id='h2'>Fill The required Data</h2>
//       <Tabs
//         value={activeTab}
//         onChange={handleTabChange}
//         aria-label="tabs example"
//       >
//         <Tab label="Individual" id="individual-tab" />
//         <Tab label="Industry" id="industry-tab" />
//       </Tabs>
//       <form className="form" onSubmit={handleSubmit}>
//       {activeTab === 0 && (
            
//                       <>
//                         <div>
                            
//                           <label>
//                             Electricity {'('}in Kwh{')'}:
//                             <input
//                               id="input"
//                               type="number"
//                               value={inputValues[0]}
//                               onChange={(event) => handleInputChange(event, 0)}
//                             />
//                           </label>
//                         </div>
//                         <div>
//                           <label>
//                             Waste Production {'('}in Kg{')'}:
//                             <input
//                               id="input"
//                               type="number"
//                               value={inputValues[1]}
//                               onChange={(event) => handleInputChange(event, 1)}
//                             />
//                           </label>
//                         </div>
//                         <div>
//                           <label>
//                             Water Consumption {'('}in L{')'}:
//                             <input
//                               id="input"
//                               type="number"
//                               value={inputValues[2]}
//                               onChange={(event) => handleInputChange(event, 2)}
//                             />
//                           </label>
//                         </div>
//                         <div>
//                           <label>
//                             LPG {'('}in Kg{')'}:
//                             <input
//                               id="input"
//                               type="number"
//                               value={inputValues[3]}
//                               onChange={(event) => handleInputChange(event, 3)}
//                             />
//                           </label>
//                         </div>
//                         <div>
//                           <label>
//                             Transportation {'('}in Km{')'}:
//                             <input
//                               id="input"
//                               type="number"
//                               value={inputValues[4]}
//                               onChange={(event) => handleInputChange(event, 4)}
//                             />
//                           </label>
//                         </div>
                        
//                       </>
//                     )}
//                     {activeTab === 1 && (
//                       <>
//                         <div>
                            
//                           <label>
//                             Agriculture Waste:
//                             <input
//                               id="input"
//                               type="number"
//                               value={inputValues[0]}
//                               onChange={(event) => handleInputChange(event, 0)}
//                             />
//                           </label>
//                         </div>
//                         <div>
//                           <label>
//                             Water Consumption:
//                             <input
//                               id="input"
//                               type="number"
//                               value={inputValues[1]}
//                               onChange={(event) => handleInputChange(event, 1)}
//                             />
//                           </label>
//                         </div>
//                         {/* Add more inputs for industry as needed */}
//                       </>
//                     )}
//         <button type="submit" className='button'>Calculate Total</button>
//       </form>
//       {/* Display total */}
//       <StyledX>Total: {total}</StyledX>
//       <div  style={{ display: 'flex' }}>
//       {total && <PieChart total={total} activeTab={activeTab} inputValues={inputValues[0]} inputValues1={inputValues[1]} inputValues2={inputValues[2]} inputValues3={inputValues[3]} inputValues4={inputValues[4]}/>}
//       <PieChart1/>
//       </div>
//       <GroupedBarChart/>
//     </div>
//   );
// };

// export default Calculator;

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
import BarGraph from './Bargraph';

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

const Calculator = () => {
  const [inputValues, setInputValues] = useState(["", "", "", "", ""]);
  const [total, setTotal] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setInputValues(["", "", "", "", ""]); // Reset input values when switching tabs
    setTotal("");
  };

  const handleInputChange = (event, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const sum = inputValues.reduce((acc, currentValue, index) => {
      const number = parseFloat(currentValue);
      if (!isNaN(number)) {
        switch (activeTab) {
          case 0:
            switch (index) {
              case 0:
                return acc + number * 0.85;
              case 1:
                return acc + number * 3.5;
              case 2:
                return acc + number * 0;
              case 3:
                return acc + number * 2.983;
              case 4:
                return acc + number * 0.381;//CAR
              case 5:
                return acc + number * 0.0376;//BUS
              case 6:
                return acc + number * 0.167;//TRAIN
              case 7:
                return acc + number * 0.2555;//TV
              case 8:
                return acc + number *5.525; //PLASTIC
              case 9:
                return acc + number * 0.191; //MOBILE
              case 10:
                return acc + number * 12000; //NEW CAR
              case 11:
                return acc + number * 329 ; //LAPTOP
              case 12:
                return acc + number * 0.043; //LAPTOP usage
              default:
                return acc;
            }
          case 1:
            switch (index) {
              case 0:
                return acc + number;
              case 1:
                  return acc + number;
              case 2:
                return acc + number *2000;
              case 3:
                return acc + number *8400000;
              case 4:
                return acc + number *30;
              case 5:
                return acc + number *12500;
              case 6:
                return acc + number *0.4;
              default:
                return acc;
            }
            case 2:
              switch(index){
                case 0:
                  return acc + number *2.983;//LPG
                case 1:
                  return acc + number *0.85;//Electricity
                case 2:
                  return acc + number *0.381;//Car
                case 3:
                  return acc + number * 0.0376;//BUS
                case 4:
                  return acc + number * 0.167;//Train

                default:
                  return acc;
              }
              case 3:
              switch(index){
                case 0:
                  return acc + number * 0.2555;//TV
                case 1:
                  return acc + number * 0.191;//Mobile
                case 2:
                  return acc + number * 329 ; //LAPTOP
                case 3:
                  return acc + number * 0.043;//Laptop usage
                default:
                  return acc;  
              }
              case 4:
              switch(index){
                case 0:
                  return acc + number * 0.178;//coffee
                case 1:
                  return acc + number * 0.002;//bread
                case 2:
                  return acc+ number * 1.362;//Milk
                case 3 :
                  return acc+number*4.7;//Rice
                case 4:
                  return acc + number*0.016;//Non veg
                default:
                  return acc;
              }
              case 5:
              switch(index){
                case 0:
                  return acc + number * 12000; //NEW CAR
                case 1:
                  return acc + number * 52330;//New Building
                default:
                  return acc;
                  
              }
              case 6:
              switch(index){
                case 0:
                  return acc + number * 5.525;//Plastic 
                case 1:
                  return acc + number * 0.08; //Boiling water
                default:
                  return acc;
                  
              }
              case 8:
                switch(index){
                  case 0:
                    return acc + number * 0.7972;//agro
                  case 1:
                    return acc + number * 0.52;//mining
                  case 2:
                    return acc + number * 1.176;//Power
                  case 3 :
                    return acc + number * 0.139;//cement
                  case 4 :
                    return acc + number * 0.508;//iron
                  case 5 :
                    return acc + number * 0.25;//chemical
                  case 6 :
                    return acc + number * 0.85;//non metallic 
                }
        }
      }
      return acc;
    }, 0);

    setTotal(sum);
  };

  return (
    <>
    <div className="formbox">
      <h2 id='h2'>Fill The required Data</h2>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        aria-label="tabs example"
        variant="scrollable" // Allow tabs to be scrollable
        scrollButtons="auto"
      >
        <Tab label="Individual" id="individual-tab" />
        <Tab label="Industry" id="industry-tab" />
        <Tab label="Primary Sources" id="Primary"/>
        <Tab label="Consumer Electronics" id="Comsumer"/>
        <Tab label="Food Habits" id="Food"/>
        <Tab label="Luxuiries" id="Luxuiries"/>
        <Tab label="Others" id="Others"/>
        <Tab label="General" id="General"/>
        <Tab label="Type" id="Type"/>
      </Tabs>
      <form className="form" onSubmit={handleSubmit}>
        {activeTab === 0 && (
          <>
            
          </>
        )}
        {activeTab === 1 && (
          <>
            <div>
              <label>
                Agriculture Waste:
                <input
                  id="input"
                  type="number"
                  value={inputValues[0]}
                  onChange={(event) => handleInputChange(event, 0)}
                />
              </label>
            </div>
            <div>
              <label>
                Water Consumption:
                <input
                  id="input"
                  type="number"
                  value={inputValues[1]}
                  onChange={(event) => handleInputChange(event, 1)}
                />
              </label>
            </div>
            <div>
              <label>
                Deforestation {'('}in hectare{')'}:
                <input
                  id="input"
                  type="number"
                  value={inputValues[2]}
                  onChange={(event) => handleInputChange(event, 2)}
                />
              </label>
            </div>
            <div>
              <label>
                A New Coal Mine {'('}in nos{')'}:
                <input
                  id="input"
                  type="number"
                  value={inputValues[3]}
                  onChange={(event) => handleInputChange(event, 3)}
                />
              </label>
            </div>
            <div>
              <label>
                Wind Turbine-Iinstallation {'('}in nos{')'}:
                <input
                  id="input"
                  type="number"
                  value={inputValues[4]}
                  onChange={(event) => handleInputChange(event, 4)}
                />
              </label>
            </div>
            <div>
              <label>
                Solar Panels-installation {'('}in MW{')'}:
                <input
                  id="input"
                  type="number"
                  value={inputValues[5]}
                  onChange={(event) => handleInputChange(event, 5)}
                />
              </label>
            </div>
            <div>
              <label>
                Steel consumption/production {'('}in tons{')'}:
                <input
                  id="input"
                  type="number"
                  value={inputValues[6]}
                  onChange={(event) => handleInputChange(event, 6)}
                />
              </label>
            </div>
            {/* Add more inputs for industry as needed */}
          </>
        )}
        {activeTab === 2 && (
          <>
            <div>
              <label>
                LPG {'('}in Kg{')'}:
                <input
                  id="input"
                  type="number"
                  value={inputValues[0]}
                  onChange={(event) => handleInputChange(event, 0)}
                />
              </label>
            </div>
            <div>
              <label>
                Electricity {'('}in Kwh{')'}:
                <input
                  id="input"
                  type="number"
                  value={inputValues[1]}
                  onChange={(event) => handleInputChange(event, 1)}
                />
              </label>
            </div>
            <div>
              <label>
                Car {'('}in Km{')'}:
                <input
                  id="input"
                  type="number"
                  value={inputValues[4]}
                  onChange={(event) => handleInputChange(event, 2)}
                />
              </label>
            </div>
            <div>
              <label>
                Bus {'('}in Km{')'}:
                <input
                  id="input"
                  type="number"
                  value={inputValues[5]}
                  onChange={(event) => handleInputChange(event, 3)}
                />
              </label>
            </div>
            <div>
              <label>
                Train {'('}in Km{')'}:
                <input
                  id="input"
                  type="number"
                  value={inputValues[6]}
                  onChange={(event) => handleInputChange(event, 4)}
                />
              </label>
            </div>

          </>)}
          {activeTab === 3 && (
          <>
            <div>
              <label>
                Watching Tv {'('}in Hrs{')'}:
                <input
                  id="input"
                  type="number"
                  value={inputValues[0]}
                  onChange={(event) => handleInputChange(event, 0)}
                />
              </label>
            </div>
            <div>
              <label>
                Smartphones usage {'('}in hrs{')'}:
                <input
                  id="input"
                  type="number"
                  value={inputValues[1]}
                  onChange={(event) => handleInputChange(event, 1)}
                />
              </label>
            </div>
            <div>
              <label>
                Computer and Laptop {'('}in nos{')'}:
                <input
                  id="input"
                  type="number"
                  value={inputValues[2]}
                  onChange={(event) => handleInputChange(event, 2)}
                />
              </label>
            </div>
            <div>
              <label>
                Pc usage duration {'('}in hrs{')'}:
                <input
                  id="input"
                  type="number"
                  value={inputValues[3]}
                  onChange={(event) => handleInputChange(event, 3)}
                />
              </label>
            </div>
          </>)}
          
          {activeTab === 4 && (
            <>
            <div>
              <label>
                Coffee/Tea {'('}in cups{')'}:
                <input
                  id="input"
                  type="number"
                  value={inputValues[0]}
                  onChange={(event) => handleInputChange(event, 0)}
                />
              </label>
            </div>
            <div>
              <label>
                Loaf Of Bread {'('}in g{')'}:
                <input
                  id="input"
                  type="number"
                  value={inputValues[1]}
                  onChange={(event) => handleInputChange(event, 1)}
                />
              </label>
            </div>
            <div>
              <label>
                Milk Consumption {'('}in l{')'}:
                <input
                  id="input"
                  type="number"
                  value={inputValues[2]}
                  onChange={(event) => handleInputChange(event, 2)}
                />
              </label>
            </div>
            <div>
              <label>
                Rice  {'('}in Kg{')'}:
                <input
                  id="input"
                  type="number"
                  value={inputValues[3]}
                  onChange={(event) => handleInputChange(event, 3)}
                />
              </label>
            </div>
            <div>
              <label>
                Non-Veg {'('}in g{')'}:
                <input
                  id="input"
                  type="number"
                  value={inputValues[4]}
                  onChange={(event) => handleInputChange(event, 4)}
                />
              </label>
            </div>
            </>
          )}
          {activeTab === 5 && (
            <>
            <div>
              <label>
                New Car {'('}in nos{')'}:
                <input
                  id="input"
                  type="number"
                  value={inputValues[0]}
                  onChange={(event) => handleInputChange(event, 0)}
                />
              </label>
            </div>
            <div>
              <label>
                New Build-house {'('}in nos{')'}:
                <input
                  id="input"
                  type="number"
                  value={inputValues[1]}
                  onChange={(event) => handleInputChange(event, 1)}
                />
              </label>
            </div>
            </>
          )}
          {activeTab === 6 && (
            <>
            <div>
              <label>
                Plastic Usage {'('}in Kg{')'}:
                <input
                  id="input"
                  type="number"
                  value={inputValues[0]}
                  onChange={(event) => handleInputChange(event, 0)}
                />
              </label>
            </div>
            <div>
              <label>
                Boiling Water {'('}in L{')'}:
                <input
                  id="input"
                  type="number"
                  value={inputValues[1]}
                  onChange={(event) => handleInputChange(event, 1)}
                />
              </label>
            </div>
            </>
          )}
          {activeTab === 8 && (
            <>
            <div>
              <label>
                Agro Based :
                <input
                  id="input"
                  type="number"
                  value={inputValues[0]}
                  onChange={(event) => handleInputChange(event, 0)}
                />
              </label>
            </div>
            <div>
              <label>
                Mining Based :
                <input
                  id="input"
                  type="number"
                  value={inputValues[1]}
                  onChange={(event) => handleInputChange(event, 1)}
                />
              </label>
            </div>
            <div>
              <label>
                Power Industry :
                <input
                  id="input"
                  type="number"
                  value={inputValues[2]}
                  onChange={(event) => handleInputChange(event, 2)}
                />
              </label>
            </div>
            <div>
              <label>
                Cement Industry :
                <input
                  id="input"
                  type="number"
                  value={inputValues[3]}
                  onChange={(event) => handleInputChange(event, 3)}
                />
              </label>
            </div>
            <div>
              <label>
                Iron and Steel Industry :
                <input
                  id="input"
                  type="number"
                  value={inputValues[1]}
                  onChange={(event) => handleInputChange(event, 4)}
                />
              </label>
            </div>
            <div>
              <label>
                Chemical Industry :
                <input
                  id="input"
                  type="number"
                  value={inputValues[1]}
                  onChange={(event) => handleInputChange(event, 5)}
                />
              </label>
            </div>
            <div>
              <label>
                Non Metallic :
                <input
                  id="input"
                  type="number"
                  value={inputValues[1]}
                  onChange={(event) => handleInputChange(event, 6)}
                />
              </label>
            </div>
            </>
          )
        }
        <button type="submit" className='button'>Calculate Total</button>
      </form>
      {/* Display total */}
      <StyledX>Total: {total}</StyledX>
      <div style={{ display: 'flex' }}>
        {total && <PieChart total={total} activeTab={activeTab} inputValues={inputValues[0]} inputValues1={inputValues[1]} inputValues2={inputValues[2]} inputValues3={inputValues[3]} inputValues4={inputValues[4]} inputValues5={inputValues[5]} inputValues6={inputValues[6]} inputValues7={inputValues[7]} inputValues8={inputValues[8]} inputValues9={inputValues[9]} inputValues10={inputValues[10]} inputValues11={inputValues[11]} inputValues12={inputValues[12]}/>}
        {total && <PieChart1 />}
      </div>
      
    </div>
    <div>
    
    <GroupedBarChart total={total} activeTab={activeTab} inputValues={inputValues[0]} inputValues1={inputValues[1]} inputValues2={inputValues[2]} inputValues3={inputValues[3]} />
    {/* <BarGraph/> */}
    </div>
    </>
  );
};

export default Calculator;




































































// const Calculator = () => {
//   const [inputValues, setInputValues] = useState(['', '', '', '', '']);
//   const [total, setTotal] = useState('');
//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//     setInputValues(['', '', '', '', '']); // Reset input values when switching tabs
//     setTotal('');
//   };

//   // Function to handle input change for a specific index
//   const handleInputChange = (event, index) => {
//     const newInputValues = [...inputValues];
//     newInputValues[index] = event.target.value;
//     setInputValues(newInputValues);
//   };

//   // Function to handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Calculate the sum of all entered numbers
//     const sum = inputValues.reduce((acc, currentValue, index) => {
//       const number = parseFloat(currentValue);
//       if (!isNaN(number)) {
//         // calculations
//         switch (activeTab) {
//           case 0: // Individual 
//             switch (index) {
//               case 0:
//                 return acc + (number * 0.85);
//               case 1:
//                 return acc + (number * 3.5);
//               case 2:
//                 return acc + (number * 0);
//               case 3:
//                 return acc + (number * 8);
//               case 4:
//                 return acc + (number * 10);
//               default:
//                 return acc;
//             }
//           case 1: // Industry 
//             return acc + number; 
//           default:
//             return acc;
//         }
//       }
//       return acc;
//     }, 0);

//     setTotal(sum);
//   };
  // const options

//   return (
//     <div className='formbox'>
//       <h2>Fill The required Data</h2>
//       <Tabs value={activeTab} onChange={handleTabChange} aria-label="tabs example">
//         <Tab label="Individual" id="individual-tab" />
//         <Tab label="Industry" id="industry-tab" />
//       </Tabs>
//       <form className='form' onSubmit={handleSubmit}>
//         {activeTab === 0 && (
            
//           <>
//             <div>
                
//               <label>
//                 Electricity {'('}in Kwh{')'}:
//                 <input
//                   id="input"
//                   type="number"
//                   value={inputValues[0]}
//                   onChange={(event) => handleInputChange(event, 0)}
//                 />
//               </label>
//             </div>
//             <div>
//               <label>
//                 Waste Production {'('}in Kg{')'}:
//                 <input
//                   id="input"
//                   type="number"
//                   value={inputValues[1]}
//                   onChange={(event) => handleInputChange(event, 1)}
//                 />
//               </label>
//             </div>
//             <div>
//               <label>
//                 Water Consumption {'('}in L{')'}:
//                 <input
//                   id="input"
//                   type="number"
//                   value={inputValues[2]}
//                   onChange={(event) => handleInputChange(event, 2)}
//                 />
//               </label>
//             </div>
//             <div>
//               <label>
//                 LPG {'('}in Kg{')'}:
//                 <input
//                   id="input"
//                   type="number"
//                   value={inputValues[3]}
//                   onChange={(event) => handleInputChange(event, 3)}
//                 />
//               </label>
//             </div>
//             <div>
//               <label>
//                 Transportation {'('}in Km{')'}:
//                 <input
//                   id="input"
//                   type="number"
//                   value={inputValues[4]}
//                   onChange={(event) => handleInputChange(event, 4)}
//                 />
//               </label>
//             </div>
            
//           </>
//         )}
//         {activeTab === 1 && (
//           <>
//             <div>
                
//               <label>
//                 Agriculture Waste:
//                 <input
//                   id="input"
//                   type="number"
//                   value={inputValues[0]}
//                   onChange={(event) => handleInputChange(event, 0)}
//                 />
//               </label>
//             </div>
//             <div>
//               <label>
//                 Water Consumption:
//                 <input
//                   id="input"
//                   type="number"
//                   value={inputValues[1]}
//                   onChange={(event) => handleInputChange(event, 1)}
//                 />
//               </label>
//             </div>
//             {/* Add more inputs for industry as needed */}
//           </>
//         )}
//         <button type="submit">Calculate Total</button>
//       </form>
//       <StyledX>Total: {total}</StyledX>
//       {total && <PieChart total={total} activeTab={activeTab} />}
//     </div>
//   );

// };











































// function Form(){


//     const [first,setFirst]=useState(true);
//     const [second,setSecond]=useState(true);
//     const [third,setThird]=useState(true);
//     const [fourth,setFourth]=useState(true);
//     const [fifth,setFifth]=useState(true);
//     const [sixth,setSixth]=useState(true);
//     const [seventh,setSeventh]=useState(true);
    
//     const [eighth,setEighth]=useState(true);
//     const [but,setBut]=useState(true);
//     const [x,setX]=useState(0);

    
//     const handleChange = (data)=>{
        
//         let newX = x;
//         if(data=="first"&&first)
//             {
//             newX+=10
//             }
//             setFirst(!first)
//         if(data=="second"&&second){
//             newX+=12
//             setSecond(!second)
//         }
//         if(data=="third"&&third){
//             var a = document.getElementById('n5').value;
//             a=a/10.58;
//             a=a*0.630;
//             newX+=a
//             setThird(!third)
//         }
//         if(data=="fourth"&&fourth){
//             var a = document.getElementById('n4').value;
       
//             newX+=a*65;
//             setSeventh(!fourth)
//         }
//         if(data=="fifth"&&fifth){
//             var a = document.getElementById('n3').value;
       
//             newX+=a*65;
//             setSeventh(!fifth)
//         }
//         if(data=="sixth"&&sixth){
//             var a = document.getElementById('n2').value;
       
//             newX+=a*65;
//             setSeventh(!sixth)
//         }
//         if(data=="seventh"&&seventh){

//             var a = document.getElementById('n1').value;
       
//             newX+=a*65;
//             setSeventh(!seventh)
//         }
//         if(data=="eighth"&&eighth){
//             newX+=15
//             setEighth(!eighth)
//         }
//         setX(newX)
//     }







  











    // return(<>
    //     <div className='formbox'>
    //   <h3>SELECT FROM THE BELOW DAY-TO-DAY ACTIVITIES</h3>
    //   <form className="form" >
    //       <div class="close-btn"></div>
    //         <label>Electricity : <input type="checkbox" value={first}  onChange={()=>handleChange("first")}></input> </label>
  
    //         <label>Gas Bill :
    //         <input type="checkbox"  value={second} onChange={()=>handleChange("second")}></input> </label>

    //         <label>Monthly mileage on your vehicles : 
    //         <input type="checkbox"  value={third} onChange={()=>handleChange("third")}></input> </label>

    //         <label>Household : 
    //         <input type="checkbox"  value={fourth} onChange={()=>handleChange("fourth")}></input> </label>

    //         <label>Waste Production : 
    //         <input type="checkbox" value={fifth} onChange={()=>handleChange("fifth")} ></input> </label>

    //         <label>Water Consumption : 
    //         <input type="checkbox" value={eighth} onChange={()=>handleChange("eighth")} ></input> </label>

    //         <label>Agricultural Waste : 
    //         <input type="checkbox"  value={sixth} onChange={()=>handleChange("sixth")}></input> </label>

    //         {/* <label>Construction Waste ( if any)  :  */}
    //         {/* <input type="checkbox"  value={seventh} onChange={()=>handleChange("seventh")}></input> </label> */}


    //         <label>Electricity
    //             <input id='n1' type='number' value={seventh}  onChange={()=>handleChange("seventh")}></input>
    //         </label>
    //         <label>LPG
    //             <input id='n2' type='number' value={sixth}  onChange={()=>handleChange("sixth")}></input>
    //         </label>
    //         <label>Waste Production(in kg)
    //             <input id='n3' type='number' value={fifth}  onChange={()=>handleChange("fifth")}></input>
    //         </label>
    //         <label>Water Consumption(in l)
    //             <input id='n4' type='number' value={fourth}  onChange={()=>handleChange("fourth")}></input>
    //         </label>
    //         <label>Transportaion
    //             <input id='n5'  type='number'  value={third}  onChange={()=>handleChange("third")}></input>
    //         </label>
            
            


    //       </form>

    // </div>

    // <div>
    //         <ul>               
    //             <StyledX>
    //             Your Carbon Footprint Score : {x}
    //             </StyledX>
    //         </ul>
    //     </div>
    
    // </>
    // )



    







































    
// const Calculator = () => {
//     const [inputValue, setInputValue] = useState('');
//     const [result, setResult] = useState('');
  
//     // Function to handle input change
//     const handleInputChange = (event) => {
//       setInputValue(event.target.value);
//     };
  
//     // Function to handle form submission
//     const handleSubmit = (event) => {
//       event.preventDefault();
  
//       // Check if inputValue is a valid number
//       const number = parseFloat(inputValue);
//       if (isNaN(number)) {
//         setResult('Please enter a valid number');
//       } else {
//         // Apply your mathematical formula here
//         const calculatedResult = number * 2; // Example: doubling the input
//         setResult(calculatedResult);
//       }
//     };
    
//     return (
//         <div>
//           <h2>Simple Calculator</h2>
//           <form onSubmit={handleSubmit}>
//             <label>
//               Enter a number:
//               <input
//                 type="number"
//                 value={inputValue}
//                 onChange={handleInputChange}
//               />
//             </label>
            
//             <button type="submit">Calculate</button>
//           </form>
//           <p>{result}</p>
//         </div>
//       );
    































// const Calculator = () => {
//     const [inputValues, setInputValues] = useState(['', '', '', '', '']);
//     const [total, setTotal] = useState('');
  
//     // Function to handle input change for a specific index
//     const handleInputChange = (event, index) => {
//       const newInputValues = [...inputValues];
//       newInputValues[index] = event.target.value;
//       setInputValues(newInputValues);
//     };
  
//     // Function to handle form submission
//     const handleSubmit = (event) => {
//       event.preventDefault();
  
//       // Calculate the sum of all entered numbers
//       const sum = inputValues.reduce((acc, currentValue, index) => {
//         const number = parseFloat(currentValue);
//         if (!isNaN(number)) {
//           // Apply different calculations based on the index
//           switch (index) {
//             case 0:
//                 return acc + (number * 2);
//             case 1:
//                 return acc + (number / 4);
//             case 2:
//                 return acc + (number * 0.65);
//             case 3:
//                 return acc + (number+45);
//             default:
//               return acc;
//           }
//         }
//         return acc;
//       }, 0);
  
//       setTotal(sum);
//     };
  
//     return (
//       <div  className='formbox'>
//         <h3>Fill the data for Individual </h3>
//         <form className='form' onSubmit={handleSubmit}>
//           {inputValues.map((value, index) => (
//             <div key={index}>
//               <label>
//                 {/* Enter number {index + 1}: */}
//                 Electricity:
//                 <input id='input'
//                   type="number"
//                   value={value}
//                   onChange={(event) => handleInputChange(event, index)}
//                 />
//               </label>
//             </div>
//           ))}
//           <button type="submit">Calculate Total</button>
//         </form>
      
        
//         <StyledX>Total: {total}</StyledX>
//       </div>
//     );
//   };
  
//   export default Calculator;



// const Calculator = () => {
//     const [inputValues, setInputValues] = useState(['', '', '', '', '']);
//     const [total, setTotal] = useState('');
  
//     // Function to handle input change for a specific index
//     const handleInputChange = (event, index) => {
//       const newInputValues = [...inputValues];
//       newInputValues[index] = event.target.value;
//       setInputValues(newInputValues);
//     };
  
//     // Function to handle form submission
//     const handleSubmit = (event) => {
//       event.preventDefault();
  
//       // Calculate the sum of all entered numbers
//       const sum = inputValues.reduce((acc, currentValue, index) => {
//         const number = parseFloat(currentValue);
//         if (!isNaN(number)) {
//           // Apply different calculations based on the index
//           switch (index) {
//             case 0:
//               return acc + (number * 2);
//             case 1:
//               return acc + (number / 4);
//             case 2:
//               return acc + (number * 0.65);
//             default:
//               return acc;
//           }
//         }
//         return acc;
//       }, 0);
  
//       setTotal(sum);
//     };
  
//     return (
//       <div className='formbox'>
//         <h2>Multiple Input Calculator</h2>
//         <form className='form' onSubmit={handleSubmit}>
//           <div>
//             <label >
//               Electricity:
//               <input id="input"
//                 type="number"
//                 value={inputValues[0]}
//                 onChange={(event) => handleInputChange(event, 0)}
//               />
//             </label>
//           </div>
//           <div>
//             <label >
//               Waste Production:
//               <input id="input"
//                 type="number"
//                 value={inputValues[1]}
//                 onChange={(event) => handleInputChange(event, 1)}
//               />
//             </label>
//           </div>
//           <div>
//             <label >
//               Water Consumption:
//               <input id="input"
//                 type="number"
//                 value={inputValues[2]}
//                 onChange={(event) => handleInputChange(event, 2)}
//               />
//             </label>
//           </div>
//           <div>
//             <label >
//               LPG:
//               <input id="input"
//                 type="number"
//                 value={inputValues[3]}
//                 onChange={(event) => handleInputChange(event, 3)}
//               />
//             </label>
//           </div>
//           <div>
//             <label >
//               Transportation:
//               <input id="input"
//                 type="number"
//                 value={inputValues[4]}
//                 onChange={(event) => handleInputChange(event, 4)}
//               />
//             </label>
//           </div>
//           <button type="submit">Calculate Total</button>
//         </form>
//         <StyledX>Total: {total}</StyledX>
//       </div>
//     );
//   };
  
//   export default Calculator;





