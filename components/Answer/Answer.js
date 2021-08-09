import React from 'react';
import './Answer.css';

const Answer = ({
    index,
    children,
    selected,
    onSelect,
    removed,
}) => {

    const [isCorrect, setIsCorrect] = React.useState(false);

    const classes = ['answer'];
    selected && classes.push('answer--selected');
    isCorrect && classes.push('answer--correct');
    removed && classes.push('answer--removed');

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
                <span>
                    {children}
                </span>
            </div>
        </main>
    );
};

export default Answer;
