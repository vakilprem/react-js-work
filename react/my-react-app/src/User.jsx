import React from "react";
import PropTypes from "prop-types";
function User(prop) {
  //   if (prop.isLoggedIn) {
  //     return <h2> Welcome {prop.username}</h2>;
  //   } else {
  //     return <h2>Please Login To contuniue</h2>;
  //   }

  const welcomeMessage = <h2 className="welcome">Welcome {prop.username}</h2>;
  const loginPropmpt = <h2 className="login">Please Login To Countiue</h2>;

  return prop.isLoggedIn ? welcomeMessage : loginPropmpt;
}
User.prototype = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};
User.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

export default User;
