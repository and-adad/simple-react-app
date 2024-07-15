import { cinemas } from "../../constants/mock";

export const Cimemas = () => {
  return (
  <>
      {cinemas.map((cinema) => (
        <div key={cinema.id}>
          <h2>{cinema.name}</h2>
          {cinema.films.length ? (
            <div>
              <h3>Films</h3>
              {cinema.films.map((film) => (
                <div key={film.id}>{film.name}</div>
              ))}
            </div>
          ) : <span>No films</span>}
          <div>
            <h3>Reviews</h3>
            {cinema.reviews.map((review) => (
              <div key={review.id}>{review.text}</div>
            ))}
          </div>
        </div>
        ))};
  </>
  );
};
