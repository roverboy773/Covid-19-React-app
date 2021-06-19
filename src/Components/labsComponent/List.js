import React, { useEffect, useState, useContext } from 'react'
import Center from './Center'
import Filter from './Filter'
import FilteredComponents from "./FilteredComponents"
import { GlobalContextLab } from '../../context/GlobalContextLab'

const List = ({ centers }) => {
    //console.log('centers', centers)
    const { state } = useContext(GlobalContextLab)
    const [flagState, setflagState] = useState(true)
    useEffect(() => {
        let flag = true
        for (let prop in state) {
            if (state[prop].length !== 0)
                flag = flag && false
        }
        if (flag === false)
            setflagState(false)
        else
            setflagState(true)

        return () => {

        }
    }, [state, flagState])
    return (
        <div className="">
            <Filter></Filter>
            <div className="md:w-11/12 mx-auto mt-8">
                {
                    centers.length>0 ? centers.map((ele, index) => {
                        //console.log(state)
                        //console.log(Object.keys(state).length===0)

                        //console.log(state, flagState)
                        return flagState ? <Center key={index} data={ele}></Center>
                            : <FilteredComponents key={index} ele={ele}></FilteredComponents>
                    })
                    :
                    <div className="text-gray-400">No Vaccination Center Available to Book at this time,Kindly Check Later</div>
                }
            </div>
        </div>
    )
}

export default List
// {Centers && Centers.map((ele,indx)=>(
//     <h1 key={indx}>{ele.name}</h1>
//    ))}