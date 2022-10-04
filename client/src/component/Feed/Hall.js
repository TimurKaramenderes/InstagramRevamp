import Post from "./Post"
import Header from "../Header/Header.js"
import styles from "./Hall.module.css"





const Hall = () => {
    
    return (
        <div>
            <Header/>
            <Post className={styles.container} />
            <Post />
            <Post />
        </div>
        
    )

}




export default Hall;