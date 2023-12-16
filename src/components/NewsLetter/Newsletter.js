import { useState } from "react";
import Button from "../Button/Button";
import style from "./Newsletter.module.scss";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const subscribe = async () => {
    const endpoint = 'https://us14.api.mailchimp.com/3.0/lists/14530614f3/members'
    const apiKey = 'f7e8539c0f9877e7decb55a08d58f628-us14';
    const data = {
      email_address: email,
      status: 'subscribed',
    };
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.status === 'subscribed') {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className={style.newsletterContainer}>
      <h2>Keep in touch</h2>
      <div className={style.columnContainer}>
        <div className={style.form}>
          <input
            type="email"
            placeholder="Votre adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button label="Envoyer" className="sendButton" onClick={subscribe} />
        </div>
        {status === 'success' && <p className={style.successMessage}>Inscription réussie !</p>}
        {status === 'error' && <p className={style.errorMessage}>Veuillez réessayer</p>}
        <p className={style.description}>
          Vous pouvez vous désinscrire à tout moment. Vous trouverez pour cela
          nos informations de contact dans les conditions d'utilisation du site.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
