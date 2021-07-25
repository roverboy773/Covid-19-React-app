import React,{useEffect,useState} from 'react'
import NavbarItem from './NavbarItem'
import { NavLink } from 'react-router-dom'
import Hambger from "./Hambger"

const Navbar = () => {
    const [navState, setNavState] = useState(false)
    const [h, setH] = useState('scale-y-0')
    useEffect(() => {
      
        return () => {
            // console.log(navState)
        }
    },[navState])
    return (
        <div className=" lg:w-1/12 md:w-1/2 w-10/12 mx-auto text-center pt-4">
            <div className="flex items-center justify-around md:hidden">
                <i className="fas fa-virus text-3xl text-indigo-900 md:my-6 block"></i>
                 <Hambger navToggle={(State)=> {{setNavState(State);if(h==='h-0') setH('h-auto'); else setH('h-0');}}}>
        </Hambger>
            </div>
            <div className=" nav w-full mx-auto md:block hidden h-0">
                     <i className="fas fa-virus text-3xl text-indigo-900 md:my-6 block"></i>
                    <NavLink to="/" className="active_nav"><NavbarItem icon="las la-home" name="Overview" /></NavLink>
                    <NavLink to="/symptoms"><NavbarItem icon="fas fa-head-side-cough" name="Symptoms" /></NavLink>
                    <NavLink to="/labs"><NavbarItem icon="las la-vial" name="Labs" /></NavLink>
                    <NavLink to="/journals"><NavbarItem icon="las la-book-medical" name="Journals" /></NavLink>
            </div>
            {/* {console.log(navState)} */}
            
                <div className={`menu nav w-full mx-auto md:block mb-4 transform scale-y-100 ${h} overflow-hidden transition delay-500 duration-1000  `}>
                      <div className={`transition transform  duration-1000 scale-y-100 delay-500 h-1/2`}>
                    <NavLink to="/" className="active_nav"><NavbarItem icon="las la-home " name="Overview" /></NavLink>
                    <NavLink to="/symptoms"><NavbarItem icon="fas fa-head-side-cough " name="Symptoms" /></NavLink>
                    <NavLink to="/labs"><NavbarItem icon="las la-vial" name="Labs " /></NavLink>
                    <NavLink to="/journals"><NavbarItem icon="las la-book-medical " name="Journals" /></NavLink>
                    </div>
            </div>  
          
          
        </div>
    )
}

export default Navbar
