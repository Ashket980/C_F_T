
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './formula.css'

function Fomula(){
return(
<>
<div className="container">
    <h3>Primary sources</h3>
    <table className="table">
                <tbody>
                    <tr>
                        <th>Source</th>
                        <th>Formula</th>
                    </tr>
                    <tr>
                        <td>LPG</td>
                        <td>Input Value (in Kg) * 2.983</td>
                    </tr>
                    <tr>
                        <td>ELECTRICITY</td>
                        <td>Input Value (in Kwh) * 0.85</td>
                    </tr>
                    <tr>
                        <td>CAR</td>
                        <td>Input Value (in Km) * 0.381</td>
                    </tr>
                    <tr>
                        <td>BUS</td>
                        <td>Input Value (in Km) * 0.0376</td>
                    </tr>
                    <tr>
                        <td>TRAIN</td>
                        <td>Input Value (in Km) * 0.167</td>
                    </tr>
                </tbody>
            </table>

            <h3>Consumer Electronics</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Source</th>
                        <th>Formula</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>WATCHING TV</td>
                        <td>Input Value (in Hrs) * 0.2555</td>
                    </tr>
                    <tr>
                        <td>SMARTPHONE USAGE</td>
                        <td>Input Value (in Hrs) * 0.191</td>
                    </tr>
                    <tr>
                        <td>COMPUTER & LAPTOP</td>
                        <td>Input Value (in nos) * 329</td>
                    </tr>
                    <tr>
                        <td>PC USAGE DURATION</td>
                        <td>Input Value (in Hrs) * 0.043</td>
                    </tr>
                </tbody>
            </table>
            <h3>Food Habits</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Source</th>
                        <th>Formula</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>COFFEE/TEA</td>
                        <td>Input Value (in cups) * 0.178</td>
                    </tr>
                    <tr>
                        <td>LOAF OF BREAD</td>
                        <td>Input Value (in kg) * 0.002</td>
                    </tr>
                    <tr>
                        <td>MILK</td>
                        <td>Input Value (in l) * 1.362</td>
                    </tr>
                    <tr>
                        <td>RICE</td>
                        <td>Input Value (in kg) * 4.7</td>
                    </tr>
                    <tr>
                        <td>NON-VEG</td>
                        <td>Input Value (in kg) * 0.016</td>
                    </tr>
                </tbody>
            </table>

            <h3>Luxuries</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Source</th>
                        <th>Formula</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>NEW CAR</td>
                        <td>Input Value (in nos) * 12000</td>
                    </tr>
                    <tr>
                        <td>NEW BUILD HOUSE</td>
                        <td>Input Value (in nos) * 52330</td>
                    </tr>
                </tbody>
            </table>


            <h3>Others</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Source</th>
                        <th>Formula</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>PLASTIC</td>
                        <td>Input Value * 5.525</td>
                    </tr>
                    <tr>
                        <td>BOILING WATER</td>
                        <td>Input Value * 0.08</td>
                    </tr>
                </tbody>
            </table>

            <h3>Industry Type</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Source</th>
                        <th>Formula</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>AGRO BASED</td>
                        <td>Input Value * 0.7972</td>
                    </tr>
                    <tr>
                        <td>MINING</td>
                        <td>Input Value * 0.52</td>
                    </tr>
                    <tr>
                        <td>POWER</td>
                        <td>Input Value * 1.176</td>
                    </tr>
                    <tr>
                        <td>CEMENT</td>
                        <td>Input Value * 0.139</td>
                    </tr>
                    <tr>
                        <td>IRON & STEEL</td>
                        <td>Input Value * 0.508</td>
                    </tr>
                    <tr>
                        <td>CHEMICAL</td>
                        <td>Input Value * 0.25</td>
                    </tr>
                    <tr>
                        <td>NON-METALLIC</td>
                        <td>Input Value * 0.85</td>
                    </tr>
                </tbody>
            </table>
            
    
    
    <div className="button-container">
    <Link to="../data"><button>Go Back</button></Link>

  </div>
  </div>
  </>
)}
export default Fomula;