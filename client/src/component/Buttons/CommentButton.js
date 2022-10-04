import "./CommentButton.css";
import Comment from "../svg/comment.svg"

const CommentButton = () => {
    return (

        <div className="elipse_comment">
                            <img className="svg" src={Comment} alt="repost button" />
                         </div>
        
    )
}

export default CommentButton;