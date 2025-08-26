import React from 'react'
import s from '../HW13.module.css'

type ResponseProps = {
    code: string
    text: string
    info: string
    image: string
}

const Response: React.FC<ResponseProps> = ({ code, text, info, image }) => {
    return (
        <div className={s.responseContainer}>
            <div className={s.imageContainer}>
                {image && <img src={image} className={s.image} alt="status" />}
            </div>
            <div className={s.textContainer}>
                <div id="hw13-code" className={s.code}>{code}</div>
                <div id="hw13-text" className={s.text}>{text}</div>
                <div id="hw13-info" className={s.info}>{info}</div>
            </div>
        </div>
    )
}

export default Response
