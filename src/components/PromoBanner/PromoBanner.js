import style from "./PromoBanner.module.scss"

const PromoBanner = () => {
    return (
        <div className={style.PromoBannerContainer}>
            <p>🚚 Livraison offerte dès 50€ d’achat* !</p>
        </div>
    );
}

export default PromoBanner;