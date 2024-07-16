export const CinemaTabs = ({ cinemas, onClick }) => {
  return (
    <>
      {cinemas.map((cinema, index) => (
        <button key={cinema.id} onClick={() => onClick(index)}>
          {cinema.name}
        </button>
      ))}
    </>
  );
};
