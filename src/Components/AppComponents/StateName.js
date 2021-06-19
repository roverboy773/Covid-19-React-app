import React,{useContext} from 'react'
import  {GlobalContext} from "../../context/GlobalContext"

const StateName = () => {
    const {state} =useContext(GlobalContext)
    //
    return (
        <div >
            <h4 className="state_name text-center font-bold text-2xl text-gray-400">{state.region}</h4>
        </div>
    )
}

export default StateName
