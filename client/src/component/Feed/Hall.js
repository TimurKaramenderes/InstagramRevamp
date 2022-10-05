import Post from "./Post"
import Header from "../Header/Header.js"
import styles from "./Hall.module.css"
import styled from 'styled-components'
import Navbar from "../Navbar/Navbar.js"





const Hall = () => {

    
    return (
        <div>
            <Header/>
            <Post marginTop="" />
            <Post marginTop="null"/>    
            <Post marginTop="null"/>
            <Navbar/>  
        </div>
    )

}




export default Hall;