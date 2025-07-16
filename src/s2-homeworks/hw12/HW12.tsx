// src/s2-homeworks/hw12/HW12.tsx

import React, { useEffect } from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import { useDispatch, useSelector } from 'react-redux'
import { changeThemeId } from './bll/themeReducer'
import { RootState } from '../hw12/bll/store'

const themes = [
    { id: 1, value: 'light' },
    { id: 2, value: 'blue' },
    { id: 3, value: 'dark' },
]

const HW12 = () => {
    const dispatch = useDispatch()
    const themeId = useSelector((state: RootState) => state.theme.themeId)

    const change = (id: number) => {
        dispatch(changeThemeId(id))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId.toString()
    }, [themeId])

    return (
        <div id="hw12">
            <div id="hw12-text" className={s2.hwTitle}>
                Homework #12
            </div>

            <div className={s2.hw}>
                <SuperSelect
                    id="hw12-select-theme"
                    className={s.select}
                    options={themes}
                    value={themeId}
                    onChangeOption={change}
                />
            </div>
        </div>
    )
}

export default HW12
