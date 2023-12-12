import { Link } from "react-router-dom";
import logo from '../../assets/logo-papier-tigre.png';
import style from './Payment.module.scss';
import { IoMdLock } from "react-icons/io";
import Button from "../../components/Button/Button";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Payment = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleCheckout = () => {
        navigate('/confirmation', { state: { selectedProducts } });
    };
    
    const handleContinueShopping = () => {
        navigate('/products');
    };

    const selectedProducts = location.state && location.state.selectedProducts;
    const subtotal = selectedProducts
      ? selectedProducts.reduce((acc, product) => acc + product.price * product.quantity, 0)
      : 0;
  
    const deliveryCost = 4.5;
    const totalTTC = subtotal + deliveryCost + 7.12;

    return (
        <>
            <header>
                <div className={style.header}>
                    <div className={style.logo}>
                        <Link to="/"><img src={logo} alt="Papier Tigre" /></Link>
                    </div>
                    <div className={style.securePayment}>
                        <IoMdLock className={style.lockIcon} />
                        <p>Secure Payment</p>
                    </div>
                </div>
            </header>

            <div className={style.paymentFlex}>
                <div className={style.paymentForm}>
                    <div>
                        <h3>1. Informations personnelles</h3>
                        <input type="text" placeholder="Prénom*" />
                        <input type="text" placeholder="Nom*"  />
                        <input type="text" placeholder="Adresse-mail*"  />
                    </div>
                    <div>
                        <h3>2. Adresse de livraison </h3>
                        <input type="text" placeholder="Numéro de rue et rue*" />
                        <input type="text" placeholder="Code postal*"  />
                        <input type="text" placeholder="Ville*"  />
                    </div>
                    <div>
                        <h3>3. Paiement</h3>
                        <input type="text" placeholder="Nom sur la carte*" />
                        <input type="text" placeholder="Numéro de carte*"  />
                        <input type="text" placeholder="Date de validité*"  />
                        <input type="text" placeholder="CVV*"  />
                    </div>

                    <div className={style.buttonsColumnContainer}>
                        <Button label="Commander →" className="blackButtonColumn" onClick={handleCheckout} />
                        <Button label="Poursuivre mes achats" className="orderButtonColumn" onClick={handleContinueShopping} />
                    </div>
                </div>

                <div className={style.ordeRecap}>
                    <div className={style.orderDetails}>
                        {selectedProducts.map((product) => (
                            <div key={product.id} >
                                <div className={style.productDetails}>
                                    <div className={style.productDetailsFlex}>
                                        <img src={require(`../../assets/images/${product.imageSrc}`)} alt={product.name} />
                                        <p className={style.name}>{product.name}</p>
                                    </div>
                                    <p className={style.price}>{product.price.toFixed(2)} €</p>
                                </div>
                            </div>
                        ))}
                        <div className={style.details}>
                            <p>SOUS-TOTAL</p>
                            <p><strong>{subtotal.toFixed(2)} €</strong></p>
                        </div>
                        <div className={style.details}>
                            <p>LIVRAISON</p>
                            <p>{deliveryCost} €</p>
                        </div>
                        <div className={style.details}>
                            <p><strong>TOTAL TTC</strong></p>
                            <p><strong>{totalTTC.toFixed(2)} €</strong></p>
                        </div>
                        <div className={style.details}>
                            <p>TAXES INCLUSES</p>
                            <p>7,12 €</p>
                        </div>
                       
                    </div>
                    <div className={style.buttonsContainer}>
                        <Button label="Commander →" className="blackButton" onClick={handleCheckout} />
                        <Button label="Poursuivre mes achats" className="orderButton" onClick={handleContinueShopping} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Payment;