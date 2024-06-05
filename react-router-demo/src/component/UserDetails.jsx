import React from "react";
import { Link, useParams } from "react-router-dom";

function UserDetails() {
  //   const userId = useParams();
  //   const id = userId.id;
  const { id } = useParams();
  return (
    <div>
      <h2> User Details Page {id}</h2>
    </div>
  );
}

export default UserDetails;
