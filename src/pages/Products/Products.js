import Address from "../../components/Adress/Address";
import Header from "../../components/Header/Header";
import Newsletter from "../../components/NewsLetter/Newsletter";
import Reinsurance from "../../components/Reinsurance/Reinsurance";
import Title from "../../components/Title/Title";
import style from "./Products.module.scss"
import ProductList from "../../components/ProductList/ProductList"
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const Products = () => {

  const [totalProducts, setTotalProducts] = useState(0);

  const updateTotalProducts = (count) => {
    setTotalProducts(count);
  };

  return (
    <div>
        <Header />
        <div className={style.productsContainer}>
        <div className={style.filAriane}>
          <Link to="/">Accueil</Link> 
          <MdKeyboardArrowRight />
          <Link to="/products">Produits</Link> 
          <MdKeyboardArrowRight />
          <p>Carnet ({totalProducts} articles)</p>
        </div>
        <Title 
          text="Carnet"
          className="outlinedTitle"
        />
        <ProductList 
          selectedCategory="Carnets"
          updateTotalProducts={updateTotalProducts} 
        />
        </div>
      <section className={style.infoContainer}>
        <p className={style.specialText}>
          Les plus beaux carnets du monde imaginés pour vous, fabriqués par nous. En format A4, A5 ou A6, ils sont parfaits pour se glisser dans un sac ou crâner posés sur votre bureau.Cerise sur le gâteau : Vous pouvez créer votre carnet sur-mesure. Choisissez votre couverture, la reliure, vos pages (lignées, pointillées, vierges, scolaires, quadrillées). Pour une créativité sans limite - à vous de jouer !
        </p>
      </section>
      <Reinsurance />
      <Newsletter />
      <Address />
    </div>
  );
}

export default Products;

