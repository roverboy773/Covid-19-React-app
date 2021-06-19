import React,{useEffect,useState} from 'react'
import NavbarItem from './NavbarItem'
import { NavLink } from 'react-router-dom'
import Hambger from "./Hambger"
import navToggle from "./Hambger"

const Navbar = () => {
    const [navState, setNavState] = useState(false)
    useEffect(() => {
        return () => {
            // console.log(navState)
        }
    },[navState])
    return (
        <div className=" lg:w-1/12 md:w-1/2 w-10/12 mx-auto text-center py-4">
            <div className="flex items-center justify-around">
                <i className="fas fa-virus text-3xl text-indigo-900 md:my-6 block"></i>
                 <Hambger navToggle={(State)=>setNavState(State)}></Hambger>
            </div>
            {/* {console.log(navState)} */}
            {navState &&   <div className=" nav w-full mx-auto">
                    <NavLink to="/" className="active_nav"><NavbarItem icon="las la-home" name="Overview" /></NavLink>
                    <NavLink to="/symptoms"><NavbarItem icon="fas fa-head-side-cough" name="Symptoms" /></NavLink>
                    <NavLink to="/labs"><NavbarItem icon="las la-vial" name="Labs" /></NavLink>
                    <NavLink to="/journals"><NavbarItem icon="las la-book-medical" name="Journals" /></NavLink>
            </div>
            }
          
        </div>
    )
}

export default Navbar
