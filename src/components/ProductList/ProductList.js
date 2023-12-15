import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import data from '../../data/products.json';
import style from './ProductList.module.scss';
import Button from '../Button/Button';

function ProductList({ selectedCategory, updateTotalProducts }) {
  const categoryData = data.find((category) => category.categoryName === selectedCategory);
  const [wishlist, setWishlist] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState(5);

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
    updateTotalProducts(categoryData.products.length);
  }, [categoryData.products.length, updateTotalProducts]);

  const handleShowAllClick = () => {
    setDisplayedProducts(categoryData.products.length);
  };

  return (
    <div className={style.productList}>
      <div className={style.productCardContainer}>
        {categoryData.products.slice(0, displayedProducts).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onFavoriteToggle={onFavoriteToggle}
          />
        ))}
        {displayedProducts < categoryData.products.length && (
        <div className={style.centerButton}>
          <div className={style.buttonWrapper}>
            <Button label="Tout Voir" className="viewAllButton" onClick={handleShowAllClick} />
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default ProductList;
