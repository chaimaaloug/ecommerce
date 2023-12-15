import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Address from '../../components/Adress/Address';
import Header from '../../components/Header/Header';
import Newsletter from '../../components/NewsLetter/Newsletter';
import Reinsurance from '../../components/Reinsurance/Reinsurance';
import ProductCard from '../../components/ProductCard/ProductCard';
import Title from '../../components/Title/Title';
import style from './Wishlist.module.scss';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

  const onFavoriteToggle = (newIsFavorite, product) => {
    const updatedWishlist = [...wishlist];
    const existingProductIndex = updatedWishlist.findIndex((p) => p.id === product.id);
    if (newIsFavorite) {
      if (existingProductIndex === -1) {
        updatedWishlist.push(product);
      }
    } else {
      if (existingProductIndex !== -1) {
        updatedWishlist.splice(existingProductIndex, 1);
      }
    }
    setWishlist(updatedWishlist);
  };

  useEffect(() => {
    const wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(wishlistData);
  }, []);

  return (
    <div>
      <Header />
      <section className={style.wishlistContainer}>
        <Title text="Wishlist ♥️" className="outlinedTitle" />
        {wishlist.length === 0 ? (
          <div className={style.favoriteMessage}>
            <h1>🫣</h1>
            <p>
              <strong>Aucun produits favoris pour le moment.</strong>
            </p>
            <Link to="/products" className={style.productsLink}>
              Aller sur la page produits
            </Link>
          </div>
        ) : (
          <div className={style.favoriteProductsContainer}>
            {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} onFavoriteToggle={onFavoriteToggle} />
        ))}
          </div>
        )}
      </section>
      <Reinsurance />
      <Newsletter />
      <Address />
    </div>
  );
};

export default Wishlist;