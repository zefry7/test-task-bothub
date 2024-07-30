import data from "../../data";
import Header from "./Header/Header";
import React, { lazy, Suspense, useEffect, useState } from "react";
import "../../styles/styles"
import Footer from "./Footer/Footer";


const LazyMainPage = lazy(() => import("../MainPage/MainPage"))

function Layout() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreenWidth(window.innerWidth)
        })
    }, [])
    return <>
        <Header content={data?.header} screenWidth={screenWidth}/>
        <Suspense fallback={<p className="loading">Loading...</p>}>
            <LazyMainPage content={data?.mainPage} screenWidth={screenWidth}/>
        </Suspense>
        <Footer content={data?.footer}/>
    </>
}

export default Layout;