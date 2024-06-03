
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BarChart from '../components/BarChart';
import "./Datastyles.css"


function Data() {

  const [dataList, setDataList] = useState([]);
  const [addSection, setAddSection] = useState(false)


  const prepareChartData = () => {
    if (dataList.length > 1) { // Ensure there are at least two data points for comparison
      const currentData = dataList[dataList.length - 1];
      const previousData = dataList[dataList.length - 2]; // Data from the previous time period
      const dynamicData = {
        x: [
          'Waste', 'water', 'deforestation', 'wind turbine', 'solar panel', 'steel', 'LPG', 'Electricity', 'Transportation', 'Electronics', 'Food', 'newcar', 'new house', 'Others'
        ],
        y: [
          currentData.Agriculture_Waste * 3.5,
          currentData.Water_consumption * 1,
          currentData.Deforestation * 2000000,
          currentData.Wind_Turbin * 30000,
          currentData.Solar_Panel * 1250,
          currentData.Steel_Consumption * 400,
          currentData.lpg * 2.983,
          currentData.elec * 0.85,
          currentData.car * 0.381 + currentData.bus * 0.0376 + currentData.train * 0.167,
          currentData.tv * 0.2555 + currentData.phone * 0.191 + currentData.pc * 329 + currentData.pcu * 0.043,
          currentData.tea * 0.178 + currentData.bread * 0.002 + currentData.milk * 1.362 + currentData.rice * 4.7 + currentData.nonveg * 0.016,
          currentData.newcar * 12000,
          currentData.house * 52330,
          currentData.plastic * 5.525 + currentData.water * 0.08,
        ],
        type: 'bar',
        name: 'Current User' // Name for the current period bar
      };

      const dynamicData2 = {
        x: [
          'Waste', 'water', 'deforestation', 'wind turbine', 'solar panel', 'steel', 'LPG', 'Electricity', 'Transportation', 'Electronics', 'Food', 'newcar', 'new house', 'Others'
        ],
        y: [
          calculateAverage('Agriculture_Waste') * 3.5,
          calculateAverage('Water_consumption') * 1,
          calculateAverage('Deforestation') * 2000000,
          calculateAverage('Wind_Turbin') * 30000,
          calculateAverage('Solar_Panel') * 1250,
          calculateAverage('Steel_Consumption') * 400,
          calculateAverage('lpg') * 2.983,
          calculateAverage('elec') * 0.85,
          calculateAverage('car') * 0.381 + calculateAverage('bus') * 0.0376 + calculateAverage('train') * 0.167,
          calculateAverage('tv') * 0.2555 + calculateAverage('phone') * 0.191 + calculateAverage('pc') * 329 + calculateAverage('pcu') * 0.043,
          calculateAverage('tea') * 0.178 + calculateAverage('bread') * 0.002 + calculateAverage('milk') * 1.362 + calculateAverage('rice') * 4.7 + calculateAverage('nonveg') * 0.016,
          calculateAverage('newcar') * 12000,
          calculateAverage('house') * 52330,
          calculateAverage('plastic') * 5.525 + calculateAverage('water') * 0.08,
        ],
        type: 'bar',
        name: 'Average' // Name for the previous period bar
      };

      return [dynamicData, dynamicData2];
    } else {
      return [];
    }
  };






  //Bar2
  const prepareChartData2 = () => {
    if (dataList.length > 0) {
      const latestData = dataList[dataList.length - 1];

      const dynamicData = {

        x: [
          'agro', 'mining', 'power', 'cement', 'iron and stee', 'chemical', 'non metallic', 'coal-mine'
        ],
        y: [

          latestData.agro * 6643333333,
          latestData.mining * 4550000000,
          latestData.power * 9800000000,
          latestData.cement * 1158333333,
          latestData.iron * 4233333333,
          latestData.chemical * 2083333333,
          latestData.nonm * 7083333333,
          latestData.A_new_coal_mine * 8400000000
        ],


        type: 'bar',
        name: 'Current User'
      };
      const dynamicData2 = {
        x: [
          'agro', 'mining', 'power', 'cement', 'iron and stee', 'chemical', 'non metallic', 'coal-mine'
        ],

        y: [

          calculateAverage('agro') * 6643333333,
          calculateAverage('mining') * 4550000000,
          calculateAverage('power') * 9800000000,
          calculateAverage('cement') * 1158333333,
          calculateAverage('iron') * 4233333333,
          calculateAverage('chemical') * 2083333333,
          calculateAverage('nonm') * 7083333333,
          calculateAverage('A_new_coal_mine') * 8400000000
        ],


        type: 'bar',
        name: 'Average'
      };




      return [dynamicData, dynamicData2];
    }
    else {
      return [];
    }
  };







  useEffect(() => {
    getFetchData()
  }, [])


  const getFetchData = async () => {
    const data = await axios.get("/")
    if (data.data.success) {
      setDataList(data.data.data)
      // alert(data.data.message)
    }
  }



  const calculateAverage = (columnName) => {
    if (dataList.length > 1) {
      const validData = dataList.slice(0, -1).filter(item => !isNaN(item[columnName]));
      if (validData.length === 0) return 0; // If no valid data, return 0
      const sum = validData.reduce((acc, curr) => acc + curr[columnName], 0);
      return (sum / validData.length).toFixed(2);
    }
    return 0;
  };



  const [showMeasures, setShowMeasures] = useState(false);

  const toggleMeasures = () => {
    setShowMeasures(!showMeasures);
  };

  const [showStats, setShowStats] = useState(false);

  const toggleStats = () => {
    setShowStats(!showStats);
  };



  return (

    <>
      <div className='background-image'>
        <div className="data-container">

          {dataList.length > 0 ? (
            <>
              {dataList.map((el, index) => {

              })}
              <h1 className='totalContainer'>Total: {dataList[dataList.length - 1].Agriculture_Waste * 3.5 + dataList[dataList.length - 1].Water_consumption + dataList[dataList.length - 1].Deforestation * 2000000 + dataList[dataList.length - 1].A_new_coal_mine * 8400000000 + dataList[dataList.length - 1].Wind_Turbin * 30000 + dataList[dataList.length - 1].Solar_Panel * 1250 + dataList[dataList.length - 1].Steel_Consumption * 400 + dataList[dataList.length - 1].lpg * 2.983 + dataList[dataList.length - 1].elec * 0.85 + dataList[dataList.length - 1].car * 0.381 + dataList[dataList.length - 1].bus * 0.0376 + dataList[dataList.length - 1].train * 0.167 + dataList[dataList.length - 1].tv * 0.2555 + dataList[dataList.length - 1].phone * 0.191 + dataList[dataList.length - 1].pc * 329 + dataList[dataList.length - 1].pcu * 0.043 + dataList[dataList.length - 1].tea * 0.178 + dataList[dataList.length - 1].bread * 0.002 + dataList[dataList.length - 1].milk * 1.362 + dataList[dataList.length - 1].rice * 4.7 + dataList[dataList.length - 1].nonveg * 0.016 + dataList[dataList.length - 1].newcar * 12000 + dataList[dataList.length - 1].house * 52330 + dataList[dataList.length - 1].plastic * 5.525 + dataList[dataList.length - 1].water * 0.08 + dataList[dataList.length - 1].agro * 6643333333 + dataList[dataList.length - 1].mining * 4550000000 + dataList[dataList.length - 1].power * 9800000000 + dataList[dataList.length - 1].cement * 1158333333 + dataList[dataList.length - 1].iron * 4233333333 + dataList[dataList.length - 1].chemical * 2083333333 + dataList[dataList.length - 1].nonm * 7083333333} Kg of Co2(for a month)</h1>

              {/* Calculate the average of all previous totals */}
              {dataList.length > 1 && (<>

                <h2>
                  Average (Individual) :{(
                    dataList.slice(0, -1).reduce((acc, curr) => {
                      return acc + curr.Agriculture_Waste * 3.5 + curr.Water_consumption * 1 + curr.Deforestation * 2000000 + curr.Wind_Turbin * 30000 + curr.Solar_Panel * 1250 + curr.Steel_Consumption * 400 + curr.lpg * 2.983 + curr.elec * 0.85 + curr.car * 0.381 + curr.bus * 0.0376 + curr.train * 0.167 + curr.tv * 0.2555 + curr.phone * 0.191 + curr.pc * 329 + curr.pcu * 0.043 + curr.tea * 0.178 + curr.bread * 0.002 + curr.milk * 1.362 + curr.rice * 4.7 + curr.nonveg * 0.016 + curr.newcar * 12000 + curr.house * 52330 + curr.plastic * 5.525 + curr.water * 0.08;
                    }, 0) / (dataList.length - 1)
                  ).toFixed(2)}
                </h2>

                <h2>
                  Average (Industry) :{(
                    dataList.slice(0, -1).reduce((acc, curr) => {
                      return acc + curr.A_new_coal_mine * 8400000000 + curr.agro * 6643333333 + curr.mining * 4550000000 + curr.power * 9800000000 + curr.cement * 1158333333 + curr.iron * 4233333333 + curr.chemical * 2083333333 + curr.nonm * 7083333333;
                    }, 0) / (dataList.length - 1)
                  ).toFixed(2)}
                </h2>


                <p id="p"> (Prediction : Your Carbon Footprint total should be around the average value(of past records) shown above)</p>


              </>
              )}


            </>
          ) : (
            <p>No data</p>
          )}





        </div>

        <div>

          <button class="btn btn-add" onClick={() => setAddSection(true)}>View Table</button>
          {
            addSection && (

              <div class="tableContainer">
                <table>
                  <thead>
                    <tr>
                      <th>UserName</th>
                      <th>Agriculture_Waste</th>
                      <th>Water_consumption</th>
                      <th>Deforestation</th>
                      <th>A_new_coal_mine</th>
                      <th>Wind_Turbin</th>
                      <th>Solar_Panel</th>
                      <th>Steel_Consumption</th>
                      <th> lpg</th>
                      <th>elec</th>
                      <th>car</th>
                      <th>bus</th>
                      <th> train</th>
                      <th> tv</th>
                      <th> phone</th>
                      <th> pc</th>
                      <th> pcu</th>
                      <th> tea</th>
                      <th> bread</th>
                      <th> milk</th>
                      <th> rice</th>
                      <th> nonveg</th>
                      <th> newcar</th>
                      <th> house</th>
                      <th> plastic</th>
                      <th> water</th>
                      <th> agro</th>
                      <th> mining</th>
                      <th> power</th>
                      <th> cement</th>
                      <th> iron</th>
                      <th> chemical</th>
                      <th> nonm</th>
                      <th>Total</th>


                    </tr>

                  </thead>
                  <tbody>
                    {
                      dataList[0] ? (
                        dataList.slice(-10).map((el, index) => {
                          return (
                            <tr key={index} className={index === dataList.length - 1 ? 'highlighted-row' : ''}>
                              <td>{el.UserName}</td>
                              <td>{el.Agriculture_Waste * 3.5}</td>
                              <td>{el.Water_consumption * 1}</td>
                              <td>{el.Deforestation * 2000000}</td>
                              <td>{el.A_new_coal_mine * 8400000000}</td>
                              <td>{el.Wind_Turbin * 30000}</td>
                              <td>{el.Solar_Panel * 1250}</td>
                              <td>{el.Steel_Consumption * 400}</td>
                              <td>{el.lpg * 2.983}</td>
                              <td>{el.elec * 0.85}</td>
                              <td>{el.car * 0.381}</td>
                              <td>{el.bus * 0.0376}</td>
                              <td>{el.train * 0.167}</td>
                              <td>{el.tv * 0.2555}</td>
                              <td>{el.phone * 0.191}</td>
                              <td>{el.pc * 329}</td>
                              <td>{el.pcu * 0.043}</td>
                              <td>{el.tea * 0.178}</td>
                              <td>{el.bread * 1.018}</td>
                              <td>{el.milk * 1.362}</td>
                              <td>{el.rice * 4.7}</td>
                              <td>{el.nonveg * 0.80}</td>
                              <td>{el.newcar * 12000}</td>
                              <td>{el.house * 52330}</td>
                              <td>{el.plastic * 5.525}</td>
                              <td>{el.water * 0.08}</td>
                              <td>{el.agro * 6643333333}</td>
                              <td>{el.mining * 4550000000}</td>
                              <td>{el.power * 9800000000}</td>
                              <td>{el.cement * 1158333333}</td>
                              <td>{el.iron * 4233333333}</td>
                              <td>{el.chemical * 2083333333}</td>
                              <td>{el.nonm * 7083333333}</td>
                              <td>{el.Agriculture_Waste * 3.5 + el.Water_consumption * 1 + el.Deforestation * 2000000 + el.A_new_coal_mine * 8400000000 + el.Wind_Turbin * 30 + el.Solar_Panel * 12500 + el.Steel_Consumption * 0.4 + el.lpg * 2.983 + el.elec * 0.85 + el.car * 0.381 + el.bus * 0.0376 + el.train * 0.167 + el.tv * 0.2555 + el.phone * 0.191 + el.pc * 329 + el.pcu * 0.043 + el.tea * 0.178 + el.bread * 0.002 + el.milk * 1.362 + el.rice * 4.7 + el.nonveg * 0.016 + el.newcar * 12000 + el.house * 52330 + el.plastic * 5.525 + el.water * 0.08 + el.agro * 0.7972 + el.mining * 4550000000 + el.power * 9800000000 + el.cement * 1158333333 + el.iron * 4233333333 + el.chemical * 2083333333 + el.nonm * 7083333333}</td>


                              {/* <td>
                                {Math.pow((el.Agriculture_Waste * 3.5 + el.Water_consumption * 1 + el.Deforestation * 2000000 + el.A_new_coal_mine * 8400000000 + el.Wind_Turbin * 30 + el.Solar_Panel * 12500 + el.Steel_Consumption * 0.4 + el.lpg * 2.983 + el.elec * 0.85 + el.car * 0.381 + el.bus * 0.0376 + el.train * 0.167 + el.tv * 0.2555 + el.phone * 0.191 + el.pc * 329 + el.pcu * 0.043 + el.tea * 0.178 + el.bread * 0.002 + el.milk * 1.362 + el.rice * 4.7 + el.nonveg * 0.016 + el.newcar * 12000 + el.house * 52330 + el.plastic * 5.525 + el.water * 0.08 + el.agro * 0.7972 + el.mining * 4550000000 + el.power * 9800000000 + el.cement * 1158333333 + el.iron * 4233333333 + el.chemical * 2083333333 + el.nonm * 7083333333) - (dataList.slice(0, -1).reduce((acc, curr) => { return acc + curr.Agriculture_Waste * 3.5 + curr.Water_consumption + curr.Deforestation * 2000000 + curr.A_new_coal_mine * 8400000000 + curr.Wind_Turbin * 30000 + curr.Solar_Panel * 1250 + curr.Steel_Consumption * 400 + curr.lpg * 2.983 + curr.elec * 0.85 + curr.car * 381 + curr.bus * 0.0376 + curr.train * 0.167 + curr.tv * 0.2555 + curr.phone * 0.191 + curr.pc * 329 + curr.pcu * 0.043 + curr.tea * 0.178 + curr.bread * 1.018 + curr.milk * 1.362 + curr.rice * 4.7 + curr.nonveg * 0.80 + curr.newcar * 12000 + curr.house * 52330 + curr.plastic * 5.525 + curr.water * 0.08 + curr.agro * 6643333333 + curr.mining * 4550000000 + curr.power * 9800000000 + curr.cement * 1158333333 + curr.iron * 4233333333 + curr.chemical * 2083333333 + curr.nonm * 7083333333; }, 0) / (dataList.length - 1)), 2)}
                              </td> */}





                            </tr>


                          )
                        }))
                        : (
                          <p>No  data</p>
                        )

                    }


                    <tr>
                      <td>Average:</td>
                      <td>{calculateAverage("Agriculture_Waste") * 3.5}</td>
                      <td>{calculateAverage("Water_consumption") * 1}</td>
                      <td>{calculateAverage("Deforestation") * 2000000}</td>
                      <td>{calculateAverage("A_new_coal_mine") * 8400000000}</td>
                      <td>{calculateAverage("Wind_Turbin") * 30000}</td>
                      <td>{calculateAverage("Solar_Panel") * 1250}</td>
                      <td>{calculateAverage("Steel_Consumption") * 400}</td>
                      <td>{calculateAverage("lpg") * 2.983}</td>
                      <td>{calculateAverage("elec") * 0.85}</td>
                      <td>{calculateAverage("car") * 0.381}</td>
                      <td>{calculateAverage("bus") * 0.0376}</td>
                      <td>{calculateAverage("train") * 0.167}</td>
                      <td>{calculateAverage("tv") * 0.2555}</td>
                      <td>{calculateAverage("phone") * 0.191}</td>
                      <td>{calculateAverage("pc") * 329}</td>
                      <td>{calculateAverage("pcu") * 0.043}</td>
                      <td>{calculateAverage("tea") * 0.178}</td>
                      <td>{calculateAverage("bread") * 0.002}</td>
                      <td>{calculateAverage("milk") * 1.362}</td>
                      <td>{calculateAverage("rice") * 4.7}</td>
                      <td>{calculateAverage("nonveg") * 0.016}</td>
                      <td>{calculateAverage("newcar") * 12000}</td>
                      <td>{calculateAverage("house") * 52330}</td>
                      <td>{calculateAverage("plastic") * 5.525}</td>
                      <td>{calculateAverage("water") * 0.08}</td>
                      <td>{calculateAverage("agro") * 6643333333}</td>
                      <td>{calculateAverage("mining") * 4550000000}</td>
                      <td>{calculateAverage("power") * 9800000000}</td>
                      <td>{calculateAverage("cement") * 1158333333}</td>
                      <td>{calculateAverage("iron") * 4233333333}</td>
                      <td>{calculateAverage("chemical") * 2083333333}</td>
                      <td>{calculateAverage("nonm") * 7083333333}</td>
                      {/* Calculate and display averages for other columns here */}
                      <td>
                        {(
                          dataList.slice(0, -1).reduce((acc, curr) => {
                            return acc + curr.Agriculture_Waste * 3.5 + curr.Water_consumption + curr.Deforestation * 2000000 + curr.A_new_coal_mine * 8400000000 + curr.Wind_Turbin * 30000 + curr.Solar_Panel * 1250 + curr.Steel_Consumption * 400 + curr.lpg * 2.983 + curr.elec * 0.85 + curr.car * 0.381 + curr.bus * 0.0376 + curr.train * 0.167 + curr.tv * 0.2555 + curr.phone * 0.191 + curr.pc * 329 + curr.pcu * 0.043 + curr.tea * 0.178 + curr.bread * 1.018 + curr.milk * 1.362 + curr.rice * 4.7 + curr.nonveg * 0.80 + curr.newcar * 12000 + curr.house * 52330 + curr.plastic * 5.525 + curr.water * 0.08 + curr.agro * 6643333333 + curr.mining * 4550000000 + curr.power * 9800000000 + curr.cement * 1158333333 + curr.iron * 4233333333 + curr.chemical * 2083333333 + curr.nonm * 7083333333;
                          }, 0) / (dataList.length - 1)
                        ).toFixed(2)}</td>

                    </tr>
                  </tbody>


                </table>
              </div>

            )}
        </div>

        <div className="analysis-graph-container">
          <BarChart data={prepareChartData()} />
          <BarChart data={prepareChartData2()} />

          <div className='morestats'>
            <button onClick={toggleStats}>
              {showStats ? 'hide' : 'More statistics'}
            </button>
            {showStats && (<>
              <p>Variance :</p>
              <p>Standard Deviation :</p>
            </>
            )}

          </div>
        </div>



        <div className="analysis">
          <p>
            <h1>Analysis (on the basis of previous records)</h1>
            {(() => {
              if (dataList.length < 2) {
                return "Insufficient data for comparison";
              }

              const lastRecord = dataList[dataList.length - 1];
              const total =
                lastRecord.Agriculture_Waste * 3.5 +
                lastRecord.Water_consumption +
                lastRecord.Deforestation * 2000000 +
                lastRecord.Wind_Turbin * 30000 +
                lastRecord.Solar_Panel * 1250 +
                lastRecord.Steel_Consumption * 400 +
                lastRecord.lpg * 2.983 +
                lastRecord.elec * 0.85 +
                lastRecord.car * 381 +
                lastRecord.bus * 0.0376 +
                lastRecord.train * 0.167 +
                lastRecord.tv * 0.2555 +
                lastRecord.phone * 0.191 +
                lastRecord.pc * 329 +
                lastRecord.pcu * 0.043 +
                lastRecord.tea * 0.178 +
                lastRecord.bread * 0.002 +
                lastRecord.milk * 1.362 +
                lastRecord.rice * 4.7 +
                lastRecord.nonveg * 0.016 +
                lastRecord.newcar * 12000 +
                lastRecord.house * 52330 +
                lastRecord.plastic * 5.525 +
                lastRecord.water * 0.08 +
                lastRecord.A_new_coal_mine * 8400000000 +
                lastRecord.agro * 6643333333 +
                lastRecord.mining * 4550000000 +
                lastRecord.power * 9800000000 +
                lastRecord.cement * 1158333333 +
                lastRecord.iron * 4233333333 +
                lastRecord.chemical * 2083333333 +
                lastRecord.nonm * 7083333333;





              const average1 =
                (
                  dataList
                    .slice(0, -1)
                    .reduce((acc, curr) => {
                      return (
                        acc +
                        curr.Agriculture_Waste * 3.5 +
                        curr.Water_consumption +
                        curr.Deforestation * 2000000 +
                        curr.Wind_Turbin * 30000 +
                        curr.Solar_Panel * 1250 +
                        curr.Steel_Consumption * 400 +
                        curr.lpg * 2.983 +
                        curr.elec * 0.85 +
                        curr.car * 381 +
                        curr.bus * 0.0376 +
                        curr.train * 0.167 +
                        curr.tv * 0.2555 +
                        curr.phone * 0.191 +
                        curr.pc * 329 +
                        curr.pcu * 0.043 +
                        curr.tea * 0.178 +
                        curr.bread * 0.002 +
                        curr.milk * 1.362 +
                        curr.rice * 4.7 +
                        curr.nonveg * 0.016 +
                        curr.newcar * 12000 +
                        curr.house * 52330 +
                        curr.plastic * 5.525 +
                        curr.water * 0.08
                      );
                    }, 0) /
                  (dataList.length - 1)
                ).toFixed(2);


              const average2 =
                (
                  dataList
                    .slice(0, -1)
                    .reduce((acc, curr) => {
                      return (
                        acc +
                        curr.A_new_coal_mine * 8400000000 +
                        curr.agro * 6643333333 +
                        curr.mining * 4550000000 +
                        curr.power * 9800000000 +
                        curr.cement * 1158333333 +
                        curr.iron * 4233333333 +
                        curr.chemical * 2083333333 +
                        curr.nonm * 7083333333
                      );
                    }, 0) /
                  (dataList.length - 1)
                ).toFixed(2);

              if (average1 > total || average2 > total) {
                return "Your Carbon Footprint is less than all of the previous records so it is under control";
              }
              else {
                return "You need to reduce your carbon footprint to bring it under control";
              }

            })()}
          </p>






          <div className='Precautions'>
            <button onClick={toggleMeasures}>
              {showMeasures ? 'Hide Measures' : 'View How to reduce Carbon-Footprint'}
            </button>

            {showMeasures && (
              <div className='Analysis'>
                <h2>To Reduce Your Carbon Footprint Through </h2>



                <h3>1. Deforestation:</h3>
                <p>
                  <ul>
                    <li>Contribute to reforestation projects that restore degraded land by planting native trees.</li>
                    <li>Recycled paper reduces the demand for fresh wood pulp.</li>
                    <li>Combine tree planting with agriculture.</li>
                    <li>Agroforestry systems benefit both people and the environment.</li>
                    <li>engage young people and local communities in forest conservation efforts.</li>
                  </ul>
                </p>
                <h3>2. Coal mines:</h3>
                <p>
                  <ul>
                    <li>Decrease coal consumption itself.</li>
                    <li>This approach directly impacts methane emissions from coal seams.</li>
                    <li>Extract and vent methane from underground coal mines as a safety measure.</li>
                    <li>  Manage emissions at surface mines.</li>
                    <li> Address methane released during processing, storage, and transport.</li>
                    <li>Address emissions from abandoned coal mines.</li>
                    <li> Move toward a fully electric mobile equipment fleet in mines.</li>

                  </ul>
                </p>
                <h3>3. Wind turbine Installation:</h3>
                <p>
                  <ul>
                    <li>Develop and implement sustainable sealing devices that extend the lifespan of wind turbines.</li>
                    <li>Longer-lasting systems reduce waste over time.</li>
                    <li>After decommissioning, wind turbines require proper disposal.</li>
                    <li>Crushed concrete can be used in roadworks, and steel can be recycled into new steel.</li>
                  </ul>
                </p>

                <h3>4. LPG:</h3>
                <p>
                  <ul>
                    <li>Efficient burners and heaters consume less fuel and emit fewer greenhouse gases.</li>
                    <li>Ensure that your LPG appliances are well-maintained.</li>
                    <li> Regular servicing improves efficiency and reduces emissions.</li>
                    <li> Proper insulation keeps your home warm, reducing the need for excessive heating.</li>
                    <li>This indirectly lowers LPG consumption and emissions.</li>
                    <li>If possible, switch to renewable energy sources such as solar or wind.</li>
                  </ul>
                </p>
                <h3>5. Electricity:</h3>
                <p>
                  <ul>
                    <li>Turn off lights and unplug electronic devices when not in use.</li>
                    <li>LED bulbs are energy-efficient and last longer.</li>
                    <li>Run energy-intensive appliances during off-peak hours.</li>
                    <li>When purchasing new appliances, opt for energy-efficient models. </li>
                  </ul>
                </p>

                <h3>6. Transportation:</h3>
                <p>
                  <ul>
                    <li>Mass transit significantly reduces carbon emissions compared to personal cars.</li>
                    <li>If you own an electric vehicle (EV), consider powering it with electricity from renewable sources such as solar or wind.</li>
                    <li> Smooth driving can significantly improve fuel efficiency.</li>
                  </ul>
                </p>

                <h3>7. Electronics:</h3>
                <p>
                  <ul>
                    <li>Return electronic devices to the supplier for proper recycling of components like aluminum, cobalt, and tin.</li>
                    <li> When shopping for appliances, lighting, office equipment, or electronics, look for Energy Star products.</li>
                    <li> These are certified to be more energy-efficient.</li>
                  </ul>
                </p>



                <h3>8. New built house:</h3>
                <p>
                  <ul>
                    <li>Use smart systems and sensors to optimize heating, ventilation, and air conditioning (HVAC) performance.</li>
                    <li>Design with ample windows and skylights to reduce reliance on artificial lighting.</li>
                    <li>Consider double glazing and low-emissivity coatings to improve insulation and reduce heat loss. </li>
                  </ul>
                </p>
                <h3>9. Agro-based Industry:</h3>
                <p>
                  <ul>
                    <li>Efficient Farming Practices like Rotate crops to improve soil health, reduce pests, and enhance yields.</li>
                    <li>Plant cover crops during fallow periods to prevent soil erosion and sequester carbon.</li>
                    <li>Use technology to optimize inputs (water, fertilizers, pesticides) based on real-time data.</li>
                    <li>Raise livestock on natural pastures to reduce methane emissions.</li>
                    <li>Optimize feed composition to minimize emissions from enteric fermentation.</li>
                  </ul>
                </p>
                <h3>10. Mining Industry:</h3>
                <p>
                  <ul>
                    <li>Replace diesel-powered equipment with electric alternatives.</li>
                    <li>Use sensors and data analytics to optimize energy use.</li>
                    <li>Choose materials with low embodied carbon.</li>
                    <li> Use recycled materials in construction and equipment.</li>
                  </ul>
                </p>
                <h3>11. Power Industry:</h3>
                <p>
                  <ul>
                    <li>Replace fossil fuel-based power plants with cleaner alternatives.</li>
                    <li>Implement smart grids for better load management and reduced losses.</li>
                    <li>Capture CO₂ emissions from power plants and store them underground or utilize them for other purposes.</li>
                    <li>Decentralization reduces transmission losses and enhances grid resilience.</li>
                  </ul>
                </p>
                <h3>12. Cement Industry:</h3>
                <p>
                  <ul>
                    <li>Carbon Capture and Utilization and Storage (CCUS) to manage carbon emissions during clinker production.</li>
                    <li>Explore alternatives such as fly ash, metal slag, or calcined clay to replace clinker in cement production.</li>
                    <li>Control the setting and hardening process of concrete. </li>
                  </ul>
                </p>

                <h3>13. Iron & Steel Industry:</h3>
                <p>
                  <ul>
                    <li>Invest in low-carbon ironmaking technologies such as direct reduced iron (DRI) and smelting reduction processes, which use natural gas or hydrogen instead of coal as reducing agents.</li>
                    <li> Investigate alternative ironmaking processes such as electrolysis-based iron production and biomass-based ironmaking, which have the potential to significantly reduce carbon emissions compared to traditional blast furnace routes.</li>


                  </ul>
                </p>

                <h3>14. Chemical Industry:</h3>
                <p>
                  <ul>
                    <li>Embrace green chemistry principles to design safer, more sustainable chemical products and processes.</li>
                    <li>This includes minimizing the use of hazardous substances, designing products for end-of-life recyclability, and reducing the environmental impact of chemical reactions. </li>

                  </ul>
                </p>

                <h3>15. Non- metallic Industry:</h3>
                <p>
                  <ul>
                    <li>Support research and development efforts to develop and commercialize low-carbon technologies for non-metallic industries.</li>
                    <li>This includes investing in innovative technologies such as carbon capture, hydrogen production, and advanced materials.</li>
                    <li>Optimize material use and reduce waste generation by implementing strategies such as recycling, reusing materials, and designing products for longevity and recyclability.</li>

                  </ul>
                </p>


              </div>
            )}
          </div>


          <div className='formula-pg'>
            <Link to="../formula"><button>View Calculation</button></Link>

          </div>
          <div className='back-btn'>
            <Link to="../service"><button>Go Back</button></Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default Data;