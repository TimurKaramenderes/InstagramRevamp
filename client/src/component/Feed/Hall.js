import "./Hall.css"
import Likes from "../svg/likes.svg"
import Comment from "../svg/comment.svg"
import Repost from "../svg/repost.svg"
import Save from "../svg/save.svg"

const Hall = () => {
    
    return (
        <div>
            <div className="post_photo">
                <div className="container_buttons_top">
                    <button className="button_container_profile">
                    <div className="profile_infos_image">
                        {//here is the circle 
                        }
                        </div>
                        <div className="profile_infos_txt">
                                 <p className="Bold_profile_infos">User Profile</p>
                                 <p className="Book_location_infos">Location Brussels</p>
                         </div>
                    </button>
                    <div className="button_container_save">
                        <div className="elipse_save">
                        <img className="svg" src={Save} alt="repost button" />
                        </div>
                    </div>
                </div>
                
                <button className="container_buttons_bot">
                    <div className="button_container_left">
                        <div className="elipse_comment">
                        <img className="svg" src={Comment} alt="repost button" />
                        </div>
                        <div className="elipse_rt">
                            <img className="svg" src={Repost} alt="repost button" />
                        </div>
                    </div>
                    <div className="button_container_right">
                        <div className="elipse_like">
                            <img className="svg" src={Likes} alt="likes button" />
                        </div>
                   </div>
                </button>
            </div>
        </div>
    )

}




export default Hall;