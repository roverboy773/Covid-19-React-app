import React, { useEffect, useContext } from 'react'
import Centerinfo from './Centerinfo'
import Session from "./Session"
import { GlobalContextLab } from '../../context/GlobalContextLab'


const Center = ({ data }) => {
    const { state } = useContext(GlobalContextLab)

    useEffect(() => {
        window.scrollBy(0, 10);

        return () => {

        }
    }, [data, state])
    return (
        <div className=" center border-2 text-left rounded-xl m-4 ">

            <div className="center_content block md:flex mx-auto py-1 ">
                <Centerinfo data={data}></Centerinfo>
                <div className="w-auto bg-indigo-500 session_container rounded-xl my-2 overflow-x-scroll">
                    <div className="flex">
                        {data.sessions.map((ele, indx) => (
                            <Session key={indx} ele={ele}></Session>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Center
