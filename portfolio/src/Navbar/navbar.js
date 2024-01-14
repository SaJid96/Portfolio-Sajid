import React from "react";
import "./navbar.css";

import profile from '../assets/dp2.jpg'

const Navbar = () => {

    const name="MD Sajid Hussain"
  return (
    <>
      <header className="container-fluid user-details">
        <div className="row p-3 ">
          <div className="col-lg-6">
            <div className=" d-flex   align-items-center  ">
                <div className="profile-pic">
                <img
               src={profile}
                alt="loading"
                
              
                
                />
                </div>
                    <p className="fw-bold">{name}</p>
              
            </div>
          </div>
          <div className="col-lg-6">
            <ul className=" fw-bold d-flex justify-content-around align-items-center ">
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
