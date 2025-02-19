import React, { useState } from 'react';
import s from './Clock.module.css';

const Clock: React.FC = () => {
    const [timerId, setTimerId] = useState<number | undefined>(undefined);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);

    const start = () => {
        if (!timerId) {
            const id = window.setInterval(() => setDate(new Date()), 1000);
            setTimerId(id);
        }
    };

    const stop = () => {
        if (timerId) {
            clearInterval(timerId);
            setTimerId(undefined);
        }
    };

    const onMouseEnter = () => {
        setShow(true);
    };

    const onMouseLeave = () => {
        setShow(false);
    };

    // Форматируем значения
    const stringTime = date.toLocaleTimeString('ru-RU', { hour12: false }); // Часы:Минуты:Секунды
    const stringDate = date.toLocaleDateString('ru-RU'); // День.Месяц.Год
    const stringDay = date.toLocaleDateString('en-US', { weekday: 'long' }); // День недели на английском
    const stringMonth = date.toLocaleDateString('en-US', { month: 'long' }); // Месяц на английском

    return (
        <div className={s.clock}>
            <div
                id="hw9-watch"
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id="hw9-day">{stringDay}</span>,{' '}
                <span id="hw9-time">
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id="hw9-more">
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id="hw9-month">{stringMonth}</span>,{' '}
                            <span id="hw9-date">{stringDate}</span>
                        </>
                    ) : (
                        <br />
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <button
                    id="hw9-button-start"
                    disabled={!!timerId} // Заблокировать, если таймер уже запущен
                    onClick={start}
                >
                    Start
                </button>
                <button
                    id="hw9-button-stop"
                    disabled={!timerId} // Заблокировать, если таймер не запущен
                    onClick={stop}
                >
                    Stop
                </button>
            </div>
        </div>
    );
};

export default Clock;