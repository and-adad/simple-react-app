import { useState } from "react";
import { Cinema } from "../cinema/component";

export const Cimemas = ({ cinemas }) => {

    const [activeCinemaIndex, setActiveCinemaIndex] = useState(0);
    const cinema = cinemas[activeCinemaIndex];
  
  return (
  <>
    <div>

    </div>
    <Cinema key={cinema.id} cinema={cinema} />
    {/* {cinemas.map((cinema) => (
      <Cinema key={cinema.id} cinema={cinema} />
    ))} */}
  </>
  );
};
