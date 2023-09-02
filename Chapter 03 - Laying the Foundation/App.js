import React from "react";
import ReactDOM from "react-dom/client";

// JSX is not HTML inside JS, It is HTML-like or XML-like syntax
// JSX (transpiled before it reaches the JS engine) - Parcel - Babel
// JSX => Babel transpiles it to React.createElement => React Element - JS Object => HTML Element(render)
const heading = (
  <h1 id="heading" className="h1" tabIndex="5">
    Namaste React Using JSX
  </h1>
);

/////////////////////   REACT COMPONENTS
/////////////////////   CLASS COMPONENTS       -  OLD WAY OF WRITING CODE
////////////////////    fUNCTIONAL COMPONENTS  -  NEW WAY OF WRITING CODE

// const HeadingComponent = () => {
//   return <h1 className="heading">Namaste react using FUNCTIONAL COMPONENTS</h1>;
// };

///////////////////  FUNCTIONAL COMPONENT WITHOUT USING ARROW FUNCTION /////////////////////
// const Title = function () {
//   return <h1 className="heading">Hi i am Namaste everyone</h1>;
// };

const Title = () => <h1 className="heading">Hi i am Namaste every</h1>;

const elem = <span>React Span, </span>;

const title = (
  <h1 className="heading">
    {elem}
    Hello everyone I am Akshay
  </h1>
);

const number = 10000;

// Component composition one component inside the other component
const HeadingComponent = () => (
  <div id="container">
    {/* <Title /> */}
    {/* {Title()}
    {number}
    <h2>{number}</h2>
    <h2>{100 + 200}</h2> */}
    {title}
    {Title()}
    <h1 className="heading">Namaste react using FUNCTIONAL COMPONENTS</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
