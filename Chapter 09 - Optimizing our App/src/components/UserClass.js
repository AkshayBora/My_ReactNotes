import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    // console.log(this.props);
    //console.log(this.props.name + " Child Constructor");
    // this.state = {
    //   count: 0,
    //   count2: 1,
    // };
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "https//Dummy.jpg",
      },
    };
    console.log("Child Constructor!..");
  }

  async componentDidMount() {
    //console.log(this.props.name + " Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/AkshayBora");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("Child ComponentDidMount!..");
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount!...");
  }

  render() {
    //console.log(this.props.name + " Child Render");
    // const { name, surname } = this.props;
    // const { count } = this.state;
    console.log("Child Render!...");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h2>Count is: {this.state.count}</h2> */}
        {/* <h2>Count is: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click_Increase!
        </button> */}
        {/* <h2>Count2 is: {count2}</h2> */}
        <img src={avatar_url} />
        <h2>My name is {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: akshay@123gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
