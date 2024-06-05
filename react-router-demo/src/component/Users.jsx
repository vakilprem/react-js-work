import React from "react";
import { Link, Outlet } from "react-router-dom";

function Users() {
  return (
    <div>
      <h2>UserDetails</h2>
      <h2>
        <Link to={"/user/1"}>User 1</Link>
      </h2>
      <h2>
        <Link to={"/user/2"}>User 2</Link>
      </h2>
      <h2>
        <Link to={"/user/3"}>User 3</Link>
      </h2>
      <Outlet />
    </div>
  );
}

export default Users;
