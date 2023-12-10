import React, { useState } from "react";
import style from './QuantityPicker.module.scss';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const QuantityPicker = ({ onChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onChange(newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange(newQuantity);
    }
  };

  return (
    <div className={style.quantityPickerContainer}>
      <span>{quantity}</span>
      <div className={style.quantityPickerIcons}>
        <IoIosArrowUp onClick={handleIncrement} className={style.quantityPicker} />
        <IoIosArrowDown onClick={handleDecrement} className={style.quantityPicker} />
      </div>
    </div>
  );
};

export default QuantityPicker;
