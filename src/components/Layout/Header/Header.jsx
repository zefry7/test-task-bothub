import React, { useCallback, useRef, useState } from "react";

function Header(props) {
    const data = props.content;
    const dropdown = useRef();
    const langElement = useRef();
    const [langPage, setLangPage] = useState(data?.lang[0])

    const clickElementActive = useCallback((element, classActive) => {
        if (element) {
            element.classList.toggle(classActive)
        }
    }, [])

    const changeLang = useCallback((e) => {
        const { currentTarget } = e 
        langElement.current.classList.remove("header__lang_active")
        setLangPage(currentTarget.textContent);
    }, [])

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
                                    <div className="header__dropdown" ref={dropdown} onClick={() => clickElementActive(dropdown.current, "header__dropdown_active")}>
                                        <span className="header__link">{item?.name}</span>
                                        <div className="header__wrapper-product">
                                            {item?.select?.map((v, i) => (
                                                <div className="header__product">
                                                    <div className="header__product-img">
                                                        <img src={v?.img?.src} alt={v?.img?.alt} />
                                                    </div>
                                                    <div className="header__product-info">
                                                        <p className="header__product-name">{v?.title}</p>
                                                        <p className="header__product-text">{v?.text}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                                : <li>
                                    <a href="#" className="header__link">{item?.name}</a>
                                </li>

                        ))}
                    </ul>
                </nav>
                <div className="header__lang" ref={langElement}>
                    <p className="header__lang-select" onClick={() => clickElementActive(langElement.current, "header__lang_active")}>{langPage}</p>
                    <ul className="header__lang-block">
                        {data?.lang?.map((item, key) => (
                            <li className="header__lang-item" key={key} onClick={(e) => changeLang(e)}>{item}</li>
                        ))}
                    </ul>
                </div>
                <button className="header__sign-in">{data?.button?.text}</button>
            </div>
        </div>
    </section>
}

export default Header;