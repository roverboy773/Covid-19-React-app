import React,{useState,useEffect,useContext} from 'react'
import { GlobalContextLab } from '../../context/GlobalContextLab'

const Session = ({ele}) => {
const {state} = useContext(GlobalContextLab)
    const [legitSession, setlegitSession] = useState(true)

    useEffect(() => {
        let flag=true
        for(let prop in state){
            if(!state[prop].includes(ele[prop]) && state[prop].length>0)
            flag=flag && false  
        }

        if(flag===false)
        setlegitSession(false)
        else setlegitSession(true)

        return () => {
        }
    }, [state,legitSession])
    return (
    <div className="m-2 w-full">
        {legitSession &&
        <div className="m-1 md:m-3 rounded-xl w-full md:w-auto p-2 bg-blue-100">
            <h3 className="bg-indigo-700 rounded-b-xl mb-2 text-white text-center w-11/12 mx-auto">{ele.date}</h3>
            <div className="flex justify-between">
            {
                ele.min_age_limit > 18 ?
                    <button className="bg-blue-400 px-4 rounded-xl text-white">{ele.min_age_limit}+</button>
                    :
                    <button className="bg-yellow-400 px-4 rounded-xl">{ele.min_age_limit}+</button>
            }
            {
                ele.available_capacity===0 ? <button className="bg-red-600 text-white rounded-xl px-4 mx-2">BOOKED</button>
                :
                <span className="font-bold text-center"><span className="mr-1 font-normal">Capacity</span> {ele.available_capacity}</span>
            }
            </div>
            <h3 className="font-bold text-center my-2 text-sm">{ele.vaccine}</h3>

            <h3><span className=" px-4  bg-green-500 rounded-xl text-white mr-1 ">Dose1</span>{ele.available_capacity_dose1}</h3>
            <h3><span className=" px-4 bg-yellow-900 rounded-xl text-white mr-1 ">Dose2</span>{ele.available_capacity_dose2}</h3>
        </div>
        }
    </div>
    )
}

export default Session
