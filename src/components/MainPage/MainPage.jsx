import Descr from "./Descr/Descr";
import React from "react";
import Gener from "./Gener/Gener";

function MainPage(props) {

    return <main className="main">
        <Descr content={props?.content?.descr}/>
        <Gener content={props?.content?.gener}/>
    </main>
}

export default MainPage;