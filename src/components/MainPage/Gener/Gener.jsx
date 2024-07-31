import React from "react";

function Gener(props) {
    const data = props?.content

    return <section className="gener">
        <div className="gener__wrapper">
            <div className="gener__content">
                <div className="gener__block-img">
                    <img src={data?.img?.src} alt={data?.img?.alt} />
                </div>
                <div className="gener__info">
                    <h2 className="gener__title">{data?.title}</h2>
                    <p className="gener__text">{data?.text}</p>
                    <button className="gener__button">{data?.button}</button>
                </div>
            </div>
        </div>
    </section>
}

export default Gener;