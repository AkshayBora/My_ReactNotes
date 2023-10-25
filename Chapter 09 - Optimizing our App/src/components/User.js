import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);
  const { name, surname } = props;

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Interval Calls");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Clearing the Interval");
    };
  }, []);

  return (
    <div className="user-card">
      <h2>Count is = {count}</h2>
      <h2>Count2 is = {count2}</h2>
      <button onClick={() => setCount(count + 1)}>ClickME!</button>
      <button onClick={() => setCount(0)}>ClickME_0!</button>
      <h2>
        My name is {name} {surname}
      </h2>
      <h3>Location: Delhi</h3>
      <h3>Contact: akshay@123gmail.com</h3>
    </div>
  );
};

export default User;
