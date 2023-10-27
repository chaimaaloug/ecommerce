import React from 'react';
import style from './Collections.module.scss';
import image1 from '../../assets/images/img-14.jpg';
import image2 from '../../assets/images/img-13.jpg';
import image3 from '../../assets/images/img-12.jpg';
import Button from '../Button/Button';

const Collections = () => {
  const collections = [
    {
      image: image1,
      label: 'LES AGENDAS 2024',
    },
    {
      image: image2,
      label: 'LA COLLECTION VAN GOGH',
    },
    {
      image: image3,
      label: 'LE PRIMEUR JOW',
    },
  ];

  return (
    <div className={style.collectionsContainer}>
      {collections.map((item, index) => (
        <div key={index} className={style.collectionItem}>
          <div className={style.imageContainer}>
            <img src={item.image} alt="" className={style.collectionImage} />
            <Button label={item.label} className="whiteButton" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collections;
