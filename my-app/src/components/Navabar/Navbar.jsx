import "./Navbar.css"
import logo from "../../images/ironhack-logo-xs.png"
import menu from "../../images/menu-top-xs.png"

export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={logo} alt="iornhack logo" className="image-left"/>
            <img src={menu} alt="menu" className="image-right" sizes=""/>
        </nav>
    )
}