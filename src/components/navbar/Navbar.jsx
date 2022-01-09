import "./navbar.css";
import logo from "../../images/epmoc.svg";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  return (
    <div className="navbar">
      <div className="navbarcontainer">
        <div className="navbar-logo">
          <img src={logo} alt="" />
          <span>EPMOC</span>
        </div>
        <div className="navbar-navigation">
          <ul className="navbar-items">
            <li
              className={`navbar-item ${
                location.pathname === "/" ? "navbar-item-active" : ""
              }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`navbar-item ${
                location.pathname === "/event" ? "navbar-item-active" : ""
              }`}
            >
              <Link to="/event">Event</Link>
            </li>
            <li
              className={`navbar-item ${
                location.pathname === "/team" ? "navbar-item-active" : ""
              }`}
            >
              <Link to="/team">Team</Link>
            </li>
            <li
              className={`navbar-item ${
                location.pathname === "/about" ? "navbar-item-active" : ""
              }`}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className={`navbar-item ${
                location.pathname === "/calendar" ? "navbar-item-active" : ""
              }`}
            >
              <Link to="/calendar">Calender</Link>
            </li>
            <li
              className={`navbar-item ${
                location.pathname === "/blog" ? "navbar-item-active" : ""
              }`}
            >
              <Link to="/blog">Blog</Link>
            </li>
            <li
              className={`navbar-item ${
                location.pathname === "/contact" ? "navbar-item-active" : ""
              }`}
            >
              <Link to="/contact">Contact Us</Link>
            </li>
            <li
              className="navbar-item"
            >
              Theme
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
