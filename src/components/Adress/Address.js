import style from "./Address.module.scss"

const Address = () => {

    return (
        <div className={style.infoContainer}>
            <div className={style.addressContainer}>
                <p className={style.shopName}>BOUTIQUE DE PARIS</p>
                <p className={style.address}>5 rue des Filles du Calvaire</p>
                <p className={style.address}>75003 Paris - France</p>
            </div>
            <div className={style.copyright}>
                <p>2023 • Projet Mastère 2 • ECV Digital</p>
            </div>
        </div>
    );
}

export default Address;
