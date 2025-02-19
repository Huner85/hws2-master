import React, { useState } from 'react';
import s from './Stand.module.css';
import SuperInputText from './common/c1-SuperInputText/SuperInputText';
import SuperButton from './common/c2-SuperButton/SuperButton';
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox';

/*
 * Компонент демонстрации возможностей:
 * включает текстовые поля, кнопки и чекбоксы.
 */
const Stand = () => {
    const [inputValue, setInputValue] = useState<string>(''); // Состояние текстового поля
    const [error, setError] = useState<string>(''); // Состояние ошибки для текстового поля
    const [isChecked, setChecked] = useState<boolean>(false); // Состояние чекбокса

    return (
        <div id={'hw4-stand'} className={s.stand}>
            {/* Инпуты */}
            <div className={s.inputs}>
                {/* Обычный инпут */}
                <div>
                    <SuperInputText
                        id={'hw4-super-input-like-old'}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.currentTarget.value)}
                    />
                </div>
                {/* Инпут с обработкой ошибки */}
                <div>
                    <SuperInputText
                        id={'hw4-super-input-with-error'}
                        value={inputValue}
                        onChangeText={setInputValue}
                        error={error}
                        onEnter={() => {
                            setError(inputValue.trim() ? '' : 'Error');
                            setInputValue('');
                        }}
                    />
                </div>
            </div>

            {/* Кнопки */}
            <div className={s.buttons}>
                <SuperButton id={'hw4-super-button-default'}>default</SuperButton>
                <SuperButton id={'hw4-super-button-red'} xType={'red'}>
                    red
                </SuperButton>
                <SuperButton id={'hw4-super-button-disabled'} xType={'red'} disabled>
                    disabled
                </SuperButton>
                <SuperButton id={'hw4-super-button-secondary'} xType={'secondary'}>
                    secondary
                </SuperButton>
            </div>

            {/* Чекбоксы */}
            <div className={s.checkboxes}>
                <SuperCheckbox
                    id={'hw4-super-checkbox-with-text'}
                    checked={isChecked}
                    onChangeChecked={setChecked}
                >
                    some text
                </SuperCheckbox>
                <SuperCheckbox
                    id={'hw4-super-checkbox-like-old'}
                    checked={isChecked}
                    onChange={(e) => setChecked(e.currentTarget.checked)}
                />
            </div>
        </div>
    );
};

export default Stand;
