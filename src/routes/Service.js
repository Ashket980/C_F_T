import Main1 from "../components/Main1";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import Form from "../components/Form";
import "../components/AboutUsStyles.css";
import { useEffect, useState } from 'react';
import axios from "axios";
import "./service.css";
import GroupedBarChart from "../components/Bargraph";
axios.defaults.baseURL = "http://localhost:5000/"

function Service() {







  const [formData, setFormData] = useState({
    UserName: "",
    Agriculture_Waste: "",
    Water_consumption: "",
    Deforestation: "",
    A_new_coal_mine: "",
    Wind_Turbin: "",
    Solar_Panel: "",
    Steel_Consumption: "",
    lpg: "",
    elec: "",
    car: "",
    bus: "",
    train: "",
    tv: "",
    phone: "",
    pc: "",
    pcu: "",
    tea: "",
    bread: "",
    milk: "",
    rice: "",
    nonveg: "",
    newcar: "",
    house: "",
    plastic: "",
    water: "",
    agro: "",
    mining: "",
    power: "",
    cement: "",
    iron: "",
    chemical: "",
    nonm: "",
  })
  const [inputValues, setInputValues] = useState(new Array(32).fill(0));

  const [dataList, setDataList] = useState([]);







  const handleOnChange = (e) => {


    const { value, name } = e.target;
    const index = parseInt(name);
    const newInputValues = [...inputValues];
    newInputValues[index] = parseFloat(value);
    setInputValues(newInputValues);
    setFormData((preve) => {
      return {
        ...preve,
        [name]: value
      }

    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await axios.post("/create", formData)



  }

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
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setInputValues(["", "", "", "", ""]); // Reset input values when switching tabs
    // setTotal("");
  };


  return (
    <>

      <Helmet>
        <title>Service</title>
      </Helmet>


      <Navbar />
      <Main1
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Calculate"
        btnClass="hide"
      />


      <Form handleSubmit={handleSubmit}
        handleOnChange={handleOnChange} />


      {/* <div className="about-container">

        <h1>How to reduce your carbon footprint at home</h1>
        <p>Let's start with some steps to reduce your carbon emissions at home. Most of these are fairly quick and easy to implement, meaning you can start
          living a more eco-friendly life in no time at all: <br></br>
        </p>

        <h3> 1. Insulate your home </h3>
        <p>Heating your living space can be an expensive and energy-intensive process. By insulating places like your loft and walls,
          you can make sure your home retains heat during the winter and stays cool in summer. It means you’ll use less energy, reduci
          ng your carbon footprint and your household bills.</p>

        <h3>2. Switch to renewables </h3>
        <p>Energy providers around the world are now offering greener tariffs. By switching to a company that provides electricity
          from solar, wind, or hydroelectric energy, you can reduce your household emissions and save money on your energy bills. You
          could even install solar panels if they're readily available where you live. </p>
        <h3>3. Buy energy efficient </h3>
        <p>Electrical appliances are becoming more efficient by the year. What's more, many countries now show how efficient particular
          products are, meaning you can make an informed choice. </p>

        <h3>4. Use less water </h3>
        <p>It takes energy and resources to process and deliver water to our homes. What's more, it's also quite energy-intensive to heat
          it once it's there. So, by using less, you can help the environment and lower your carbon footprint. Try turning off the taps
          when brushing your teeth, having short showers rather than baths, and only boiling the water you need. </p>

        <h3>5. Change your diet</h3>
        <p>The food we eat can have a significant impact on the environment. For example, meat and dairy products require a lot of land,
          water and energy to produce. They also create a lot of methane, a greenhouse gas. By eating fewer animal products, especially red meat,
          (or even choosing a plant-based diet) and shopping for locally sourced food,you can make a big difference. Why not support your local farmers'
          market?</p>


      </div> */}

    </>
  );
}

export default Service;

