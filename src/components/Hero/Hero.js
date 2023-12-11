import style from "./Hero.module.scss";
import img from "../../assets/images/img-15.png";
import Button from "../Button/Button";
import { Navigate, useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate();

  const handleShopping = () => {
    navigate('/products');
};

  return (
    <div className={style.heroContainer}>
      <img src={img} alt=""/>
      <div className={style.blueContainer}>
        <h1 className={style.title}>Dessinez</h1>
        <p>L’activité créative & méditative qu’on conseille</p>
        <Button label="JE SHOPPE" className="whiteButton" onClick={handleShopping}/>
      </div>
    </div>
  );
};

export default Hero;
