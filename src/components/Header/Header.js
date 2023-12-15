import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PromoBanner from '../PromoBanner/PromoBanner';
import ShoppingCartModal from '../ShoppingCartModal/ShoppingCartModal';
import style from './Header.module.scss';
import logo from '../../assets/logo-papier-tigre.png';
import cart from '../../assets/icons/cart.svg';

const Header = ({ cartQuantity, selectedProducts, onDeleteProduct }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <PromoBanner />
      <header className={style.header}>
        <div className={style.logo}>
          <Link to="/"><img src={logo} alt="Papier Tigre" /></Link>
        </div>
        <nav className={style.navigation}>
          <ul>
            <li>
              <Link to="/products">Carnets</Link>
            </li>
            <li>
              <Link to="/products">Agendas & Calendriers</Link>
            </li>
            <li>
              <Link to="/products">Écriture & Papeterie</Link>
            </li>
            <li>
              <Link to="/wishlist" className={style.wishlist}>Wishlist ♥️</Link>   
            </li>
          </ul>
          <div className={style.shoppingBag} onClick={openModal}>
            <img src={cart} alt="" />
            {cartQuantity > 0 && <span className={style.cartQuantity}>{cartQuantity}</span>}
          </div>
        </nav>
      </header>
      <ShoppingCartModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        selectedProducts={selectedProducts} 
        onDeleteProduct={onDeleteProduct} 
      />
    </div>
  );
};

export default Header;
