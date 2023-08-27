// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World! from JavaScript";

// const root = document.getElementById("root");
// root.appendChild(heading);

// {} This object is a place where will give you a attribute tag


// const heading = React.createElement(
//     "h1",               // h1 type object
//     { id: "heading" }, // Attribute              all are come in props
//     "Hello World! from React" // Children
// );


// <div> 
//     <h1></h1> 
//     <h2></h2> 
// </div>
// const parent = [
//     React.createElement("h1",{ id:"heading" },"Hi i am h1 line"),
//     React.createElement("h2",{ id:"heading" }, "Hi i am h2 line")
// ]


//<div>
//    <div id="parent">
//        <h1></h1>
//        <h2></h2>
//    </div>
//</div>
// const parent = React.createElement("div",{id:"parent"},[
//     React.createElement("h1",{id:"heading"},"Hi i am heading 1"),
//     React.createElement("h2",{id:"heading"},"Hi i am heading 2")
// ])



//<div id="parent">
//   <div id="child">
//      <h1>Hi i am Parent1</h1>
//      <h2>Hi i am Child1</h2>
//   </div>
//   <div id="child2">
//      <h1>Hi i am Parent2</h1>
//      <h2>Hi i am Child2</h2>
//   </div>
//</div>
//ReactElement(object) => HTML(Crowser Understands)
//

const parent = React.createElement("div",{ id: "parent" },[
    React.createElement("div",{ id: "child" },[ 
        React.createElement( "h1", {id:"heading"}, "Hi i am Parent tag1"), 
        React.createElement( "h2",{class:"heading2"},"Hi i am child tag1" ) 
    ]),
    React.createElement("div",{ id: "child" },[ 
        React.createElement( "h1", {id:"heading"}, "Hi i am Parent tag2"), 
        React.createElement( "h2",{class:"heading2"},"Hi i am child tag2" ) 
    ])]
)



// console.log(heading)   //give object
console.log(parent)   //give object

const root = ReactDOM.createRoot(document.getElementById("root"))
//createRoot lets you create a root to display React components inside a browser DOM node.
// root.render(heading)
root.render(parent)
// the function is to display the specified HTML code inside the specified HTML element.
// root.render what we have passing through it, it can replacing what is presnet in the existing root
// In the render() method, we can read props and state and return our JSX code to the root component of our app.
