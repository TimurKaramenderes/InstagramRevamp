import HomeIcon from "../svg/home_nav.svg"
import SearchIcon from "../svg/search_nav.svg"
import AddIcon from "../svg/add_nav.svg"
import LikeIcon from "../svg/like_nav.svg"
import ProfileIcon from "../svg/profile_nav.svg"
import "./Navbar.css"

const Navbar = () => {


return (
        <div className="navbar">
             <button className="button_navbar">
                <img className="svg_navbar" src={HomeIcon} alt="Home"/>
             </button>
             <button className="button_navbar">
                <img className="svg_navbar" src={SearchIcon} alt="Search" />
             </button>
             <button className="button_navbar">
                <img className="svg_navbar" src={AddIcon} alt="Add a post"/>
             </button>
             <button className="button_navbar">
                <img className="svg_navbar" src={LikeIcon} alt="Your liikes"/>
             </button>
             <button className="button_navbar">
                <img className="svg_navbar" src={ProfileIcon} alt="Go to Profile"/>
             </button>
        </div>
    )
}

export default Navbar;