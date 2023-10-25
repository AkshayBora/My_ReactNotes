import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <>
//       <div>
//         <h1>About</h1>
//         <h2>
//           This is Food website where you can order food form different place
//         </h2>
//         {/* <User name={"Akshay"} surname={"Saini"} /> */}
//         <UserClass name={"Akshay"} surname={"Kumar"} />
//       </div>
//     </>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <>
        <div>
          <h1>About Class Component</h1>
          <h2>
            This is Food website where you can order food form different place
          </h2>
          <UserClass name={"Akshay"} />
        </div>
      </>
    );
  }
}

export default About;
