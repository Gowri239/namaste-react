import React from "react";
import ReactDOM from "react-dom/client";

const title = <h1>Namaste React</h1>;

const HeadingComponent = function () {
  return (
    <div id="container">
      {title}
      <h1 className="heading">Namste function components</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
