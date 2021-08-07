import React from 'react';
import './WildcardSet.css';
import SelectableChildren from '../hoc/SelectableChildren/SelectableChildren';

const WildcardSet = ({ children }) => {
    return (
        <div className="wildcard-set">
            <SelectableChildren>
                {children}
            </SelectableChildren>
        </div>
    );
};

export default WildcardSet;
