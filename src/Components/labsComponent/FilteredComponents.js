import React, { useContext, useEffect, useState } from 'react'
import Center from "./Center"
import { GlobalContextLab } from '../../context/GlobalContextLab'

const FilteredComponents = ({ ele }) => {
  const { state } = useContext(GlobalContextLab)
  const [filterComponents, setFilterComponents] = useState(null)
  //console.log(typeof ele)
   //console.log(finalFlag)
    /////console.log(filterComponents)
   
   useEffect(() => {

    setFilterComponents(null)
    let finalFlag = false
    
    for (let prop in state) {
      ele.sessions.map((session) => {
        let flag = false
        //console.log(ele[prop]===state[prop] || session[prop]===state[prop])
        if (state[prop].includes(session[prop]) && state[prop].length>0) {
          flag = true
        } 
       // console.log(flag,ele)
       finalFlag = finalFlag || flag 
      })
    }
   // console.log(state,ele,finalFlag)
   // console.log('bahar',finalFlag,ele)
    if (finalFlag) {
    //  console.log('andar',finalFlag)
      setFilterComponents(ele)
    }
     return () => {
       
     }
   }, [filterComponents,state])

  return (
    <div>
      {
        filterComponents ? <Center data={filterComponents}></Center> : <div></div>
      }
    </div>
  )
}
//ele[prop] === state[prop] && 
export default FilteredComponents
