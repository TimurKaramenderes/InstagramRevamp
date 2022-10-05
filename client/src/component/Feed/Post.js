import CommentButton from "../Buttons/CommentButton"
import RepostButton from "../Buttons/RepostButton"
import SaveButton from "../Buttons/SaveButton"
import LikeButton from "../Buttons/LikeButton"
import ProfileButton from "../Buttons/ProfileButton"
import "./Post.css";
import {StyledPost, StyledPhotoContainer} from "./Post.styles.css.js"  

const Post = ({marginTop}) => {
    return (
        <StyledPost marginTop={marginTop} className="container_post">
            <StyledPhotoContainer>
                <div className="container_buttons_top">
                        <ProfileButton />
                    <div className="button_container_save">
                        <SaveButton />
                    </div>
                </div>
                
                <button className="container_buttons_bot">
                    <div className="button_container_left">
                        <CommentButton />
                        <RepostButton />
                    </div>
                    <div className="button_container_right">
                        <LikeButton />
                   </div>
                </button>
            </StyledPhotoContainer>
        </StyledPost>
    )
}


export default Post;