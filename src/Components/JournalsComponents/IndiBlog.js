import React, { useState, useEffect } from 'react'
import axios from 'axios'

// import { htmlToText } from 'html-to-text'

const IndiBlog = ({ blog }) => {
    const [indi, setIndi] = useState('')
    const [error, setError] = useState(null)
    const [toggleBlogcontent, setToggleBlogContent] = useState(false)
    const [toggleInstruction, setToggleInstruction] = useState('Read More')
    const [visibility, setVisibility] = useState('hidden')
    const [loading, setLoading] = useState(false)
    // console.log(blog)
   
    if (toggleBlogcontent === false && toggleInstruction === 'Read Less')
        setToggleInstruction('Read More')
    else if (toggleBlogcontent === true && toggleInstruction === 'Read More') setToggleInstruction('Read Less')

    const handleButton = () => {
        setToggleBlogContent(!toggleBlogcontent)

        if (toggleBlogcontent) {
            setVisibility('hidden')
        } else setVisibility('block')
        if (document.querySelector('.indi-content')) {
            //console.log('button')
            const target = document.querySelector('.indi-content')
            target.scrollIntoView({ behavior: "smooth", top: 0 })
        }
    }

    const handleUpArrow = () => {
        const target = document.querySelector('.indi')
        target.scrollIntoView({ behavior: "smooth", top: 0 })
    }


    useEffect(() => {
        setLoading(true)
        axios.get(`https://covid-19-journals.herokuapp.com/show-Blog/${blog}`)
            .then((res) => {
                if (res.status === 200) {
                    //console.log(res)
                    if (res.data.data.length)
                        setIndi(res.data.data[0])
                }
                else if (res.data.msg)
                    setError(res.data.msg)
                setLoading(false)
            })


        return () => {
            setError('')
            setIndi('')
        }
    }, [blog])


    return (
        <div className="w-full">
            {loading ? <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
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
                <div>
                    {
                         error ? <div className=" text-white bottom-24 z-10 ">
                            {error}
                        </div>
                            :
                            <div className="rounded-md indi-container">
                                <div className=" relative">
                                    <div className="indi md:rounded-xl w-full relative">
                                        <img src={`https://covid-19-journals.herokuapp.com/${indi.image}`} alt="" className="inline-block md:rounded-xl h-full w-full object-fill" />
                                    </div>
                                    <div className="absolute info_container w-full ">
                                        <div className="w-full ">
                                            <div className="indiblog py-2 leading-8 text-white  ">
                                                <h2 className="xl:text-5xl lg:text-3xl text-2xl px-2 z-10">{indi.heading} </h2>
                                                <p className="text-lg px-2 text-gray-400 info rounded-b-md z-10">{indi.description}</p>
                                                <button className="bg-green-500 btn-toggle-content text-white py-1 mx-2 px-4 rounded-xl float-right"
                                                    onClick={handleButton}>{toggleInstruction}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`indi-content mt-4 ${visibility} bg-gray-100 rounded-md p-3`}>
                                    <div className="content-body text-black" dangerouslySetInnerHTML={{ __html: indi.body }} />
                                    <i className="las la-arrow-circle-up float-right text-5xl text-black cursor-pointer"
                                        onClick={handleUpArrow}></i>
                                </div>
                            </div>

                    }
                </div>

            }
        </div>
    )
}

export default IndiBlog


{/* <p>gfhfghg</p> */ }



