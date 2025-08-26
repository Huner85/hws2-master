import React from 'react'
import s from '../HW13.module.css'
import SuperButton from '../../hw04/common/c2-SuperButton/SuperButton'

type ButtonsProps = {
    send: (x?: boolean | null) => () => void
    loading: boolean
}

const Buttons: React.FC<ButtonsProps> = ({ send, loading }) => {
    return (
        <div className={s.buttonsContainer}>
            <SuperButton id="hw13-send-true" onClick={send(true)} disabled={loading}>
                Send true
            </SuperButton>
            <SuperButton id="hw13-send-false" onClick={send(false)} disabled={loading}>
                Send false
            </SuperButton>
            <SuperButton id="hw13-send-undefined" onClick={send(undefined)} disabled={loading}>
                Send undefined
            </SuperButton>
            <SuperButton id="hw13-send-null" onClick={send(null)} disabled={loading}>
                Send null
            </SuperButton>
        </div>
    )
}

export default Buttons
