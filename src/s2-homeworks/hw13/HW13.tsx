import React, { useState } from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import Buttons from './components/Buttons'
import Response from './components/Response'
import axios from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'

const HW13 = () => {
    const [code, setCode] = useState('')
    const [text, setText] = useState('')
    const [info, setInfo] = useState('')
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const send = (x?: boolean | null) => () => {
        const url =
            x === null
                ? 'https://xxxxxx.ccc'
                : 'https://samurai.it-incubator.io/api/3.0/homework/test'

        setCode('')
        setImage('')
        setText('')
        setInfo('...loading')
        setLoading(true)

        axios
            .post(url, { success: x })
            .then((res) => {
                setCode('Код 200!')
                setText('Успешно отправлено')
                setInfo('Запрос выполнен')
                setImage(success200)
            })
            .catch((e) => {
                if (e.response) {
                    switch (e.response.status) {
                        case 400:
                            setCode('Ошибка 400!')
                            setText('Неверный запрос')
                            setInfo('Проверьте параметры')
                            setImage(error400)
                            break
                        case 500:
                            setCode('Ошибка 500!')
                            setText('Сервер не отвечает')
                            setInfo('Попробуйте позже')
                            setImage(error500)
                            break
                        default:
                            setCode('Неизвестная ошибка!')
                            setText('Что-то пошло не так')
                            setInfo('Попробуйте ещё раз')
                            setImage(errorUnknown)
                    }
                } else {
                    setCode('Ошибка!')
                    setText('Нет соединения')
                    setInfo('Проверьте интернет')
                    setImage(errorUnknown)
                }
            })
            .finally(() => setLoading(false))
    }

    return (
        <div id="hw13">
            <div className={s2.hwTitle}>Homework #13</div>
            <div className={s2.hw}>
                <Buttons send={send} loading={loading} />
                <Response code={code} text={text} info={info} image={image} />
            </div>
        </div>
    )
}

export default HW13

