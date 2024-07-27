import data from "../../data";
import Header from "./Header/Header";
import React from "react";
import "../../styles/styles"

function Layout() {

    return <>
        <Header content={data?.header}/>
    </>
}

export default Layout;