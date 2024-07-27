import React from "react";

function Descr(props) {

    return <section className="descr">
        <div className="descr__wrapper">
            <div className="descr__content">
                <h2 className="descr__title">
                    {props?.content?.title}
                </h2>
                <div className="descr__list">
                    {props?.content?.list?.map((item, key) => (
                        <div className="descr__item" key={key}>
                            <h3 className="descr__item-title">{item?.title}</h3>
                            <p className="descr__item-text">{item?.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
}

export default Descr;