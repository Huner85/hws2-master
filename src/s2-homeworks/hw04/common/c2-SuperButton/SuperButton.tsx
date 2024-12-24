import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import s from './SuperButton.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: 'default' | 'red' | 'secondary';
};

const SuperButton: React.FC<SuperButtonPropsType> = ({ xType = 'default', className, disabled, ...restProps }) => {
    const finalClassName = `${s.button} ${disabled ? s.disabled : s[xType]} ${className || ''}`;

    return <button disabled={disabled} className={finalClassName} {...restProps} />;
};

export default SuperButton;
