import { useLocation } from "react-router-dom";
import Address from "../../components/Adress/Address";
import Header from "../../components/Header/Header";
import Newsletter from "../../components/NewsLetter/Newsletter";
import style from "./Confirmation.module.scss";
import { useEffect, useState } from "react";

const Confirmation = () => {
    const location = useLocation();
    const selectedProducts = location.state && location.state.selectedProducts;
    const [orderNumber, setOrderNumber] = useState('');

    useEffect(() => {
        const generateOrderNumber = () => {
          const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
          let result = '';
          for (let i = 0; i < 8; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
          }
          return result;
        };
        setOrderNumber(generateOrderNumber());
    }, []);

    const subtotal = selectedProducts
    ? selectedProducts.reduce((acc, product) => acc + product.price * product.quantity, 0)
    : 0;

    const deliveryCost = 4.5;
    const totalTTC = subtotal + deliveryCost + 7.12;

    return (
        <div>
            <Header />
            <div className={style.confirmationMessage}>
                <h1>🎉 Commande validée !</h1>
                <div>
                    <p>Un mail récapitulatif de la commande va vous être envoyé.</p>
                    <p>Notre équipe se mobilise pour l’envoyer un plus vite.</p>
                </div>
                <p>Numéro de commande : <strong>{orderNumber}</strong></p>
             
                <div className={style.confirmationOrder}>
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
            </div>
            <Newsletter />
            <Address />
        </div>
    );
}

export default Confirmation;