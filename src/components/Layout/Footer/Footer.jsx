import React from "react";

function Footer(props) {
    const data = props?.content

    return <footer className="footer">
        <div className="footer__wrapper">
            <div className="footer__content">
                <div className="footer__col">
                    <div className="footer__logo">
                        <img src={data?.logo?.src} alt={data?.logo?.alt} />
                    </div>
                    <p className="footer__text">{data?.company}</p>
                    <p className="footer__text">{data?.name}</p>
                    <p className="footer__text">{data?.accept}</p>
                    <div className="footer__alri">
                        <img src={data?.alri?.src} alt={data?.alri?.alt} />
                    </div>
                </div>
                <div className="footer__wrapper-list">
                    {data?.listCol?.map((col, key) => (
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