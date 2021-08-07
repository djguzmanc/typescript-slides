import React from 'react';
import './Question.css';
import bg from '../assets/bg.jpg';
import SelectableChildren from '../hoc/SelectableChildren/SelectableChildren';

const indexes = ['A', 'B', 'C', 'D'];

const Question = ({
    question = '',
    children
}) => {
    return (
        <main className="question" style={{ backgroundImage: `url(${bg})` }}>
            <h1 className="question__text">{question}</h1>
            <section className="question__answers">
                <SelectableChildren
                    props={idx => ({ index: indexes[idx] })}>
                    {children}
                </SelectableChildren>
            </section>
        </main>
    );
};

export default Question;
