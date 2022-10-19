import LogoIcon from "../svg/logo.svg"
import "./Logo.css"

const Logo = () =>{
    return (
        <div className="container_logo">
            <img src={LogoIcon} alt="logo framery"/>
        </div>
    );
}

export default Logo;