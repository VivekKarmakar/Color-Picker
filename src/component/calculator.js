import React, { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [operator, setOperator] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const handleNumberClick = (number) => {
    if (display === "0") {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };
  const handleOperatorClick = (operator) => {
    setOperator(operator);
    setFirstNumber(display);
    setDisplay("0");
  };
  const handleEqualsClick = () => {
    setSecondNumber(display);
    let result = 0;
    switch (operator) {
      case "+":
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case "-":
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case "*":
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
        break;
      case "/":
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
        break;
      default:
        break;
    }
    setDisplay(result);
  };
  const handleClearClick = () => {
    setDisplay("0");
    setOperator("");
    setFirstNumber("");
    setSecondNumber("");
  };
  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleNumberClick("7")}>7</button>
        <button onClick={() => handleNumberClick("8")}>8</button>
        <button onClick={() => handleNumberClick("9")}>9</button>
        <button onClick={() => handleOperatorClick("+")}>+</button>
        <button onClick={() => handleNumberClick("4")}>4</button>
        <button onClick={() => handleNumberClick("5")}>5</button>
        <button onClick={() => handleNumberClick("6")}>6</button>
      </div>
  </div>
  )}