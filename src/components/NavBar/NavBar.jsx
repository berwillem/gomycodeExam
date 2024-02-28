import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/logo.svg";
const NavBar = () => {
  return (
    <>
      <nav className="container">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul>
          <NavLink to="/" className="nav-element">
            <li>Home</li>
          </NavLink>
          <NavLink to="/students" className="nav-element">
            <li>Students</li>
          </NavLink>
          <NavLink to="/exercices" className="nav-element">
            <li>exercices</li>
          </NavLink>
          <NavLink to="/contact" className="nav-element">
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
