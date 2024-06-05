import React from "react";
import PropTypes from "prop-types";

function Hello(prop) {
// function Hello({name,age}) {
  const {name,age} = prop
  return (
    // console.log(props),
    (
      <div>
        {/* Hello {name} */}
        Hello {name}
        <h1>Age is {age}</h1>
        {/* {props.children} */}
      </div>
    )
  );
}
Hello.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default Hello;
