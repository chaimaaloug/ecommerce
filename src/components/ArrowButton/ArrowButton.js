import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const ArrowButton = ({ direction, onClick }) => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '5%',
    transform: `translateY(-50%)${direction === 'left' ? '' : ' translateX(100%)'}`,
    zIndex: 1,
    width: '50%',
  };

  const arrowIconStyle = {
    fontSize: '60px',
    border: '1px solid black',
    backgroundColor: 'white',
    padding:'8px'
  };

  return (
    <div className={`custom-arrow ${direction}`} style={containerStyle} onClick={onClick}>
      {direction === 'right' ? <IoIosArrowRoundForward style={arrowIconStyle} /> : <IoIosArrowRoundBack style={arrowIconStyle} />}
    </div>
  );
};

export default ArrowButton;


