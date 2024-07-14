import ReactDOM from 'react-dom/client';
import React from 'react';
import { cinemas } from './constants/mock';

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <div>
    <div>
      <h2>{cinemas[0].name}</h2>
    </div>

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