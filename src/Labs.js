import React,{useContext} from 'react'
import Banner from "./Components/labsComponent/Banner"
import ListContainer from "./Components/labsComponent/ListContainer"
import Header from './Components/labsComponent/Header'
import Navbar from './Components/AppComponents/Navbar'
import { GlobalProvider } from './context/GlobalContextLab'
import './css/index.css'

const Labs = () => {
    return (
        <GlobalProvider>
            <Header></Header>
            <div className="content_wrapper md:flex w-full md:w-11/12 mx-auto my-8 mb-20">
                <Navbar />
                <div className="content bg-white md:w-11/12 ">
                    <Banner></Banner>
                    <ListContainer></ListContainer>
                </div>
            </div>
        </GlobalProvider>
    )
}

export default Labs
