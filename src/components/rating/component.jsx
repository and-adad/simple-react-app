export const Rating = ({ maxRating = 5 }) => {
  return (
    <div>
      {new Array(maxRating).fill(null).map((_, index) => (
        <button key={index}>{index + 1}</button>
    ))}
    </div>
  );
};
