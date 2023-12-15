import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import data from '../../data/products.json';
import style from './ProductList.module.scss';

function ProductList({ selectedCategory }) {
  const categoryData = data.find((category) => category.categoryName === selectedCategory);
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

  return (
    <div className={style.productList}>
      <div className={style.productCardContainer}>
        {categoryData.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onFavoriteToggle={onFavoriteToggle}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
