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
    navigate('/payment');
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const isFreeShippingAvailable = Array.isArray(selectedProducts) && selectedProducts.length > 0
    ? selectedProducts.some((product) => product.isAvailableForDelivery)
    : false;
    
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
                {selectedProducts.map((product) => (
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
                  <p></p>
                </div>
                <div className={style.priceContainer}>
                  <p>Livraison</p>
                  {isFreeShippingAvailable ? (
                    <div className={style.freeShippingTag}>
                      <p>Free shipping</p>
                    </div>
                  )
                  :
                  (
                    <>
                      <div className={style.priceContainer}>
                        <p>4,50 €</p>
                      </div>
                    </>
                  )
                }
                 
                </div>
                <div className={style.priceContainer}>
                  <p><strong>Total TTC</strong></p>
                  <p></p>
                </div>
                <div className={style.priceContainer}>
                  <p>Taxes incluses</p>
                  <p>7,12€</p>
                </div>
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
