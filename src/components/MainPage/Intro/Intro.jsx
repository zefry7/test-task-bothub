import React from "react";
import Chat from "./Chat/Chat";

function Intro(props) {

    return <section className="intro">
        <div className="intro__wrapper">
            <div className="intro__content">
                <div className="intro__info">
                    <h1 className="intro__title">{props?.content?.title}</h1>
                    <p className="intro__text">{props?.content?.text}</p>
                    <button className="intro__button">{props?.content?.button}</button>
                </div>
                <Chat content={props?.content?.chat}/>
            </div>
            <div className="intro__grid">
            </div>
        </div>
    </section>
}

export default Intro;