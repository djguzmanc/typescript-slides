import React from 'react';
import './Answer.css';

const Answer = ({
    index,
    children,
    selected,
    onSelect,
}) => {

    const [isCorrect, setIsCorrect] = React.useState(false);

    const classes = ['answer'];
    selected && classes.push('answer--selected');
    isCorrect && classes.push('answer--correct');

    return (
        <main
            className={classes.join(' ')}
            onContextMenu={e => {
                e.preventDefault();
                setIsCorrect(!isCorrect);
            }}
            onClick={() => onSelect()}>
            <span className="answer__index">{index}</span>
            <div className="answer__content">
                {children}
            </div>
        </main>
    );
};

export default Answer;
