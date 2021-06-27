import React from 'react'
import Banner from "./Components/labsComponent/Banner"
import ListContainer from "./Components/labsComponent/ListContainer"
import Header from './Components/labsComponent/Header'
import Navbar from './Components/AppComponents/Navbar'
import { GlobalProvider } from './context/GlobalContextLab'
import './css/Lab.css'

const Labs = () => {
    return (
        <GlobalProvider>
            <Header></Header>
            <div className="content_wrapper lg:flex w-full lg:w-11/12 mx-auto my-8">
                <Navbar />
                <div className="content bg-white py-8 lg:w-11/12 ">
                    <Banner></Banner>
                    <ListContainer></ListContainer>
                </div>
            </div>
        </GlobalProvider>
    )
}

export default Labs
