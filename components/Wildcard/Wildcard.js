import React from 'react';
import './Wildcard.css';
import phoneImg from '../assets/phone.png';
import publicImg from '../assets/public.png';
import fiftyImg from '../assets/50.png';

const imagesDict = {
    'PHONE': phoneImg,
    'PUBLIC': publicImg,
    'FIFTY': fiftyImg,
};

const Wildcard = ({ type, used, selected, onSelect }) => {
    const classes = ['wildcard'];
    selected && classes.push('wildcard--selected');

    return (
        <div className={classes.join(' ')} onClick={() => onSelect()}>
            <img alt="Wildcard icon" className="wildcard__icon" src={imagesDict[type]} />
            {used && (
                <>
                    <div className="red-cross" />
                    <div className="red-cross red-cross--inverted" />
                </>
            )}
        </div>
    );
};

export default Wildcard;
