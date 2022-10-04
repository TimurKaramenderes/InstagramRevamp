import "./ProfileButton.css"

const ProfileButton = () => {
    return (
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
    )
}

export default ProfileButton;