import React from 'react';
import './search-panel.sass'

const SearchPanel = ({term, setTerm}) => {
    const onChangeHandler = (e) => {
        setTerm(e.currentTarget.value)
    }
    return (

        <input
            value={term}
            onChange={onChangeHandler}
            placeholder='Поиск по записям'
            className='form-control search-input'
            type="text"/>

    );
};

export default SearchPanel;