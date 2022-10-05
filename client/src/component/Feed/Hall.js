import Post from "./Post"
import Header from "../Header/Header.js"
import styles from "./Hall.module.css"
import styled from 'styled-components'





const Hall = () => {

    
    return (
        <div>
            <Header/>
            <Post background="" />
            <Post background="yellow"/>    
            <Post background="green"/>
        </div>
        
    )

}




export default Hall;