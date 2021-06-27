import React, { useState,useEffect } from 'react'
import AllBlogs from "./AllBlogs"
import IndiBlog from "./IndiBlog"
import CreateBlog from "./CreateBlog"
import { GlobalProvider } from '../../context/GlobalContextJournal'

const Content = () => {
    const [refresh, setRefresh] = useState(false)
    const [journal, setJournal] = useState('')
    const [flag, setFlag] = useState(false)
    const [width, setWidth] = useState('1/3')

    useEffect(() => {
        if (flag && window.innerWidth >= 768) {
            setWidth('1/2')
        }else  if (!flag && window.innerWidth >= 768) {
            setWidth('1/3')
        }
        if (window.innerWidth < 768)
            setWidth('full')
        return () => {

        }
    }, [flag])

    // console.log(flag)

    return (
        <GlobalProvider>
            <div className="md:flex block w-full mx-auto my-4 justify-between">
                <div className={`w-${width}`}>
                    <CreateBlog refresh={(data) => { setRefresh(data) }} Create={(data) => { setFlag(data) }} ></CreateBlog>
                    <AllBlogs refresh={refresh} bloguuid={(uuid) => setJournal(uuid)}></AllBlogs>
                </div>
                <IndiBlog blog={journal}></IndiBlog>
            </div>

        </GlobalProvider>
    )
}

export default Content
