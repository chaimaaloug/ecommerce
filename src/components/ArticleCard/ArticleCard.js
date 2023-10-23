import React from "react";
import Button from "../../components/Button/Button"
import style from "./ArticleCard.module.scss";
import article1 from  "../../assets/images/img-4.jpg"

const ArticleCard = () => {

  const articles = [
    {
      title: "Les plus beaux carnets sur-mesure.",
      description: "Déjà plus d’une centaine de marques ont fait le choix de travailler avec nous. Faites comme eux, faites confiance à la patte du tigre pour un carnet Local, responsable, et adapté à vos besoins !",
      imageUrl: article1,
    },
    {
      title: `🇫🇷 Made in Paris ♻️ Matériaux recyclés`,
      description: "C’est au cœur du Marais, dans le troisième arrondissement de Paris que la magie opère. Nous maîtrisons le chemin de l’idée jusqu’à la vente avec beaucoup de passion, depuis nos deux adresses de la rue des Filles du calvaire.",
      imageUrl: article1,
    }
  ];

  return (
    <div className={style.articleCardContainer}>
      {articles.map((item, index) => (
        <div key={index} className={style.articleInfo}>
          <img src={item.imageUrl} alt={item.title} className={style.image}/>
          <div className={style.info}>
            <h2 className={style.title}>{item.title}</h2>
            <p className={style.description}>{item.description}</p>
          </div>
          <div>
            <Button label="EN SAVOIR PLUS" className="blackButton" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArticleCard;
