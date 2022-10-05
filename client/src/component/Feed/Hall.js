import Post from "./Post"
import Header from "../Header/Header.js"
import styles from "./Hall.module.css"
import styled from 'styled-components'





const Hall = () => {

    const PostCompo = ({className, children}) =>(
    <div className={className}>
        {children}
    </div>
);

const StyledPost = styled(PostCompo)`
    margin-top: 95px;
    background: red;
`;
    
    return (
        <div>
            <Header/>
            <StyledPost />
            <Post />
            <Post />    
            <Post />
        </div>
        
    )

}




export default Hall;