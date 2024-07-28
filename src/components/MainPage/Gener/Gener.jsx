import React from "react";

function Gener(props) {

    return <section className="gener">
        <div className="gener__wrapper">
            <div className="gener__content">
                <div className="gener__block-img">
                    <img src={props?.content?.img?.src} alt={props?.content?.img?.alt} />
                </div>
                <div className="gener__info">
                    <h2 className="gener__title">{props?.content?.title}</h2>
                    <p className="gener__text">{props?.content?.text}</p>
                    <button className="gener__button">{props?.content?.button}</button>
                </div>
            </div>
        </div>
    </section>
}

export default Gener;