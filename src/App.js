import "./styles.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Data from "./routes/Data";
import Fomula from "./routes/Fomula"
import axios from "axios";
// import Navbar from "./components/Navbar";

export default function App() {



  const user = localStorage.getItem("token");
  return (<>
    <div className="App">
      <Routes>
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />

        {/* {user && <Route path="/" element={<Home/>}/>} */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/" element={<Navigate replace to ="/login"/>}/> */}
        <Route path="/data" element={<Data />} />
        <Route path="/formula" element={<Fomula />} />

      </Routes>

    </div>

    <div class="container">




    </div>



  </>
  );
}
