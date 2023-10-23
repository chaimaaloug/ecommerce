import PromoBanner from "../PromoBanner/PromoBanner";
import style from "./Header.module.scss";
import logo from "../../assets/logo-papier-tigre.png";
import cart from "../../assets/icons/cart.svg"

const Header = () => {
  return (
    <div>
        <PromoBanner />
        <header className={style.header}>
            <div className={style.logo}>
                <img src={logo} alt="Papier Tigre" />
            </div>
            <nav className={style.navigation}>
                <ul>
                    <li>
                        <a href="#">Carnets</a>
                    </li>
                    <li>
                        <a href="#">Agendas & Calendriers</a>
                    </li>
                    <li>
                        <a href="#">Écriture & Papeterie</a>
                    </li>
                </ul>
                <div className={style.shoppingBag}>
                    <img src={cart} alt=""/>
                </div>
            </nav>
        </header>
    </div>
  );
};

export default Header;
