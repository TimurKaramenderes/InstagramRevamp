import Save from '../svg/save.svg';
import "./SaveButton.css";

const SaveButton = () => {
  return (
    <div className='elipse_save'>
      <img className='svg' src={Save} alt='repost button' />
    </div>
  );
};

export default SaveButton;
