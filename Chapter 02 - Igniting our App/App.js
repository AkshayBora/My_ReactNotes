import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{ id: "parent" },[
    React.createElement("div",{ id: "child1" },[ 
        React.createElement( "h1", {id:"heading"}, "Hi i am now new tag1✌"), 
        React.createElement( "h2",{className:"heading2"},"Hi i am child tag1" ) 
    ]),
    React.createElement("div",{ id: "child2" },[ 
        React.createElement( "h1", {id:"heading"}, "Hi i am Parent tag2"), 
        React.createElement( "h2",{className:"heading2"},"Hi i am child tag2" ) 
    ])]
)

// console.log(parent)   //give object

const root = ReactDOM.createRoot(document.getElementById("root"))
//createRoot lets you create a root to display React components inside a browser DOM node.
// root.render(heading)
root.render(parent)
// the function is to display the specified HTML code inside the specified HTML element.
// root.render what we have passing through it, it can replacing what is presnet in the existing root
// In the render() method, we can read props and state and return our JSX code to the root component of our app.
