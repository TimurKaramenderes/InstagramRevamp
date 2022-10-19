import Logo from "./Logo/Logo.js";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";


const Profile = () => {

    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);

    const hall = () => {
        navigate("/hall");
    }
    const upload = () => {
        navigate("/uploadImg");
    }
    const logout = () => {
      removeCookie("token", {
        path: "/",
        sameSite: "none",
        secure: true,
        maxAge: 86400,
      });
    }


  return (
    <>  
        <Logo />
        <form>
        <button className="buttonLog" onClick={upload}>Upload image</button>
        <button className="buttonLog" onClick={hall}>Hall</button>
        <button className="buttonLog" onClick={logout}>Logout</button>
        </form>
    </>
  );
}

export default Profile;