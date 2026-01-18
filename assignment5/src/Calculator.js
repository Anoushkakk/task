import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operator) => {
    const a = Number(num1);
    const b = Number(num2);

    let res;

    if (operator === "+") {
      res = a + b;
    } else if (operator === "-") {
      res = a - b;
    } else if (operator === "*") {
      res = a * b;
    } else if (operator === "/") {
      if (b === 0) {
        res = "Cannot divide by zero";
      } else {
        res = a / b;
      }
    }

    setResult(res);
  };

  return (
    <div style={{ border: "1px solid black", padding: "20px", width: "300px" }}>
      <h3>Calculator</h3>

      <input
        type="number"
        placeholder="Number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br /><br />

      <button onClick={() => calculate("+")}>Add</button>
      <button onClick={() => calculate("-")}>Subtract</button>
      <button onClick={() => calculate("*")}>Multiply</button>
      <button onClick={() => calculate("/")}>Divide</button>

      <div style={{ marginTop: "15px", border: "1px solid #000", padding: "10px" }}>
        Result: {result}
      </div>
    </div>
  );
}

export default Calculator;
