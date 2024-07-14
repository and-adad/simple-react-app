import ReactDOM from 'react-dom/client';
import React from 'react';

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <div id='myDiv'>
    <button>ClickMe</button>
    <button>ClickMe</button>
    <button>ClickMe</button>
    <button>ClickMe</button>
    <button>ClickMe</button>
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