import React from 'react';
import Affair from './affair/Affair';
import { AffairType, FilterType } from '../HW2';
import s from './Affairs.module.css';

type AffairsPropsType = {
    data: AffairType[];
    setFilter: (filter: FilterType) => void;
    deleteAffairCallback: (id: number) => void;
    filter: FilterType;
};

function Affairs(props: AffairsPropsType) {
    const setAll = () => props.setFilter('all');
    const setHigh = () => props.setFilter('high');
    const setMiddle = () => props.setFilter('middle');
    const setLow = () => props.setFilter('low');

    const cnAll = s.button + (props.filter === 'all' ? ` ${s.active}` : '');
    const cnHigh = s.button + (props.filter === 'high' ? ` ${s.active}` : '');
    const cnMiddle = s.button + (props.filter === 'middle' ? ` ${s.active}` : '');
    const cnLow = s.button + (props.filter === 'low' ? ` ${s.active}` : '');

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair key={a._id} affair={a} deleteAffairCallback={props.deleteAffairCallback} />
    ));

    return (
        <div>
            <div className={s.buttonContainer}>
                <button onClick={setAll} className={cnAll}>
                    All
                </button>
                <button onClick={setHigh} className={cnHigh}>
                    High
                </button>
                <button onClick={setMiddle} className={cnMiddle}>
                    Middle
                </button>
                <button onClick={setLow} className={cnLow}>
                    Low
                </button>
            </div>
            <div className={s.affairs}>{mappedAffairs}</div>
        </div>
    );
}

export default Affairs;