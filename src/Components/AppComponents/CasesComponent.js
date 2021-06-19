import React from 'react'

const CasesComponent = ({type,numbers}) => {
   let color=""
    if(type==='cases')
     color="red"
     else if(type==="actives")
     color="yellow"
     else if(type==="recovered")
     color="green"
     else if(type==="deaths")
     color="purple"
 
     

    return (
        <div className={`caseComponent rounded-xl border-2 hover:border-${color}-500 text-center w-full mt-4 py-2 md:m-4 md:py-4`}>
       
                <div>
                    <h4 className="font-bold text-lg text-gray-400">Total {type.toUpperCase()}</h4>
                    <p className={`text-${color}-500 font-bold text-2xl`}>{numbers.total}</p>
                </div>
           
           {numbers.new>0 && 
                <div>
                   <h4 className="font-bold text-gray-400">Daily </h4>
                    <p className={`text-${color}-500 font-bold text-xl`}>{numbers.new}</p>
                </div> 
            }
        </div>
    )
}

export default CasesComponent
