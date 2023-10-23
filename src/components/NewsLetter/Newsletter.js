import Button from "../Button/Button";
import style from "./Newsletter.module.scss";

const Newsletter = () => {
  return (
    <div className={style.newsletterContainer}>
      <h2>Keep in touch</h2>
      <div className={style.columnContainer}>
        <div className={style.form}>
          <input type="email" placeholder="Votre adresse e-mail" />
          <Button label="Envoyer" className="sendButton" />
        </div>
        <p className={style.description}>
          Vous pouvez vous désinscrire à tout moment. Vous trouverez pour cela
          nos informations de contact dans les conditions d'utilisation du site.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
