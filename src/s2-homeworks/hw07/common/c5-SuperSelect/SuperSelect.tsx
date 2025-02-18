import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react';
import s from './SuperSelect.module.css';

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: { id: number; value: string }[];
    onChangeOption?: (option: any) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
                                                         options,
                                                         className,
                                                         onChangeOption,
                                                         ...restProps
                                                     }) => {
    const mappedOptions = options
        ? options.map((o) => (
            <option id={'hw7-option-' + o.id} className={s.option} key={o.id} value={o.id}>
                {o.value}
            </option>
        ))
        : [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChangeOption) {
            onChangeOption(+e.currentTarget.value); // Приводим value к числу
        }
    };

    const finalSelectClassName = s.select + (className ? ' ' + className : '');

    return (
        <select className={finalSelectClassName} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    );
};

export default SuperSelect;
