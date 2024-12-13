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

    const mappedAffairs = props.data.map(a => (
        <Affair key={a._id} affair={a} deleteAffairCallback={props.deleteAffairCallback} />
    ));

    return (
        <div>
            <div className={s.buttonContainer}>
                <button onClick={setAll}>All</button>
                <button onClick={setHigh}>High</button>
                <button onClick={setMiddle}>Middle</button>
                <button onClick={setLow}>Low</button>
            </div>
            <div>{mappedAffairs}</div>
        </div>
    );
}

export default Affairs;
