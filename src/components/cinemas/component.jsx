import { useState } from "react";
import { Cinema } from "../cinema/component";

export const Cimemas = ({ cinemas }) => {

    const [activeCinemaIndex, setActiveCinemaIndex] = useState(0);
    const cinema = cinemas[activeCinemaIndex];
  
  return (
  <>
    <div>
      {cinemas.map((cinema, index) => (
        <button key={cinema.id} onClick={() => setActiveCinemaIndex(index)}>
          {cinema.name}
        </button>
      ))}

    </div>
    <Cinema key={cinema.id} cinema={cinema} />
    {/* {cinemas.map((cinema) => (
      <Cinema key={cinema.id} cinema={cinema} />
    ))} изначально было так до того как начали делать табы*/}
  </>
  );
};
