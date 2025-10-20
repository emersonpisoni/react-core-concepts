import { useState } from "react";
import { useLogger } from "../hooks/useLogger";

export function Counter() {
  const [count, setCount] = useState(0);
  useLogger("Counter", { count });

  return (
    <div>
      <h2>Contador</h2>
      <p>Valor atual: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
      <button onClick={() => setCount(0)}>Resetar</button>
    </div>
  );
}
