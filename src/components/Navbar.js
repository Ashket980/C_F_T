import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";


class Navbar extends Component {
  // Set state

  state={clicked: false};
  // Make Handleclick Function
  handleClick=()=>{
    this.setState({clicked: !this.state.clicked})
  }
  render() {
    const handleLogout = () => {
      localStorage.removeItem("token");
      window.location.reload();
    };
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Carbon Footprint Tracker</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>


        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item,index)=>{
            return(
              <li key={index}>
                <Link className={item.cname} to={item.url}>
                <i class={item.icon}></i> {item.title}
                </Link>
              </li>
            );
          })}
          <button onClick={handleLogout}>Logout</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
