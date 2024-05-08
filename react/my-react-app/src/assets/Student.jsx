import React from "react";
import PropTypes from "prop-types";

function Student(prop) {
  return (
    <div className="student">
      <p>Name : {prop.name}</p>
      <p>Age : {prop.age}</p>
      <p>Student : {prop.isStudent ? "Yes" : "No"}</p>
    </div>
  );
  Student.propType = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.boolean,
  };
}
Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};
export default Student;
