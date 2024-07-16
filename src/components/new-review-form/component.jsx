import { useReducer } from "react";
import { Rating } from "../rating/component";

const initialValue = {
  name: 'Андрей',
  text: "TheBest",
  rating: 5
}

const reducer = (state, {type, payload}) => {
  switch (type) {
    case "setName":
      return {...initialValue, name: payload };
    case "setText":
      return {...state, text: payload };
    case "setRating":
      return {...state, rating: payload };

    default:
      return state;
  }
};

export const NewReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, initialValue);
  
  return (
    <>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" value={form.name}
          onChange={(event) => dispatch({ type: "setName", payload: event.target.value })}
        />
      </div>
      <div>
        <label htmlFor="text">Text: </label>
        <input type="text" id="text" name="text" value={form.text}
          onChange={(event) => dispatch({ type: "setText", payload: event.target.value })}
        />
      </div>
      <div>
        <Rating />
        {/* <label htmlFor="rating">Rating: </label>
        <input type="number" id="rating" name="rating" value={form.rating}
          onChange={(event) => dispatch({ type: "setRating", payload: event.target.value })}
        /> */}
      </div>
    </>
  );
};
