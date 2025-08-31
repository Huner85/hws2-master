import React, { useEffect, useState } from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW14.module.css'
import axios from 'axios'
import SuperDebouncedInput from './common/c8-SuperDebouncedInput/SuperDebouncedInput'
import { useSearchParams } from 'react-router-dom'

// API
const getTechs = (find: string) => {
    return axios
        .get<{ techs: string[] }>(
            'https://samurai.it-incubator.io/api/3.0/homework/test2',
            { params: { find } }
        )
        .catch((e) => {
            alert(e.response?.data?.errorText || e.message)
        })
}

// UI-компоненты
const Loader: React.FC<{ isLoading: boolean }> = ({ isLoading }) => (
    <div id="hw14-loading" className={s.loading}>
        {isLoading ? '...ищем' : <br />}
    </div>
)

const Tech: React.FC<{ name: string }> = ({ name }) => (
    <div id={'hw14-tech-' + name} className={s.tech}>
        {name}
    </div>
)

const TechList: React.FC<{ techs: string[] }> = ({ techs }) => (
    <>
        {techs.map((t) => (
            <Tech key={t} name={t} />
        ))}
    </>
)

const HW14 = () => {
    const [find, setFind] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [techs, setTechs] = useState<string[]>([])
    const [searchParams, setSearchParams] = useSearchParams()

    const sendQuery = (value: string) => {
        setLoading(true)
        getTechs(value)
            .then((res) => {
                if (res?.data?.techs) setTechs(res.data.techs) // сохранить пришедшие данные
            })
            .finally(() => setLoading(false))
    }

    const onChangeText = (value: string) => {
        setFind(value)
        // добавить/заменить значение в квери урла
        setSearchParams({ find: value })
    }

    // инициализация из URL
    useEffect(() => {
        const params = Object.fromEntries(searchParams)
        const initial = params.find || ''
        setFind(initial)
        sendQuery(initial)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) // автотесты ожидают поведение "один раз на маунт"

    return (
        <div id="hw14">
            <div className={s2.hwTitle}>Homework #14</div>

            <div className={s2.hw}>
                <SuperDebouncedInput
                    id="hw14-super-debounced-input"
                    value={find}
                    onChangeText={onChangeText}
                    onDebouncedChange={sendQuery}
                    placeholder="Начните вводить технологию..."
                />

                <Loader isLoading={isLoading} />
                <TechList techs={techs} />
            </div>
        </div>
    )
}

export default HW14


