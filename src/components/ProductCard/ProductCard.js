import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoHeart } from 'react-icons/io5';
import { GoHeart } from 'react-icons/go';
import Button from '../Button/Button';
import style from './ProductCard.module.scss';

const ProductCard = ({ product, onFavoriteToggle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const navigate = useNavigate();

  const imageSrc = `${product.images[0]}`;
  const img = require(`../../assets/images/${imageSrc}`);

   useEffect(() => {
    const wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];
    const isInWishlist = wishlistData.some((p) => p.id === product.id);
    setIsFavorite(isInWishlist);
  }, [product.id]);

  const onClickCard = () => {
    navigate(`/product/${product.slug}`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleQuickBuy = (event) => {
    event.stopPropagation();
  };

  const handleFavoriteClick = (event) => {
    event.stopPropagation();
    const wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];
    const updatedWishlist = isFavorite
      ? wishlistData.filter((p) => p.id !== product.id)
      : [...wishlistData, product];
      
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

    setIsFavorite(!isFavorite);
  };

  return (
    <div
      onClick={onClickCard}
      key={product.id}
      className={style.cardContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={img} alt={product.name} />
      <div>
        {product.isPack && (
          <div className={style.packFlex}>
            <p className={style.pack}>{product.packPrice} €</p>
            <p className={style.pack}>PACK</p>
          </div>
        )}
      </div>
      <div className={style.productInfoContainer}>
        <h3>{product.name}</h3>
        <div className={style.priceContainer}>
          <p>{product.price} €</p>
          {product.hasDiscount && (
            <p className={style.discountedPrice}>{product.priceAfterDiscount} €</p>
          )}
        </div>
      </div>
      {isHovered && (
        <div className={style.quickBuyButton}>
          <Button label="Achat Rapide" onClick={handleQuickBuy} />
        </div>
      )}
      <div className={style.favoriteButton} onClick={handleFavoriteClick}>
        {isFavorite ? <IoHeart className={style.icon} /> : <GoHeart className={style.icon} />}
      </div>
    </div>
  );
};

export default ProductCard;
