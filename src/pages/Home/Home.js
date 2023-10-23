import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Address from "../../components/Footer/Address";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Newsletter from "../../components/NewsLetter/Newsletter";
import Reinsurance from "../../components/Reinsurance/Reinsurance";

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <ArticleCard />
            <Reinsurance />
            <Newsletter />
            <Address />
        </div>
    );
}

export default Home;