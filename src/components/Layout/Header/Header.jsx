import React, { useCallback, useEffect, useRef, useState } from "react";

function Header(props) {
    const data = props.content;
    const screenWidth = props.screenWidth
    const dropdown = useRef();
    const langElement = useRef();
    const navElement = useRef()
    const buttonMenu = useRef()
    const headerBlock = useRef()
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

    const clickMenu = useCallback(() => {
        buttonMenu.current.classList.toggle("header__button-menu_active")
        navElement.current.classList.toggle("header__nav_active")
        document.body.classList.toggle("scroll-lock")
        headerBlock.current.classList.toggle("header_height")
    }, [])

    useEffect(() => {
        if (screenWidth > 840) {
            buttonMenu.current.classList.remove("header__button-menu_active")
            navElement.current.classList.remove("header__nav_active")
            dropdown.current.classList.remove("header__dropdown_active")
            document.body.classList.remove("scroll-lock")
            headerBlock.current.classList.remove("header_height")
        }
    }, [screenWidth])

    return <header className="header" ref={headerBlock}>
        <div className="header__wrapper">
            <div className="header__content">
                <div className="header__logo">
                    <img src={data?.logo?.src} alt={data?.logo?.alt} />
                </div>
                <div className="header__line"></div>
                <nav className="header__nav" ref={navElement}>
                    <ul className="header__block-link">
                        {data?.nav?.map((item, key) => (
                            (key == 0)
                                ? <li key={key}>
                                    <div className="header__dropdown" ref={dropdown}>
                                        <span className="header__link" onClick={() => clickElementActive(dropdown.current, "header__dropdown_active")} tabIndex={0}>{item?.name}</span>
                                        <div className="header__wrapper-product">
                                            {item?.select?.map((v, i) => (
                                                <div className="header__product" key={i}>
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
                                : <li key={key}>
                                    <a href="#" className="header__link">{item?.name}</a>
                                </li>
                        ))}
                    </ul>
                    {screenWidth <= 640 &&
                        <button className="header__sign-in">{data?.button?.text}</button>
                    }
                </nav>
                <div className="header__lang" ref={langElement}>
                    <button className="header__lang-select" onClick={() => clickElementActive(langElement.current, "header__lang_active")}>{langPage}</button>
                    <ul className="header__lang-block">
                        {data?.lang?.map((item, key) => (
                            <li key={key}>
                                <button className="header__lang-item" onClick={(e) => changeLang(e)} tabIndex={0}>{item}</button>
                            </li>
                        ))}
                    </ul>
                </div>
                {screenWidth > 640 &&
                    <button className="header__sign-in">{data?.button?.text}</button>
                }
                <button className="header__button-menu" aria-label="Кнопка меню" ref={buttonMenu} onClick={clickMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>
}

export default Header;