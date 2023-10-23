import Address from "../../components/Footer/Address";
import Header from "../../components/Header/Header";
import Newsletter from "../../components/NewsLetter/Newsletter";
import Reinsurance from "../../components/Reinsurance/Reinsurance";

const Product = () => {
    return (
        <>
            <Header />
            <Reinsurance />
            <Newsletter />
            <Address />
        </>
    );
}

export default Product;