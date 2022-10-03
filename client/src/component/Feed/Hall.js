import "./Hall.css"
import Likes from "../svg/likes.svg"

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
                        </div>
                    </div>
                </div>
                
                <button className="container_buttons_bot">
                    <div className="button_container_left">
                        <div className="elipse_comment">
                            
                            </div>
                            <div className="elipse_rt">
                            </div>
                    </div>
                    <div className="button_container_right">
                        <div className="elipse_like">
                            <img className="svg_like" src={Likes} alt="likes button" />
                        </div>
                   </div>
                </button>
            </div>
        </div>
    )

}




export default Hall;