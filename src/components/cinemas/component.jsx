import { Cinema } from "../cinema/component";

export const Cimemas = ({cinemas}) => {
  return (
  <>
      {cinemas.map((cinema) => (
        <Cinema key={cinema.id} cinema={cinema} />
      ))}
  </>
  );
};
