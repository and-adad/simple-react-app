import ReactDOM from 'react-dom/client';
import { cinemas } from './constants/mock';

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <div>
    {cinemas.map((cinema) => (
        <div key={cinema.id}>
          <h2>{cinema.name}</h2>
        </div>
    ))}
  </div>
);

// React.createElement("div", {
//   children: [
//     React.createElement("button"),
//     React.createElement("button"),
//     React.createElement("button"),
//     React.createElement("button"),
//     React.createElement("button"),
//     React.createElement("button")
//   ],
//   id: "myDiv"
// })