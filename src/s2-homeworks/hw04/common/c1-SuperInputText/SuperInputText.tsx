import React, { ChangeEvent, KeyboardEvent, DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
import s from './SuperInputText.module.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperInputTextPropsType = Omit<DefaultInputPropsType, 'type'> & {
    onChangeText?: (value: string) => void;
    onEnter?: () => void;
    error?: ReactNode;
    spanClassName?: string;
};

const SuperInputText: React.FC<SuperInputTextPropsType> = ({
                                                               onChange,
                                                               onChangeText,
                                                               onKeyPress,
                                                               onEnter,
                                                               error,
                                                               className,
                                                               spanClassName,
                                                               id,
                                                               ...restProps
                                                           }) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
        onChangeText?.(e.currentTarget.value);
    };

    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress?.(e);
        if (onEnter && e.key === 'Enter') onEnter();
    };

    const finalSpanClassName = `${s.error} ${spanClassName || ''}`;
    const finalInputClassName = `${s.input} ${error ? s.errorInput : s.superInput} ${className || ''}`;

    return (
        <div className={s.inputWrapper}>
            <input
                id={id}
                type={'text'}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                {...restProps}
            />
            {error && (
                <span id={id ? `${id}-span` : undefined} className={finalSpanClassName}>
                    {error}
                </span>
            )}
        </div>
    );
};

export default SuperInputText;
