// src/s2-homeworks/hw07/common/c5-SuperSelect/SuperSelect.tsx

import React from 'react'

type OptionType = {
    id: number
    value: string
}

type SuperSelectProps = {
    options?: OptionType[]
    value?: number
    onChangeOption?: (id: number) => void
    className?: string
    id?: string
}

const SuperSelect: React.FC<SuperSelectProps> = ({
                                                     options,
                                                     value,
                                                     onChangeOption,
                                                     className,
                                                     id,
                                                 }) => {
    const mappedOptions = options?.map(o => (
        <option key={o.id} value={o.id}>
            {o.value}
        </option>
    ))

    const onChangeCallback = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChangeOption?.(Number(e.currentTarget.value))
    }

    return (
        <select
            id={id}
            className={className}
            value={value}
            onChange={onChangeCallback}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
