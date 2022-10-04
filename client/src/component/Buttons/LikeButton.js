import Likes from '../svg/likes.svg';
import "./LikeButton.css"

const LikeButton = () => {
  return (
    <div className='elipse_like'>
      <img className='svg' src={Likes} alt='likes button' />
    </div>
  );
};

export default LikeButton;
