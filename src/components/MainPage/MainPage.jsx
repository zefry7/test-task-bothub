import Descr from "./Descr/Descr";
import React from "react";
import Gener from "./Gener/Gener";
import Intro from "./Intro/Intro";

function MainPage(props) {

    return <main className="main">
        <Intro content={props?.content?.intro} screenWidth={props?.screenWidth}/>
        <Descr content={props?.content?.descr}/>
        <Gener content={props?.content?.gener}/>
    </main>
}

export default MainPage;