import CommentButton from "../Buttons/CommentButton"
import RepostButton from "../Buttons/RepostButton"
import SaveButton from "../Buttons/SaveButton"
import LikeButton from "../Buttons/LikeButton"
import ProfileButton from "../Buttons/ProfileButton"
import "./Post.css";

const Post = () => {
    return (
        <div className="container_post">
            <div className="post_photo">
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
            </div>
        </div>
    )
}


export default Post;