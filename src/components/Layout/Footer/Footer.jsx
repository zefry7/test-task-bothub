import React from "react";

function Footer(props) {


    return <footer className="footer">
        <div className="footer__wrapper">
            <div className="footer__content">
                <div className="footer__col">
                    <div className="footer__logo">
                        <img src={props?.content?.logo?.src} alt={props?.content?.logo?.alt} />
                    </div>
                    <p className="footer__text">{props?.content?.company}</p>
                    <p className="footer__text">{props?.content?.name}</p>
                    <p className="footer__text">{props?.content?.accept}</p>
                    <div className="footer__alri">
                        <img src={props?.content?.alri?.src} alt={props?.content?.alri?.alt} />
                    </div>
                </div>
                <div className="footer__wrapper-list">
                    {props?.content?.listCol?.map((col, key) => (
                        <div className="footer__col" key={key}>
                            <h3 className="footer__title">{col?.title}</h3>
                            <div className="footer__list">
                                {col?.anchor?.map((link, i) => (
                                    <a href="#" key={i} className="footer__link">{link}</a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </footer>
}

export default Footer