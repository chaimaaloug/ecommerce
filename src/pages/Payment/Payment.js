import { Link } from "react-router-dom";
import logo from '../../assets/logo-papier-tigre.png';
import style from './Payment.module.scss';
import { IoMdLock } from "react-icons/io";
import Button from "../../components/Button/Button";
import { useNavigate } from 'react-router-dom';

const Payment = () => {

    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/confirmation');
    };
    
    const handleContinueShopping = () => {
        navigate('/products');
    };

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
                        <div className={style.details}>
                            <p>SOUS-TOTAL</p>
                            <p><strong></strong></p>
                        </div>
                        <div className={style.details}>
                            <p>LIVRAISON</p>
                        </div>
                        <div className={style.details}>
                            <p><strong>TOTAL TTC</strong></p>
                            <p><strong></strong></p>
                        </div>
                        <div className={style.details}>
                            <p>TAXES INCLUSES</p>
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