import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult(Number(input1Ref.current.value) + Number(input2Ref.current.value)); 
  }; 
 
  function minus(e) { 
    e.preventDefault();
    setResult(Number(input1Ref.current.value) - Number(input2Ref.current.value));
  	// Add the code for the minus function 
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult(+ Number(input1Ref.current.value) * Number(input2Ref.current.value)); 
    // Add the code for the plus function 
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult(Number(input1Ref.current.value) / Number(input2Ref.current.value)); 
    // Add the code for the divide function 
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    input1Ref.current.value ="";
    input2Ref.current.value ="";
    // Add the code for the resetInput function 
  }; 
 
  function resetResult(e) { 
    e.preventDefault(); 
    setResult(0);
    input1Ref.current.value ="";
    input2Ref.current.value ="";
  	// Add the code for the resetResult function 
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {/* add the value of the current total */} 
          result:{result} 
        </p> 
        <input
        onChange={() => setResult(0)}
        ref={input1Ref}
          pattern="[0-9]" 
          type="number" 
          placeholder="Type a number" 
        /> 
        <input
        onChange={() => setResult(0)}
        ref={input2Ref}
          pattern="[0-9]" 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>Add</button> 
        {/* Add the subtract button */} 
        <button onClick={minus}>Subtract</button>
        {/* Add the multiply button */} 
        <button onClick={times}>Multiply</button>
        {/* Add the divide button */}
        <button onClick={divide}>Divide</button><br/> 
        {/* Add the resetInput button */} 
        <button onClick={resetInput}>resetInput</button>
        {/* Add the resetResult button */} 
        <button onClick={resetResult}>resetResult</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
