import React from 'react';
import Button from '../Button/Button';
import style from './ShoppingCartModal.module.scss';
import { IoClose } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const ShoppingCartModal = ({ isOpen, onClose, selectedProducts, onDeleteProduct }) => {

  const navigate = useNavigate();

  const handleCloseModal = () => {
    onClose();
  };

  const handleDeleteProduct = (product) => {
    onDeleteProduct(product.id);
  };

  const handleCheckout = () => {
    navigate('/payment', { state: { selectedProducts } });
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const freeShippingThreshold = 50;
  const deliveryCost = 4.5;
  
  const subtotal = selectedProducts
  ? selectedProducts.reduce((acc, product) => acc + product.price * product.quantity, 0)
  : 0;

  const remainingForFreeShipping = freeShippingThreshold - subtotal;
  const totalTTC = subtotal + deliveryCost + 7.12;

  return (
    <>
      {isOpen && (
        <div className={style.modalContainer}>
          <div className={style.modalContent} onClick={handleCloseModal}>
            <div>
              <div className={style.headerContainer}>
                <h2>Panier</h2>
                <div className={style.closeIcon} onClick={handleCloseModal}>
                  <IoClose />
                </div>
              </div>
              <ul>
                {selectedProducts && selectedProducts.map((product) => (
                  <div key={product.id} className={style.productImg}>
                    <div className={style.selectedProducts}>
                      <div className={style.flexProducts}>
                        <img src={require(`../../assets/images/${product.imageSrc}`)} alt={product.name} />
                        <div>
                          <p className={style.productName}>{product.name}</p>
                          <p className={style.productPrice}>{product.price}</p>
                        </div>
                      </div>
                      <MdDelete className={style.deleteIcon} onClick={() => handleDeleteProduct(product)} />
                    </div>
                  </div>
                ))}
              </ul>
            </div>

            <div>
              <div>
                <div className={style.priceContainer}>
                  <p>Sous-total</p>
                  <p><strong>{subtotal} €</strong></p>
                </div>
                <div className={style.priceContainer}>
                  <p>Livraison</p>
                  {remainingForFreeShipping > 0 ? (
                    <div className={style.priceContainer}>
                      <p>{deliveryCost.toFixed(2)} €</p>
                    </div>
                  ) : (
                    <div className={style.freeShippingTag}>
                      <p>Free shipping</p>
                    </div>
                  )}
                </div>
                <div className={style.priceContainer}>
                  <p><strong>Total TTC</strong></p>
                  <p><strong>{totalTTC.toFixed(2)} €</strong></p>
                </div>
                <div className={style.priceContainer}>
                  <p className={style.taxPrice}>Taxes incluses</p>
                  <p className={style.taxPrice}>7,12 €</p>
                </div>
              </div>

              <div>
                {remainingForFreeShipping > 0 && (
                  <div>
                    <p className={style.shippingInfo}>Plus que {remainingForFreeShipping.toFixed(2)} € pour profiter de la livraison offerte</p>
                    <div className={style.progressBar}>
                      <div
                        className={style.progressBarFill}
                        style={{ width: `${(subtotal / freeShippingThreshold) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className={style.buttonsContainer}>
                <Button label="Commander →" className="blackButton" onClick={handleCheckout} />
                <Button label="Poursuivre mes achats" className="orderButton" onClick={handleContinueShopping} />
              </div>
              </div>
            </div>
          </div>
   
      )}
    </>
  );
};

export default ShoppingCartModal;
