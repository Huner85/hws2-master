import React from 'react';
import { AffairType } from '../../HW2';

type AffairPropsType = {
    affair: AffairType;
    deleteAffairCallback: (id: number) => void;
};

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id);

    return (
        <div>
            <div>{props.affair.name}</div>
            <button onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
