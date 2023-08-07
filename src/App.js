// import "./App.css";
// import React, { useState } from "react";

// function App() {
//   const [result, setResult] = useState("");

//   const handleClick = (e) => {
//     setResult(result.concat(e.target.value));
//   };

//   const clear = () => {
//     setResult("");
//   };
//   const backspace = () => {
//     setResult(result.slice(0, -1));
//   };
//   const calculate = () => {
//     try {
//       setResult(eval(result).toString());
//     } catch (err) {
//       setResult("Error");
//     }
//   };
//   return (
//     <div className="App">
//       <div>
//         <div>
//           <form>
//             <input type="text" value={result} />
//           </form>
//           <div>
//             <button onClick={clear}>Clear</button>
//             <button onClick={backspace}>C</button>
//             <button value="/" onClick={handleClick}>
//               &divide;
//             </button>
//             <button value="7" onClick={handleClick}>
//               7
//             </button>
//             <button value="8" onClick={handleClick}>
//               8
//             </button>
//             <button value="9" onClick={handleClick}>
//               9
//             </button>
//             <button value="*" onClick={handleClick}>
//               &times;
//             </button>
//             <button value="4" onClick={handleClick}>
//               4
//             </button>
//             <button value="5" onClick={handleClick}>
//               5
//             </button>
//             <button value="6" onClick={handleClick}>
//               6
//             </button>
//             <button value="-" onClick={handleClick}>
//               &ndash;
//             </button>
//             <button value="1" onClick={handleClick}>
//               1
//             </button>
//             <button value="2" onClick={handleClick}>
//               2
//             </button>
//             <button value="3" onClick={handleClick}>
//               3
//             </button>
//             <button value="+" onClick={handleClick}>
//               +
//             </button>
//             <button value="0" onClick={handleClick}>
//               0
//             </button>
//             <button value="." onClick={handleClick}>
//               .
//             </button>
//             <button onClick={calculate}>=</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

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
    <div className="App">
      <div>
        <div>
          <form>
            <input type="text" value={result} />
          </form>
          <div>
            <button onClick={clear}>Clear</button>
            <button onClick={backspace}>C</button>
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
            <button value="." onClick={handleClick}>
              .
            </button>
            <button value="=" onClick={handleClick}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
