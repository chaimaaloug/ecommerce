import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import data from '../../data/products.json';
import style from "./ProductList.module.scss";

function ProductList({ selectedCategory }) {
  const categoryData = data.find(category => category.categoryName === selectedCategory);

  console.log('selectedCategory', selectedCategory)

  return (
    <div className={style.productList}>
      <div className={style.productCardContainer}>
        {categoryData.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;