const data = {
    header: {
        logo: {
            src: "./img/Header/logo.svg",
            alt: "Логотип"
        },
        nav: [
            {
                name: "Продукты",
                select: [
                    {
                        title: "Агрегатор нейросетей BotHub",
                        text: "ChatGPT на базе 3.5 и 4.0 версии OpenAI",
                        img: {
                            src: "./img/Header/Icon_bothub-agg.svg",
                            alt: "Логотип продукта"
                        }
                    },
                    {
                        title: "Telegram бот",
                        text: "Удобный бот в Telegram который всегда под рукой",
                        img: {
                            src: "./img/Header/Icon_tg-colored.svg",
                            alt: "Логотип продукта"
                        }
                    },
                    {
                        title: "Бизнес бот",
                        text: "ChatGPT для эффективного решения бизнес задач",
                        img: {
                            src: "./img/Header/Icon_business-colored.svg",
                            alt: "Логотип продукта"
                        }
                    }
                ]
            },
            {
                name: "Пакеты"
            },
            {
                name: "API"
            },
            {
                name: "Блог"
            }
        ],
        lang: ["RU", "EN", "ES", "FR", "PT"],
        button: {
            text: "Авторизация",
        }
    }
}

export default data