import { useCount } from "../../hooks/use-count";

export const Film = ({ film }) => {

  const { count, increment, decrement } = useCount(0);

  return (
    <>
      <div>{film.name}</div>
      
      <div>
        <button onClick={decrement} disabled={count === 0}>-</button>
        {count}
        <button onClick={increment} disabled={count === 6}>+</button>
      </div>
    </>
  );
};
