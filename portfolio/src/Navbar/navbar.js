import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="container-fluid user-details">
        <div className="row p-3 ">
          <div className="col-lg-6">
            <ul className=" d-flex  align-items-center ">
              <li>Profile pic</li>
              <li>Name</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className=" d-flex justify-content-around align-items-center ">
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
