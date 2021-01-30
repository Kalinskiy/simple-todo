import React, {ChangeEvent} from 'react';
import './search-panel.sass'


type PropsType = {
    term: string
    setTerm: (term: string) => void
}
const SearchPanel: React.FC<PropsType> = ({term, setTerm}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
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