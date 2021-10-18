import React, {useState} from 'react'
import Button from './components/button/Button'
import Input from './components/input/Input';
import './Calculadora.css'


const App = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [currentOperation, setCurrentOperation] = useState("");
  const [result, setResult] = useState(0);
  function clickNumber (val) {
    if(currentOperation===""){
      setNumber1(number1+val);
    }else{
      setNumber2(number2+val);
    }
  }
  function clickOperation (val) {
    setCurrentOperation(val);
  }
  function getResult(){
    switch(currentOperation){
      case "+": setResult(Number(number1)+Number(number2));
                break;
      case "-": setResult(Number(number1)-Number(number2));
                break;
      case "*": setResult(Number(number1)*Number(number2));
                break;
      case "/": setResult(Number(number1)/Number(number2));
                break;
    }
  }
  function allClear() {
    setNumber1("");
    setNumber2("");
    setCurrentOperation("");
    setResult("");
  }
  return (
        <div className="container">
            <form>
              <Input result={result ? result : (number2 ? + number1 + currentOperation + number2 :((!currentOperation ? number1 : number1 + currentOperation)))} />
            </form>
            <div className="container-button">
              <Button text='AC' identificador="clear" allClear={allClear} clear="SI"/>
              <Button text='/' identificador="division" clickOperator={clickOperation} operator="/"/>
              <Button text='*' identificador="multiplicacion" clickOperator={clickOperation} operator="*"/>
              <Button text='-' identificador="resta"  clickOperator={clickOperation} operator="-"/>
              <Button text='7' identificador="siete" clickNumber={clickNumber} number="7"/>
              <Button text='8' identificador="ocho" clickNumber={clickNumber} number="8"/>
              <Button text='9' identificador="nueve" clickNumber={clickNumber} number="9"/>
              <Button text='+' identificador="suma"  clickOperator={clickOperation} operator="+"/>
              <Button text='4' identificador="cuatro"clickNumber={clickNumber} number="4" />
              <Button text='5' identificador="cinco" clickNumber={clickNumber} number="5"/>
              <Button text='6' identificador="seis" clickNumber={clickNumber} number="6"/>
              <Button text='1' identificador="uno" clickNumber={clickNumber} number="1"/>
              <Button text='2' identificador="dos" clickNumber={clickNumber} number="2"/>
              <Button text='3' identificador="tres" clickNumber={clickNumber} number="3"/>
              <Button text='=' identificador="igual" getResult={getResult} equals="SI"/>
              <Button   text='0' identificador="cero" clickNumber={clickNumber} number="0"/>
              <Button text='.' identificador="puntito"clickNumber={clickNumber}  number="."/>
            </div>
        </div>
  )
};

export default App;