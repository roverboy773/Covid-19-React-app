import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const AllBlogs = ({ refresh, bloguuid }) => {

    const [blogs, setBlogs] = useState('')
    const [uuid, setuuid] = useState('')
    const [loading, setLoading] = useState(false)

    if(uuid==='' && blogs!=='')
    bloguuid(blogs[0].uuid)
    else
    bloguuid(uuid)

    const handleClick=(blog)=>{

        const res=axios.post(`https://covid-19-journals.herokuapp.com/update-views/${blog.uuid}`)
         //console.log(res)
         if(res)
        setuuid(blog.uuid)

        if(document.querySelector('.indi-container')){
        const target=document.querySelector('.indi-container')
        target.scrollIntoView({behavior:'smooth',top:0})
        }
    }
    // console.log(uuid)
    useEffect(() => {
          setLoading(true)
        //   https://covid-19-journals.herokuapp.com
        axios.get('https://covid-19-journals.herokuapp.com/allJournals')
            .then((res)=>{
                // console.log(res);
               return res.data
            })
            .then(res => {
                setLoading(false)
                setBlogs(res.data)
            })

        return () => {

        }
    }, [refresh])

    return (
        <div className="w-full">
            {
                loading ? <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-blue-400 h-12 w-12"></div>
                    <div class="flex-1 space-y-4 py-1">
                        <div class="h-4 bg-blue-400 rounded w-3/4"></div>
                        <div class="space-y-2">
                            <div class="h-4 bg-blue-400 rounded"></div>
                            <div class="h-4 bg-blue-400 rounded w-5/6"></div>
                        </div>
                    </div>
                </div>
            </div>
             :
                typeof blogs === 'string' ?
                    <div className="w-full font-bold text-lg ">
                        <h3 className="text-center">{blogs}</h3>
                    </div>
                    :
                    blogs.map((blog, indx) => (
                        <div className="w-11/12 mx-auto mb-2 bg-gray-200 rounded-md py-2 px-2" key={indx}>

                            <h3 className="text-blue-500 font-bold text-xl cursor-pointer heading"
                              onClick={()=>{handleClick(blog)}}  >{`# ${blog.heading}`}</h3>

                            <div className="text-gray-600 text-right">
                                <p className="text-lg">{blog.author}<i className="las la-pen border-2 border-gray-400 mx-2 rounded-xl mr-1"></i></p>
                                <p>{blog.views}<i className="lar la-eye mx-2"></i></p>
                            </div>
                        </div>

                    ))

            }
        </div>
    )
}

export default AllBlogs
