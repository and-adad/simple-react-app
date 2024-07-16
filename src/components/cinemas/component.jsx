import { useState } from "react";
import { Cinema } from "../cinema/component";
import { CinemaTabs } from "../cinema-tabs/component";

export const Cimemas = ({ cinemas }) => {

    const [activeCinemaIndex, setActiveCinemaIndex] = useState(0);
    const cinema = cinemas[activeCinemaIndex];
  
  return (
  <>
    <CinemaTabs cinemas={cinemas} onClick={setActiveCinemaIndex} />
    <Cinema key={cinema.id} cinema={cinema} />
  </>
  );
};
