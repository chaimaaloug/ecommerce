import Address from "../../components/Adress/Address";
import Header from "../../components/Header/Header";
import Newsletter from "../../components/NewsLetter/Newsletter";
import Reinsurance from "../../components/Reinsurance/Reinsurance";
import Title from "../../components/Title/Title";

const Product = () => {
    return (
        <>
            <Header />
            <Title 
                text="ET AVEC CECI ?" 
                className="outlinedTitle"
            />
            <Reinsurance />
            <Newsletter />
            <Address />
        </>
    );
}

export default Product;