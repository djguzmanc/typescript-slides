import React from 'react';
import './Question.css';
import bg from '../assets/bg.jpg';

const Question = ({
    question = '',
    children
}) => {
    const indexes = ['A', 'B', 'C', 'D'];

    const [selectedIndex, setSelectedIndex] = React.useState(null);

    return (
        <main className="question" style={{ backgroundImage: `url(${bg})` }}>
            <h1 className="question__text">¿{question}?</h1>
            <section className="question__answers">
                {React.Children.map(children, (child, idx) => (
                    React.cloneElement(child, {
                        index: indexes[idx],
                        selected: selectedIndex === idx,
                        onSelect: () => setSelectedIndex(selectedIndex === idx ? null : idx),
                    })
                ))}
            </section>
        </main>
    );
};

export default Question;
