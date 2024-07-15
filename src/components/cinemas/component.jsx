import { cinemas } from "../../constants/mock";
import { Cinema } from "../cinema/component";

export const Cimemas = () => {
  return (
  <>
      {cinemas.map((cinema) => (
        <Cinema key={cinema.id} cinema={cinema} disabled />
      ))}
  </>
  );
};
