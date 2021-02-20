import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg justify-content-center bg-primary">
      <p className="navbar-brandd-flex justify-content-center bg-primary">
        Employee Tracker
      </p>
    </nav>
  );
}

export default Navbar;
