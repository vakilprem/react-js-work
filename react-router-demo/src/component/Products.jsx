import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <>
      <div>
        <h1>This is my Profuct Page</h1>
      </div>
      <nav>
        <Link to={"shirts"}>Shirts</Link>
        <Link to={"jens"}>Jens</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Products;
