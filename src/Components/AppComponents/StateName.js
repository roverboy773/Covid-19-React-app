import React,{useContext,useState,useEffect} from 'react'
import  {GlobalContext} from "../../context/GlobalContext"

const StateName = () => {
    const {state} =useContext(GlobalContext)
    //
    return (
        <div >
            <h4 className="text-center font-bold text-2xl ">{state.region}</h4>
        </div>
    )
}

export default StateName