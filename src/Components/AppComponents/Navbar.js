import React from 'react'
import NavbarItem from './NavbarItem'
import {NavLink} from 'react-router-dom'
const Navbar = () => {

    return (
        <div className="text-white w-11/12 md:w-1/12 text-center my-4">
            <i className="fas fa-virus text-3xl my-3 text-purple-400 my-8"></i>
            
              <NavLink to="/"><NavbarItem icon="las la-home" name="Overview"/></NavLink>
              <NavLink to="/symptoms"><NavbarItem icon="fas fa-head-side-cough" name="Symptoms" /></NavLink> 
              <NavLink to="/labs"><NavbarItem icon="las la-vial" name="Labs"/></NavLink>
              <NavLink to="/journals"><NavbarItem icon="las la-book-medical" name="Journals"/></NavLink>
            
        </div>
    )
}

export default Navbar
