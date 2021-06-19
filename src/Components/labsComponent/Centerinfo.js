import React from 'react'

const Centerinfo = ({ data }) => {
    return (
        <div className="w-11/12 md:w-1/5 mx-2">
            <h3 className="text-lg font-bold text-gray-200 my-2">{data.name}</h3>
            <div className="flex justify-between my-2">
                <h4 className="mr-1 font-bold text-gray-300">Address</h4>
                <p className="block w-2/3 text-sm text-gray-500">{data.address}</p>
            </div>

            {data.fee_type === 'Paid'
                ?
                <div>
                    <button className="bg-blue-500 text-white font-bold px-4 py-1 rounded-xl mr-2">
                        {data.fee_type}  
                    </button>
                    <span className="text-gray-400">₹{data.vaccine_fees[0].fee}/-</span>
                </div>
                :
                <button className="bg-green-400 font-bold text-white px-4 py-1  rounded-xl my-2">
                    {data.fee_type}
                </button>
            }

        </div>
    )
}

export default Centerinfo
