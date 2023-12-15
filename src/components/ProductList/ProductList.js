import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import data from '../../data/products.json';
import style from './ProductList.module.scss';
import { Button } from 'semantic-ui-react';

function ProductList({ selectedCategory }) {
  const categoryData = data.find((category) => category.categoryName === selectedCategory);
  const [wishlist, setWishlist] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState(5); // Initial number of displayed products

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

  const handleShowAllClick = () => {
    setDisplayedProducts(categoryData.products.length); // Show all products
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
      </div>
      {displayedProducts < categoryData.products.length && (
        <Button label="Tout Voir" className="viewAll" onClick={handleShowAllClick} />
      )}
    </div>
  );
}

export default ProductList;
