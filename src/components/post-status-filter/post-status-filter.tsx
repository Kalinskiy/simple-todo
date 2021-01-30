import React from 'react';
import './post-status-filter.sass'
import {Button} from 'reactstrap';
import {FilterType} from "../../types";


type PropsType = {
    filter: FilterType
    setFilter: (filter: FilterType) => void
}
type ButtonsType = {
    name: FilterType
    label: string
}
const PostStatusFilter: React.FC<PropsType> = ({filter, setFilter}) => {
    const buttons: Array<ButtonsType> = [
        {name: 'all', label: 'Все'},
        {name: 'like', label: 'Понравилось'},
    ]
    const elements = buttons.map(button => {
        const active = filter === button.name;
        const activeClass = active ? 'btn-info' : 'btn-outline-secondary'
        return (
            <Button key={button.name} className={`${activeClass} btn-color`}
                    onClick={() => setFilter(button.name)}>{button.label}</Button>
        )


    })

    return (
        <div className='btn-group'>
            {elements}

        </div>
    );
};

export default PostStatusFilter;