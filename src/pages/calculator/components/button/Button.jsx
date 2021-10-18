import React, {useState}  from "react";
import "./Button.css"
const Button = ({text,identificador,clickNumber,clickOperator,getResult,allClear,clear,number,operator,equals}) => {
    
    return(
        <button id={identificador} onClick={!clear ? (!equals ? (number ? (e) => clickNumber(number) : (e) => clickOperator(operator)):getResult) : allClear }>{text}</button>
        
    )

};
export default Button;