import React from "react";

function Header(props) {
    const data = props.content;

    return <section className="header">
        <div className="header__wrapper">
            <div className="header__content">
                <div className="header__logo">
                    <img src={data?.logo?.src} alt={data?.logo?.alt} />
                </div>
                <div className="header__line"></div>
                <nav className="header__nav">
                    <ul className="header__block-link">
                        {data?.nav?.map((item, key) => (
                            (key == 0)
                                ? <li>
                                    <div className="header__dropdown">
                                        <span className="header__link">{item?.name}</span>
                                        {item?.option?.map((v, i) => (
                                            v
                                        ))}
                                    </div>
                                </li>
                                : <li>
                                    <a href="#" className="header__link">{item?.name}</a>
                                </li>

                        ))}
                    </ul>
                </nav>
                <div className="header__lang" >
                    {data?.lang}
                </div>
                <button className="header__sign-in">{data?.button?.text}</button>
            </div>
        </div>
    </section>
}

export default Header;