import './navbar.css'
import logo from '../../images/epmoc.svg'
function Navbar() {
    return (
        <div className='navbar'>
           <div className="navbarcontainer">
            <div className="navbar-logo">
                <img src={logo} alt="" />
                <span>EPMOC</span>
            </div>
            <div className="navbar-navigation">
                <ul className="navbar-items">
                    <li className="navbar-item navbar-item-active">Home</li>
                    <li className="navbar-item">Event</li>
                    <li className="navbar-item">Team</li>
                    <li className="navbar-item">About</li>
                    <li className="navbar-item">Calender</li>
                    <li className="navbar-item">Blog</li>
                    <li className="navbar-item">Contact Us</li>
                    <li className="navbar-item">Theme</li>
                </ul>
            </div>
           </div>
        </div>
    )
}

export default Navbar
