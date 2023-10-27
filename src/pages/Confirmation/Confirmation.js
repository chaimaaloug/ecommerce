import Address from "../../components/Adress/Address";
import Header from "../../components/Header/Header";
import Newsletter from "../../components/NewsLetter/Newsletter";
import style from "./Confirmation.module.scss";

const Confirmation = () => {
    return (
        <div>
           <Header />
           <div className={style.confirmationMessage}>
                <h1>🎉 Commande validée !</h1>
                <div>
                    <p>Un mail récapitulatif de la commande va vous être envoyé.</p>
                    <p>Notre équipe se mobilise pour l’envoyer un plus vite.</p>
                </div>
                <p>Numéro de commande : </p>
             
                <div>
            </div>
     
           </div>
            <Newsletter />
            <Address />
        </div>
    );
}

export default Confirmation;