import React,{useState} from "react";
import "./navbar.css";

import profile from '../assets/dp2.jpg'

const Navbar = () => {

    const name="MD Sajid Hussain"

    const [isMobile, setIsmobile]=useState(false)
    const handleToggle=()=>{
      setIsmobile(!isMobile);
    }
  return (
    <>
      <header className="container-fluid user-details">
        <div className="row p-3  small-screen-view">
          <div className="col-lg-6 col-xs-4">
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
          <div className="col-lg-6 col-xs-4 ham-col">
          <button className="hamburger" onClick={handleToggle}>
          ☰
        </button>
            <ul className={`navbar-links fw-bold  ${isMobile ? 'show' : ''}`}>
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
