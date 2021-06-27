import React, { useEffect, useState } from 'react'
import List from './List'

import Pending from "../AppComponents/Pending"
import '../../css/Lab.css'
import moment from 'moment'

const ListContainer = () => {

    const [pinCode, setPinCode] = useState('')
    const [pending, setPending] = useState(false)
    const [Centers, setCenters] = useState([])
    const [error, setError] = useState("")

    const dateString = moment(new Date()).format('L');
    let date = dateString.split('/')[1]
    let month = dateString.split('/')[0]
    let year = dateString.split('/')[2]

    const getCenters = async (e) => {
        setPending(true);

        fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pinCode}&date=${date}-${month}-${year}`)
            .then((res) => { return res.json() })
            .then((res) => {
                //console.log(res)
                setPending(false);
                if (res.hasOwnProperty('error'))
                    setError(`*${res.error}`)
                if (res.hasOwnProperty('centers')) {
                    let arr = [];
                    res.centers.map(element => {
                        //console.log(element)
                        arr.push(element)
                        //   console.log(Centers)
                    });
                    setCenters((Centers) => arr)
                }

            }).catch((e) => setError(e))
    }

    useEffect(() => {
        const ac = new AbortController();
        setCenters([])
        getCenters()

        return () => {
            ac.abort();
            setError("");
            setCenters([])
        }
    }, [pinCode])

    return (
        <div className='container mx-auto text-center'>
            <h3 className="text-xl mt-6 text-gray-400">Check your nearest vaccination center and slots availability</h3>
            <h4 className="text-lg text-gray-200">Enter your Pin Code</h4>
            <input type="number" className="outline-none rounded-xl text-center text-lg border-2 border-gray-400 px-2 m-2 w-11/12 md:w-1/5" onChange={(e) => { setPinCode(e.target.value) }} autoFocus />
            <p className="text-md text-red-400 ">{error}</p>
            
            {
                pending && <Pending></Pending>
            }
            {pending !== true && <List centers={Centers} error={error}></List>}
        </div>
    )
}

export default ListContainer
