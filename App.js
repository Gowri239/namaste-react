import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = function () {
  return (
    <div id="container">
      <h1 className="heading">Namste function components</h1>
    </div>
  );
};

const title = (
  <h1>
    Namaste React
    <HeadingComponent />
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(title);
