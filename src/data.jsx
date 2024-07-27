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
    },
    mainPage: {
        descr: {
            title: "Возможности ChatGPT",
            list: [
                {
                    title: "Создание увлекательного контента",
                    text: "Вы когда-нибудь мечтали написать интересную книгу или статью, но не знали, с чего начать? ChatGPT отлично справляется с генерацией текстов на любые темы. Опишите ему свою идею - и он создаст увлекательный контент, который захватит внимание читателей."
                },
                {
                    title: "Решение сложных задач",
                    text: "Задачи по математике или программированию иногда кажутся неразрешимыми головоломками. Но не для ChatGPT! Он проанализирует проблему и предложит пошаговое решение. Вы быстро разберетесь в сложных концепциях благодаря его доступным объяснениям."
                },
                {
                    title: "Разработка и отладка кода",
                    text: "ChatGPT может помочь в написании и исправлении кода. Он проанализирует ваш код, найдет ошибки и предложит способы их исправления. Также ChatGPT способен самостоятельно писать код по вашим указаниям - к примеру, для создания веб-сайта или приложения."
                },
                {
                    title: "Перевод текстов между языками",
                    text: "ChatGPT отлично справляется с переводом текстов на десятки языков. Теперь вам не нужно тратить время на поиск переводчика - просто попросите ChatGPT, и он мгновенно переведет любой текст на нужный вам язык."
                },
                {
                    title: "Помощь в написании резюме",
                    text: "Вы ищете новую работу и нуждаетесь в резюме, которое произведет впечатление на работодателя? ChatGPT поможет создать резюме, идеально подходящее под ваши навыки и опыт. Опишите ему желаемую вакансию - и получите готовое резюме в нужном формате."
                },
                {
                    title: "Виртуальный помощник в жизни",
                    text: "Не знаете, как приготовить новое блюдо или спланировать отпуск? Просто спросите ChatGPT! Он выступит в качестве виртуального помощника в повседневных задачах, предоставив полезную информацию и рекомендации в любой сфере жизни."
                }
            ]
        }
    }
}

export default data