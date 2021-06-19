import React,{useContext} from 'react'
import {GlobalContext} from "../../context/GlobalContext"

const Monuments = () => {
  const {state} = useContext(GlobalContext)
  //console.log(state)
    return (
        <div className="">
          <img className="w-1/12 block mx-auto" src={require(`../../image/Delhi.svg`)} alt="" />
        </div>
    )
}

export default Monuments
