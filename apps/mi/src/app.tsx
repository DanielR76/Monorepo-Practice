import React, { useState } from 'react';

export function App() {
  const [value, setvalue] = useState(0);

  const plus = () => setvalue(value + 1);
  const rest = () => setvalue(value - 1);
  return (
    <div>
      <button onClick={plus}>Sumar</button>
      <br />
      <button onClick={rest}>Restar</button>
      <label>{`valor ${value}`}</label>
    </div>
  );
}

export default App;
