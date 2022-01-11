import "./navbar.css";
import logo from "../../images/epmoc.svg";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const location = useLocation();
  const [theme,setTheme]=useState(localStorage.getItem('theme')==='dark'?false:true);
  const [hide, setHide] = useState(window.innerWidth < 900 ? true : false);
  const [sidebar,setSidebar]=useState(true);
  const changeTheme=()=>{
    setTheme(!theme);
    if(theme){
      localStorage.setItem('theme',"dark");
      document.body.className="dark";
    }else{
      document.body.className="light";
      localStorage.setItem('theme',"light");
    }
  }
  if(localStorage.getItem('theme')){
    document.body.className=localStorage.getItem('theme');
  }
  
  return (
    <div className="navbar">
      <div className="navbarcontainer">
        <div className="navbar-logo">
          
         {hide && (sidebar?( <i onClick={()=>{setSidebar(!sidebar)}} className="fas fa-bars"></i>):(<i className="fa fa-times" onClick={()=>{setSidebar(!sidebar)}} aria-hidden="true"></i>))}
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
              onClick={changeTheme}
              className="navbar-item"
            >{theme?(<i className="fas fa-moon"></i>):(<i className="fas fa-sun"></i>)}
              
            </li>
          </ul>
        </div>
      </div>
      {hide&&
      (
        <div   className={sidebar?"sidebar sidebar-close":"sidebar"}>
          <div className="sidebar-container">
          <ul className="sidebar-items">
              <li onClick={()=>{setSidebar(!sidebar)}} className=
                {`sidebar-item ${
                  location.pathname === "/" ? "sidebar-item-active" : ""
                }`}>
              <Link className="sidebar-link" to="/"> <i aria-hidden="true" className={`v-icon notranslate mdi mdi-home ${theme?"theme--light":"theme--dark"}`}></i><span>Home</span></Link>
              </li>
              <li onClick={()=>{setSidebar(!sidebar)}} className=
                {`sidebar-item ${
                  location.pathname === "/event" ? "sidebar-item-active" : ""
                }`}>
              <Link className="sidebar-link" to="/event"><i aria-hidden="true" className={`v-icon notranslate mdi mdi-assistant ${theme?"theme--light":"theme--dark"}`}></i><span>Event</span></Link>
                </li>
                <li onClick={()=>{setSidebar(!sidebar)}} className=
                {`sidebar-item ${
                  location.pathname === "/team" ? "sidebar-item-active" : ""
                }`}>
                <Link className="sidebar-link" to="/team"><i aria-hidden="true" className={`v-icon notranslate mdi mdi-account-settings ${theme?"theme--light":"theme--dark"}`}></i><span>Team</span></Link>
                </li>
                <li onClick={()=>{setSidebar(!sidebar)}} className=
                {`sidebar-item ${
                  location.pathname === "/about" ? "sidebar-item-active" : ""
                }`}>
                <Link className="sidebar-link" to="/about"><i aria-hidden="true" className={`v-icon notranslate mdi mdi-comment-alert ${theme?"theme--light":"theme--dark"}`}></i><span>About</span></Link>
                </li>
                <li onClick={()=>{setSidebar(!sidebar)}} className=
                {`sidebar-item ${
                  location.pathname === "/calender" ? "sidebar-item-active" : ""
                }`}>
                <Link className="sidebar-link" to="/calender"><i className={`v-icon notranslate far fa-calendar-alt ${theme?"theme--light":"theme--dark"}`}></i><span>Calender</span></Link>
                </li>
                <li onClick={()=>{setSidebar(!sidebar)}} className=
                {`sidebar-item ${
                  location.pathname === "/blog" ? "sidebar-item-active" : ""
                }`}>
                <Link className="sidebar-link" to="/blog"><i className={`v-icon notranslate fab fa-blogger ${theme?"theme--light":"theme--dark"}`}></i><span>Blog</span></Link>
                </li>
                <li onClick={()=>{setSidebar(!sidebar)}} className=
                {`sidebar-item ${
                  location.pathname === "/contact" ? "sidebar-item-active" : ""
                }`}
                
                >
                <Link className="sidebar-link" to="/contact"><i aria-hidden="true" className={`v-icon notranslate mdi mdi-contacts ${theme?"theme--light":"theme--dark"}`}></i><span>Contact</span></Link>
                </li>

          </ul>
          </div>
          <div onClick={()=>{setSidebar(!sidebar)}} className="sidebar-back">

          </div>
        </div>
      )}
      {hide &&(
        <div className="nav-fotter">
          <ul className="navFotter-items">
            <li className=  "navFotter-item ">
            <Link className={`navFotter-link ${
                  location.pathname === "/" ? "navFotter-link-active" : ""
                }  `} to="/"> <i aria-hidden="true" className={`v-icon notranslate mdi mdi-home ${theme?"theme--light":"theme--dark"}`}></i><span>Home</span></Link>
            </li>
            <li className=  "navFotter-item ">
            <Link className={`navFotter-link ${
                  location.pathname === "/event" ? "navFotter-link-active" : ""
                }  `} to="/event"> <i aria-hidden="true" className={`v-icon notranslate mdi mdi-assistant ${theme?"theme--light":"theme--dark"}`}></i><span>Event</span></Link>
            </li>
            <li className=  "navFotter-item ">
            <Link className={`navFotter-link ${
                  location.pathname === "/team" ? "navFotter-link-active" : ""
                }  `} to="/team"> <i aria-hidden="true" className={`v-icon notranslate mdi mdi-account-settings ${theme?"theme--light":"theme--dark"}`}></i><span>Team</span></Link>
            </li>
            <li className=  "navFotter-item ">
            <Link className={`navFotter-link ${
                  location.pathname === "/about" ? "navFotter-link-active" : ""
                }  `} to="/about"><i aria-hidden="true" className={`v-icon notranslate mdi mdi-comment-alert ${theme?"theme--light":"theme--dark"}`}></i><span>About</span></Link>
            </li>
            <li className=  "navFotter-item ">
            <Link className={`navFotter-link ${
                  location.pathname === "/contact" ? "navFotter-link-active" : ""
                }  `} to="/contact"> <i aria-hidden="true" className={`v-icon notranslate mdi mdi-contacts ${theme?"theme--light":"theme--dark"}`}></i><span>Contact</span></Link>
            </li>
          </ul>
        </div>
      )}
     
    </div>
  );
}

export default Navbar;
