import React, { useState } from 'react';
import css from "./App.css"

function App() {
const [count, setCount] = useState(0);


  return (
          <div>
            <button onClick={() => setCount(count + 1)}> + </button>
            <button onClick={() => setCount(count + -1)}> - </button>
            <p>Total = {count}</p>
          </div>     
  );
}

export default App;
