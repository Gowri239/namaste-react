import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = function () {
  return (
    <div id="container">
      <h2>{100 + 500}</h2>
      <h1 className="heading">Namste function components</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
