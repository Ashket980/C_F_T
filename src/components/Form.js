import {useState,useEffect} from 'react';
import "./Formstyles.css"
import styled from 'styled-components';


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

function Form(){


    const [first,setFirst]=useState(true);
    const [second,setSecond]=useState(true);
    const [third,setThird]=useState(true);
    const [fourth,setFourth]=useState(true);
    const [fifth,setFifth]=useState(true);
    const [sixth,setSixth]=useState(true);
    const [seventh,setSeventh]=useState(true);
    
    const [eighth,setEighth]=useState(true);
    const [but,setBut]=useState(true);
    const [x,setX]=useState(0);
    


    
    const handleChange = (data)=>{
        let newX = x;
        if(data=="first"&&first)
            {
            newX+=10
            }
            setFirst(!first)
        if(data=="second"&&second){
            newX+=12
            setSecond(!second)
        }
        if(data=="third"&&third){
            newX+=12
            setThird(!third)
        }
        if(data=="fourth"&&fourth){
            newX+=6
            setFourth(!fourth)
        }
        if(data=="fifth"&&fifth){
            newX+=160
            setFifth(!fifth)
        }
        if(data=="sixth"&&sixth){
            newX+=100
            setSixth(!sixth)
        }
        if(data=="seventh"&&seventh){
            newX+=30
            setSeventh(!seventh)
        }
        if(data=="eighth"&&eighth){
            newX+=15
            setEighth(!eighth)
        }
        setX(newX)
    }






    return(<>
        <div className='formbox'>
      <h3>SELECT FROM THE BELOW DAY-TO-DAY ACTIVITIES</h3>
      <form className="form" >
          <div class="close-btn"></div>
            <label>Electricity : <input type="checkbox" value={first}  onChange={()=>handleChange("first")}></input> </label>
  
            <label>Gas Bill :
            <input type="checkbox"  value={second} onChange={()=>handleChange("second")}></input> </label>

            <label>Monthly mileage on your vehicles : 
            <input type="checkbox"  value={third} onChange={()=>handleChange("third")}></input> </label>

            <label>Household : 
            <input type="checkbox"  value={fourth} onChange={()=>handleChange("fourth")}></input> </label>

            <label>Waste Production : 
            <input type="checkbox" value={fifth} onChange={()=>handleChange("fifth")} ></input> </label>

            <label>Water Consumption : 
            <input type="checkbox" value={eighth} onChange={()=>handleChange("eighth")} ></input> </label>

            <label>Agricultural Waste : 
            <input type="checkbox"  value={sixth} onChange={()=>handleChange("sixth")}></input> </label>

            <label>Construction Waste ( if any)  : 
            <input type="checkbox"  value={seventh} onChange={()=>handleChange("seventh")}></input> </label>

          </form>

    </div>

    <div>
            <ul>               
                <StyledX>
                Your Carbon Footprint Score : {x}
                </StyledX>
            </ul>
        </div>
    
    </>
    )

    
}

export default Form;