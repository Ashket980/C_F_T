import Main2 from "../components/Main2";
import Footer from "../components/Footer";
import Main1 from "../components/Main1";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import {Helmet} from "react-helmet";

function Home() {
  return (
    
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Navbar/>
    <Main1
    cName="hero"
    heroImg="https://images.unsplash.com/photo-1542923910-f391dea9f674?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="Carbon Footprint"
    text="An Initiative towards environmental sustainability!"
    // buttonText="Explore"
    // url="/"
    // btnClass="show"
    />
    <Main2/>
    <Cards/>
    <Footer/>
    </>
  );
}

export default Home;
