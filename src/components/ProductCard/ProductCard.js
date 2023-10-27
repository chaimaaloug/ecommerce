import style from "./ProductCard.module.scss"

function ProductCard({ product }) {
  const imageSrc = `${product.images[0]}`;
  const img = require(`../../assets/images/${imageSrc}`);

  return (
    <div key={product.id} className={style.cardContainer}>
      <img src={img} alt={product.name} />
      <div className={style.productInfoContainer}>
        <h3>{product.name}</h3>
        <p>{product.price}€</p>
      </div>
    </div>
  );
}

export default ProductCard;
