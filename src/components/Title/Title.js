import React from 'react';
import style from './Title.module.scss';

const Title = (props) => {
  const { text, className } = props;
  return <h1 className={`${style.button} ${style[className]}`}>{text}</h1>;
};

export default Title;
