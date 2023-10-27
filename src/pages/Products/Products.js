import Address from "../../components/Adress/Address";
import Header from "../../components/Header/Header";
import Newsletter from "../../components/NewsLetter/Newsletter";
import Reinsurance from "../../components/Reinsurance/Reinsurance";
import Title from "../../components/Title/Title";
import style from "./Products.module.scss"
import ProductList from "../../components/ProductList/ProductList"

const Products = () => {
    return (
        <div>
            <Header />
            <div className={style.productsContainer}>
                <Title 
                    text="Carnets" 
                    className="outlinedTitle"
                />
                <ProductList 
                    selectedCategory="Carnets"
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

