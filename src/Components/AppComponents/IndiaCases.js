import React,{useEffect,useState} from 'react'
import CasesComponent from "./CasesComponent"
import previosDate from '../../helperFunctions/previosDate'
const IndiaCases = () => {

    const [IndiaCases, setIndiaCases] = useState({
        confirmed:{
            total: 0,
            new:0,
        },
        deaths:{
            total:0,
            new:0
        },
        recovered:{
            total: 0,
            new:0,
        } 
    })
    //console.log(state)
    useEffect(() => {
        fetch("https://api.covid19india.org/data.json")
            .then((res) => {  return res.json() })
            .then((res) => {
              
                res.cases_time_series.map((local) => {
                    if (local.date === previosDate()) {
                       
                        setIndiaCases({
                            confirmed:{
                                total: local.totalconfirmed,
                                new:local.dailyconfirmed,
                            },
                            deaths:{
                                total:local.totaldeceased,
                                new:local.dailydeceased
                            },
                            recovered:{
                                total: local.totalrecovered,
                                new:local.dailyrecovered,
                            } 
                        })  
                         //   console.log([state.totalConfirmed,state.discharged,state.deaths])
                    }

                })
            })
            
    },[] )


    return (
        <div className="md:flex justify-between pb-16 md:pb-12 relative w-11/12 mx-auto">
                    <CasesComponent type="cases" numbers={IndiaCases.confirmed} />
                    {/* {/* recovered cases compoent  */}
                    <CasesComponent type="recovered" numbers={IndiaCases.recovered} />
                    {/* total fatalities components */}
                    <CasesComponent type="deaths" numbers={IndiaCases.deaths} />
                    
                    <h3 className="font-bold absolute bottom-0 right-0 text-center text-gray-400">Last Updated <span className="block">{previosDate()}</span></h3>
        </div>
    )
}

export default IndiaCases
