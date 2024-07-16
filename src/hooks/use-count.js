import { useState } from "react"

export function useCount(initialState = 0) {
  const [count, setCount] = useState(initialState);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return { count, decrement, increment };
}