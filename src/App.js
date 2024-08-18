import "./App.css";
import { useState } from "react";
function App() {
  const [inValue, setInValue] = useState("");

  function display(value) {
    setInValue(inValue + value);
  }

  function clear() {
    setInValue("");
  }

  function evaluate() {
    const ans = eval(inValue);
    setInValue(ans);
  }
  return (
    <>
      <h1 className="heading text-2xl font-bold">Calculator</h1>

      <form className="calculator text-3xl font-bold">
        <input
          className="value"
          value={inValue}
          onChange={(e) => setInValue(e.target.value)}
        />
        <span className="num clear hover:text-red-700" onClick={clear}>
          Clear
        </span>
        <span onClick={() => display("%")}>%</span>
        <span onClick={() => display("/")}>/</span>
        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>
        <span onClick={() => display("*")}>X</span>
        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span onClick={() => display("-")}>-</span>
        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>
        <span onClick={() => display("+")}>+</span>
        <span onClick={() => display("0")}>0</span>
        <span onClick={() => display("00")}>00</span>
        <span onClick={() => display(".")}>.</span>
        <span onClick={evaluate}>=</span>
      </form>
    </>
  );
}

export default App;
