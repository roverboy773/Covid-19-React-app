import React, { useEffect, useContext,useState } from 'react'
import Centerinfo from './Centerinfo'
import Session from "./Session"
import { GlobalContextLab } from '../../context/GlobalContextLab'


const Center = ({ data }) => {
    const { state } = useContext(GlobalContextLab)
    const [centerCount, setCenterCount] = useState(0)
    useEffect(() => {
        // window.scrollBy(0, 10);
        setCenterCount(centerCount + 1)
        return () => {

        }
    }, [state])
    return (
        <div className=" center border-2 border-gray-700 text-left rounded-xl my-4 mx-1 md:mx-0 w-full">
            {
                centerCount === 0 ? <div className="text-gray-400">No Vaccination Center Available to Book at this time,Kindly Check Later</div>
                    :
                        <div className="center_content block md:flex mx-auto py-1  ">
                            <Centerinfo data={data}></Centerinfo>
                            <div className="w-auto bg-indigo-600 session_container rounded-xl my-2 overflow-x-scroll">
                                <div className="flex">
                                    {data.sessions.map((ele, indx) => (
                                        <Session key={indx} ele={ele}></Session>
                                    ))}
                                </div>
                            </div>
                        </div>
            }
        </div>
    )
}

export default Center
