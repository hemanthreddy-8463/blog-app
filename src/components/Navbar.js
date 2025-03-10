import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/create">Create Blog</Link>
      </li>
    </nav>
  );
};

export default Navbar;
