import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        CANDELA-LABS PWA
      </Link>

      <div className="" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <Link to="/" className="nav-item" style={{ marginRight: "20px" }}>
            Firebase Users
          </Link>
          <Link
            to="/userlist"
            className="nav-item"
            style={{ marginRight: "20px" }}
          >
            IndexdDb Users
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
