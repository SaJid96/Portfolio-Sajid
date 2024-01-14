import React from 'react'
import './navbar.css'


const Navbar = () => {
  return (
   <>
   <header className='container-fluid'>
    
    <ul>
        <li>Profile pic</li>
        <li>Name</li>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contacts</li>
    <button className='btn btn-primary'>click</button>

    </ul>
   </header>
   </>
  )
}

export default Navbar