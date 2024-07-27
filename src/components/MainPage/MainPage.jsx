import Descr from "./Descr/Descr";
import React from "react";

function MainPage(props) {

    return <main>
        <Descr content={props?.content?.descr}/>
    </main>
}

export default MainPage;