import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import AboutImg from "../Images/AboutMe.jpg";

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
        {/* <div>
          <h1>About Class Component</h1>
          <h2>
            This is Food website where you can order food form different place
          </h2>
          <UserClass name={"Akshay"} />
        </div> */}
        <div className="bg-gray-100">
          <div class="container mx-auto p-8">
            <div class="bg-white p-8 rounded-lg shadow-md">
              <div class="flex flex-col items-center">
                <img
                  src={AboutImg}
                  alt="Website Image"
                  class="rounded-full h-40 w-40 object-cover mb-4"
                />

                <h1 class="text-3xl font-bold mb-4">About Our Website</h1>
                <p class="text-gray-700 text-left">
                  Welcome to our website! We are dedicated to providing you with
                  valuable information about various topics. Our mission is to
                  educate and inspire our visitors. Feel free to explore and
                  discover more about our offerings. Welcome to our website! We
                  are dedicated to providing you with valuable information about
                  various topics. Our mission is to educate and inspire our
                  visitors. Feel free to explore and discover more about our
                  offerings.Welcome to our website! We are dedicated to
                  providing you with valuable information about various topics.
                  Our mission is to educate and inspire our visitors. Feel free
                  to explore and discover more about our offerings.Welcome to
                  our website! We are dedicated to providing you with valuable
                  information about various topics. Our mission is to educate
                  and inspire our visitors. Feel free to explore and discover
                  more about our offerings.Welcome to our website! We are
                  dedicated to providing you with valuable information about
                  various topics. Our mission is to educate and inspire our
                  visitors. Feel free to explore and discover more about our
                  offerings.Welcome to our website! We are dedicated to
                  providing you with valuable information about various topics.
                  Our mission is to educate and inspire our visitors. Feel free
                  to explore and discover more about our offerings.Welcome to
                  our website! We are dedicated to providing you with valuable
                  information about various topics. Our mission is to educate
                  and inspire our visitors. Feel free to explore and discover
                  more about our offerings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
