import { useState } from "react";
import Button from "../Button/Button";
import style from "./ProductCard.module.scss";
import { useNavigate } from 'react-router-dom';

export function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const imageSrc = `${product.images[0]}`;
  const img = require(`../../assets/images/${imageSrc}`);

  const onClickCard = () => {
    navigate(`/product/${product.slug}`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleQuickBuy = () => {
  };

  return (
    <div onClick={onClickCard} key={product.id} className={style.cardContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={img} alt={product.name} />
      <div className={style.productInfoContainer}>
        <h3>{product.name}</h3>
        <div className={style.priceContainer}>
          <p>{product.price} €</p>
          {product.hasDiscount &&
            <p className={style.discountedPrice}>{product.priceAfterDiscount} €</p>
          }
        </div>
      </div>
      {isHovered && (
        <div className={style.quickBuyButton} >
          <Button label="Achat Rapide" onClick={handleQuickBuy} />
        </div>
      )}
    </div>
  );
}

export default ProductCard;
