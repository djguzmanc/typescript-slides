import React from 'react';

const setIndexIfDifferent = (currentIdx, setter, newIdx) =>
    setter(currentIdx === newIdx ? null : newIdx);

const useCurrentIndex = (idx = null) => {
    const [selectedIndex, setSelectedIndex] = React.useState(idx);
    return [selectedIndex, setIndexIfDifferent.bind(null, selectedIndex, setSelectedIndex)];
};

export default useCurrentIndex;