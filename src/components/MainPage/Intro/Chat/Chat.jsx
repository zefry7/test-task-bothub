import React, { useCallback, useEffect, useRef, useState } from "react";
import { Configuration, OpenAIApi } from "openai-edge";

function Chat(props) {
    const inputChat = useRef()
    const messageBlock = useRef()
    const [list, setList] = useState([])
    const newMessage = useRef(true)
    const buttonSend = useRef()

    const messageBot = useCallback((myMessage) => {
        const configuration = new Configuration({
            apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MGE2ZTgxLTRiMDMtNGQxNC1hMGQxLWI3N2RkZjlkMDY2ZiIsImlzRGV2ZWxvcGVyIjp0cnVlLCJpYXQiOjE3MjA1Mjk0NDgsImV4cCI6MjAzNjEwNTQ0OH0.Dm8QJpXfX2ChWcYZ5c0SLNzGpmEmh1dYPAMW3wz4v5M",
            basePath: "https://bothub.chat/api/v2/openai/v1",
        });
        const openai = new OpenAIApi(configuration);

        const result = (async () => {
            const completion = await openai.createChatCompletion({
                messages: [
                    { role: "user", content: myMessage },
                ],
                model: "gemini-pro",
            });
            const message = (await completion.json()).choices[0].message.content;

            return message
        })();

        return result
    }, [])

    const clickSend = useCallback(async () => {
        const { value } = inputChat.current

        if (newMessage.current == true) {
            if (value) {
                newMessage.current = false
                setList([...list, <MyMessage text={value} key={list.length + 1}/>])
                inputChat.current.value = null
                const result = await messageBot(value)
                setList([...list, <MyMessage text={value} key={list.length + 1}/>, <BotMessage text={result} key={list.length + 2}/>])
                newMessage.current = true
            }
        }
    }, [list])

    useEffect(() => {
        messageBlock.current.scrollTo({
            top: 10000,
            behavior: 'smooth'
        })
    }, [list])

    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if(e.keyCode == 13) {
                buttonSend.current.click()
            }
        })
    }, [])

    return <div className="chat">
        <div className="chat__header">
            <p className="chat__header-name">
                {props?.content?.title[0]}
                <span>{props?.content?.title[1]}</span>
            </p>
            <label className="chat__header-checkbox">
                {props?.content?.label}
                <input type="checkbox" className="chat__header-box" />
            </label>
        </div>
        <div className="chat__wrapper-block">
            <div className="chat__message-block" ref={messageBlock}>
                {list?.map((v, i) => (
                    v
                ))}
            </div>
            <div className="chat__wrapper-input">
                <input type="text" className="chat__input" placeholder={props?.content?.placeholder} ref={inputChat} />
                <button className="chat__button" aria-label="Кнопка отправки запроса" onClick={clickSend} ref={buttonSend}></button>
            </div>
        </div>
    </div>
}

function MyMessage(props) {
    return <div className="message message__my">
        <p className="message__text">{props?.text}</p>
    </div>
}

function BotMessage(props) {
    return <div className="message message__bot">
        <p className="message__text">{props?.text}</p>
    </div>
}

export default Chat;