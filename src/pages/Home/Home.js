import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Collections from "../../components/Collections/Collections";
import Address from "../../components/Adress/Address";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Newsletter from "../../components/NewsLetter/Newsletter";
import Reinsurance from "../../components/Reinsurance/Reinsurance";
import ProductList from "../../components/ProductList/ProductList";
import Title from "../../components/Title/Title";
import style from "./Home.module.scss"

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Collections />
            <section className={style.productsSection}>
                <Title
                    text="Nos Best Sellers" 
                    className="centeredTitle"
                />
                <ProductList 
                    selectedCategory="Best Sellers"
                />   
            </section>
            <section className={style.productsSection}>
                <Title
                    text="NOS PRODUITS MADE IN FRANCE" 
                    className="centeredTitle"
                />
                <ProductList 
                    selectedCategory="Made in France"
                />   
            </section>
            <ArticleCard />
            <Reinsurance />
            <Newsletter />
            <Address />
        </div>
    );
}

export default Home;