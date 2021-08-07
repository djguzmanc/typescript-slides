import React from 'react';
import useCurrentIndex from '../../../custom-hooks/current-index';

const SelectableChildren = ({
    children,
    props = () => ({})
}) => {
    const currentIdx = React.Children
        .toArray(children).findIndex(child => child.props.selected);
    const [selectedIdx, setSelectedIndex] =
        useCurrentIndex(currentIdx > -1 ? currentIdx : null);

    return React.Children.map(children, (child, idx) =>
        React.cloneElement(child, {
            ...props(idx),
            selected: selectedIdx === idx,
            onSelect: () => setSelectedIndex(idx),
        }));
};

export default SelectableChildren;
