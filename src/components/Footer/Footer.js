import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-text">
      <h2>How react works</h2>
      <p>
        React does not commit state changes one after the other if there are multiple state changes. Instead, React goes through its virtual DOM, creates a list of those changes that need to be made
        to the actual DOM and then does it all in one single process.
      </p>
      <h2>Difference between props vs state</h2>
      <p>Props is immutable. during the component's life cycle props should not change.</p>
      <p>
        State should contain data that a component's event handlers may change to trigger a UI update. In real apps this data tends to be very small. State is accessible only within Component. To keep
        track of data within component we use state.
      </p>
      <h2>How useState works</h2>
      <p>
        useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value and
        another function to update this value.
      </p>
    </div>
  );
};

export default Footer;
