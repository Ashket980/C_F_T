import Main1 from "../components/Main1";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import { Helmet } from "react-helmet";
import Cards from "../components/Cards";
import CardsData from "../components/CardsData";
import Card1 from "../components/Card1";
import CardsData1 from "../components/CardsData1";

function About() {
  return (
    <>


      <Helmet>
        <title>About</title>
      </Helmet>


      <Navbar />


      <Main1
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1534791851225-749401df0199?q=80&w=1705&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Explore"

        btnClass="hide"
      />


      <AboutUs />

      <Card1 />

    </>
  );
}

export default About;
