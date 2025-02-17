// HW12.tsx
import React, { useEffect, useReducer } from 'react';
import s from './HW12.module.css';
import s2 from '../../s1-main/App.module.css';
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect';
import { themeReducer, changeThemeId } from './bll/themeReducer';

const themes = [
    { id: 1, value: 'light' },
    { id: 2, value: 'blue' },
    { id: 3, value: 'dark' },
];

const HW12 = () => {
    const [state, dispatch] = useReducer(themeReducer, { themeId: 1 });

    const change = (id: number) => {
        dispatch(changeThemeId(id));
    };

    useEffect(() => {
        document.documentElement.dataset.theme = state.themeId.toString();
    }, [state.themeId]);

    return (
        <div id={'hw12'}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </div>

            <div className={s2.hw}>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    options={themes}
                    value={state.themeId}
                    onChangeOption={change}
                />
            </div>
        </div>
    );
};

export default HW12;
