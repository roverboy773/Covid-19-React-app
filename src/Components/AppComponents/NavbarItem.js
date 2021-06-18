import React from 'react'

const NavbarItem = ({icon,name}) => {
    return (
        <div className="navbarItem mt-8 text-indigo-800">
            <div className="skew ml-2">
                <div className="py-1">
                    <i className={icon.toString()+" text-2xl"} ></i>
                    <p className=" text-sm">{name}</p>
                </div>
            </div>
        </div>
    )
}

export default NavbarItem
// navbarItem to be added when as class when nablink is clicked