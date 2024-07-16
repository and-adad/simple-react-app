import { useState } from "react";

export const Film = ({ film }) => {

  useState();

  return (
    <>
      <div>{film.name}</div>
      
      <div>
        <button>-</button>
        0
        <button>+</button>
      </div>
    </>
  );
};
