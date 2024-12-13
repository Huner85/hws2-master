import React from 'react';
import { AffairType } from '../../HW2';
import s from './Affair.module.css';

type AffairPropsType = {
    affair: AffairType;
    deleteAffairCallback: (id: number) => void;
};

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id);

    return (
        <div className={s.affair}>
            <span>{props.affair.name}</span>
            <button onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
