import React, { useState } from "react";

function Calculator() {
  // Define the state variables for the inputs and the result
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  // Define the functions for each operation
  function addition() {
    // Parse the inputs as numbers and calculate the sum
    let a = Number(num1);
    let b = Number(num2);
    let sum = a + b;
    // Set the result state to the sum
    setResult(sum);
  }

  function subtraction() {
    // Parse the inputs as numbers and calculate the difference
    let a = Number(num1);
    let b = Number(num2);
    let diff = a - b;
    // Set the result state to the difference
    setResult(diff);
  }

  function multiplication() {
    // Parse the inputs as numbers and calculate the product
    let a = Number(num1);
    let b = Number(num2);
    let prod = a * b;
    // Set the result state to the product
    setResult(prod);
  }

  function division() {
    // Parse the inputs as numbers and check if the second number is zero
    let a = Number(num1);
    let b = Number(num2);
    if (b === 0) {
      // Set the result state to an error message
      setResult("Cannot divide by zero");
      return;
    }
    // Calculate the quotient and set the result state to it
    let quot = a / b;
    setResult(quot);
  }

  return (
    <div className="calculator">
      <h1>{result}</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      <button onClick={addition}>Addition</button>
      <button onClick={subtraction}>Subtraction</button>
      <button onClick={multiplication}>Multiplication</button>
      <button onClick={division}>Division</button>
    </div>
  );
}

export default Calculator;
