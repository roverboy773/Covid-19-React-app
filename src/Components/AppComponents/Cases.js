import React, { useContext, useEffect ,useState} from 'react'
import CasesComponent from './CasesComponent'
import Pending from './Pending'
import { GlobalContext } from "../../context/GlobalContext"


const Cases = () => {

    const { state,setCases } = useContext(GlobalContext)
    const [pending, setPending] = useState(true)
    const [updatedTime, setUpdatedTime] = useState('0:0:0:0')
    //console.log(state)
  
    let time;
    useEffect(() => {
        let mounted=true
    
        fetch("https://api.covid19india.org/data.json")
            .then((res) => { setPending(true) ;return res.json() })
            .then((res) => {
               
                res.statewise.map((local) => {
                    if (local.state === state.region) {
                       //console.log(state.region)
                        setUpdatedTime(local.lastupdatedtime)
                        setCases({
                            confirmed:{
                                total: local.confirmed,
                                new:0,
                            },
                            active:{
                                total:local.active,
                                new:0
                            },
                            deaths:{
                                total:local.deaths,
                                new:0
                            },
                            recovered:{
                                total: local.recovered,
                                new:0,
                            } 
                        })  
                 //   console.log([state.totalConfirmed,state.discharged,state.deaths])
                    }

                })
            
                
            }).then(()=>{
                setPending(false)
                if(window.innerWidth<=425)
                  window.scrollTo(0,1620)
            })

            return()=>{
                mounted=false
            }
            
    },[state.region] )


//console.log('pending',pending,'state',state )
    return (
        <div className="w-11/12  mx-auto">
       
          <div className=" md:flex flex-row pb-12 relative">
                        {/* total confirmed */}
                 <CasesComponent type="cases" numbers={state.cases.confirmed} />
                  {/* active cases component */}
                    <CasesComponent type="actives" numbers={state.cases.active} /> 
                    {/* {/* recovered cases compoent  */}
                    <CasesComponent type="recovered" numbers={state.cases.recovered} />
                    {/* fatalities components */}
                    <CasesComponent type="deaths" numbers={state.cases.deaths} />
                    
                    <h3 className="font-bold absolute bottom-0 right-0 text-center text-gray-400">Last Updated <span className="block">{updatedTime}</span></h3>
                    
            </div>
           
           
                 
          
        
        </div>
    )
}

export default Cases
