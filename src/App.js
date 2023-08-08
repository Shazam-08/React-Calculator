import "./App.css";
import React, { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const [canEnterNumbers, setCanEnterNumbers] = useState(true);

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  const handleClick = (e) => {
    const clickedValue = e.target.value;

    if (clickedValue === "=") {
      calculate(); // Call the calculate function to handle the calculation
      setCanEnterNumbers(false);
    } else if (canEnterNumbers) {
      setResult(result.concat(clickedValue));
    }
  };

  const clear = () => {
    setResult("");
    setCanEnterNumbers(true);
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const handleOperatorClick = (e) => {
    if (!canEnterNumbers) {
      setCanEnterNumbers(true);
    }
    setResult(result.concat(e.target.value));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" bg-black w-96 h-auto mx-10 px-3 border border-gray-400 rounded-md shadow-md pb-4 pt-20">
        <div>
          <form>
            <input
              type="text"
              value={result}
              className="w-full text-right text-white text-3xl bg-transparent border-none outline-none"
            />
          </form>
          <div className=" grid grid-cols-3 gap-4 content-between text-3xl text-white ">
            <button
              className="rounded-full border border-white col-span-3 "
              onClick={clear}
            >
              Clear
            </button>
            <button value="/" onClick={handleOperatorClick}>
              ÷
            </button>
            <button value="*" onClick={handleOperatorClick}>
              ×
            </button>
            <button value="-" onClick={handleOperatorClick}>
              –
            </button>
            <button value="+" onClick={handleOperatorClick}>
              +
            </button>
            <button value="7" onClick={handleClick}>
              7
            </button>
            <button value="8" onClick={handleClick}>
              8
            </button>
            <button value="9" onClick={handleClick}>
              9
            </button>
            <button value="4" onClick={handleClick}>
              4
            </button>
            <button value="5" onClick={handleClick}>
              5
            </button>
            <button value="6" onClick={handleClick}>
              6
            </button>
            <button value="1" onClick={handleClick}>
              1
            </button>
            <button value="2" onClick={handleClick}>
              2
            </button>
            <button value="3" onClick={handleClick}>
              3
            </button>
            <button value="0" onClick={handleClick}>
              0
            </button>
            <button
              className="rounded-full border  border-white"
              onClick={backspace}
            >
              C
            </button>
            <button value="." onClick={handleClick}>
              .
            </button>
            <button
              className="rounded-full border  border-white col-span-2"
              value="="
              onClick={handleClick}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
