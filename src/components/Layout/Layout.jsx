import data from "../../data";
import Header from "./Header/Header";
import React from "react";
import "../../styles/styles"
import MainPage from "../MainPage/MainPage";
import Footer from "./Footer/Footer";

function Layout() {

    return <>
        <Header content={data?.header}/>
        <MainPage content={data?.mainPage}/>
        <Footer content={data?.footer}/>
    </>
}

export default Layout;