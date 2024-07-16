import { Tab } from "../tab/component";

export const CinemaTabs = ({ cinemas, onClick }) => {
  return (
    <>
      {cinemas.map((cinema, index) => (
        <Tab key={cinema.id} onClick={() => onClick(index)}>
          {cinema.name}
        </Tab>
      ))}
    </>
  );
};
