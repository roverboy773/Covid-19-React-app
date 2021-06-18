import React,{useContext} from 'react'
import {GlobalContext} from "../../context/GlobalContext"

const Monuments = () => {
  const {state} = useContext(GlobalContext)
  const img='../image'+state.region+'.svg'
    return (
        <div className="">
          {/* <img className="w-1/12 block mx-auto" src={require(`${img}`)} alt="" /> */}
        </div>
    )
}

export default Monuments
