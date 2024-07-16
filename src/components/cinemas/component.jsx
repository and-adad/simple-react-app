import { useState } from "react";
import { Cinema } from "../cinema/component";

export const Cimemas = ({ cinemas }) => {

    const [activeCinemaIndex, setActiveCinemaIndex] = useState(0);
    const cinema = cinemas[activeCinemaIndex];
  
  return (
  <>
    <div>
      {cinemas.map((cinema) => (
        <button key={cinema.id}>{cinema.name}</button>
      ))}

    </div>
    <Cinema key={cinema.id} cinema={cinema} />
    {/* {cinemas.map((cinema) => (
      <Cinema key={cinema.id} cinema={cinema} />
    ))} */}
  </>
  );
};
