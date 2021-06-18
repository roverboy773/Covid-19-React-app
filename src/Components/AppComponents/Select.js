import React from 'react'
import StateSelect from './StateSelect'
import India from "./india"

const Select = () => {
    return (
        <div className="select mx-auto bg-white w-11/12 py-4">
           <div className="w-full mx-auto flex flex-col md:flex-row justify-between">
              <StateSelect></StateSelect>
              <India></India>
            </div>
        </div>
    )
}

export default Select
