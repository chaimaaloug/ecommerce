import React from "react";
import style from "./Button.module.scss";

const Button = (props) => {
    const { label, onClick, className } = props;

    return (
        <button
            type="button"
            onClick={onClick}
            className={`${style.button} ${style[className]}`}
        >
            {label}
        </button>
    );
};

export default Button;
