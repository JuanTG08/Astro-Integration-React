import React, { useState } from "react";

const Welcome = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Welcome</h1>
      <button onClick={() => increment()}>Incrementar</button>
      <button onClick={() => decrease()}>Disminuir</button>
      <button onClick={() => reset()}>Reiniciar</button>
      <br />
      <span>{count}</span>
    </div>
  );
};

export default Welcome;
