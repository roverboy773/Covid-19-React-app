import React,{useContext} from 'react'
import {GlobalContext} from "../../context/GlobalContext"

const StateSelect = () => {
    const {state,setRegion}=useContext(GlobalContext)

    return (
        <div className="text-center font-bold md:flex flex-row justify-around  w-full py-2 md:w-4/5">
        <div >
            <label htmlFor="state" className="font-bold my-3 block text-gray-400">Select Your State/UT</label>
            <select name="state" id="state" 
            className=" selectState block border-2 p-2 rounded-md text-md outline-none w-11/12 bg-gray-200" 
              onChange={(e)=>{
                  setRegion(e.target.value);
                  if(window.innerWidth<=1024)
                   window.scrollTo({top:1200,behavior:'smooth'})
                   }}>
                <option value={state.region}>{state.region}</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
            </select>
           </div>
                <div className="py-2 text-gray-400">
                   <h2 className="text-center"><span className="mr-2">OR</span>Mark your region on Map</h2>
                </div>
        </div>
    )
}

export default StateSelect
