import React, { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from 'react';
import s from './SuperRadio.module.css';

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: { id: number; value: string }[];
    onChangeOption?: (option: any) => void;
    spanProps?: DefaultSpanPropsType;
};

const SuperRadio: React.FC<SuperRadioPropsType> = ({
                                                       id,
                                                       name,
                                                       className,
                                                       options,
                                                       value,
                                                       onChangeOption,
                                                       spanProps,
                                                       ...restProps
                                                   }) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChangeOption) {
            onChangeOption(+e.currentTarget.value); // Приводим value к числу
        }
    };

    const finalRadioClassName = s.radio + (className ? ' ' + className : '');
    const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '');

    const mappedOptions = options
        ? options.map((o) => (
            <label key={name + '-' + o.id} className={s.label}>
                <input
                    id={id + '-input-' + o.id}
                    className={finalRadioClassName}
                    type="radio"
                    name={name}
                    value={o.id}
                    checked={o.id === value}
                    onChange={onChangeCallback}
                    {...restProps}
                />
                <span id={id + '-span-' + o.id} {...spanProps} className={spanClassName}>
                      {o.value}
                  </span>
            </label>
        ))
        : [];

    return <div className={s.options}>{mappedOptions}</div>;
};

export default SuperRadio;
