import React, { useEffect, useState } from "react";
import Chat from "./Chat/Chat";

function Intro(props) {
    let [screenWidth, setScreenWidth] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreenWidth(window.innerWidth)
        })
    }, [])

    return <section className="intro">
        <div className="intro__wrapper">
            <div className="intro__content">
                <div className="intro__info">
                    {screenWidth > 1024
                        ? <h1 className="intro__title">{props?.content?.title[0]}</h1>
                        : <h1 className="intro__title">{props?.content?.title[1]}</h1>
                    }
                    {screenWidth > 1024
                        ? <p className="intro__text">{props?.content?.text[0]}</p>
                        : <p className="intro__text">{props?.content?.text[1]}</p>
                    }
                    <button className="intro__button">{props?.content?.button}</button>
                </div>
                <Chat content={props?.content?.chat} />
            </div>
            <div className="intro__grid">
            </div>
        </div>
    </section>
}

export default Intro;