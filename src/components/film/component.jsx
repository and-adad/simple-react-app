import { useState } from "react";

export const Film = ({ film }) => {

  const [count, setCount] = useState(0);

  return (
    <>
      <div>{film.name}</div>
      
      <div>
        <button disabled={count === 0}>-</button>
        {count}
        <button disabled={count === 6}>+</button>
      </div>
    </>
  );
};
