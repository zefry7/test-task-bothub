import data from "../../data";
import Header from "./Header/Header";
import React, { useEffect, useState } from "react";
import "../../styles/styles"
import Footer from "./Footer/Footer";
import MainPage from "../MainPage/MainPage";


function Layout() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreenWidth(window.innerWidth)
        })
    }, [])
    return <>
        <Header content={data?.header} screenWidth={screenWidth}/>
        <MainPage content={data?.mainPage} screenWidth={screenWidth}/>
        <Footer content={data?.footer}/>
    </>
}

export default Layout;