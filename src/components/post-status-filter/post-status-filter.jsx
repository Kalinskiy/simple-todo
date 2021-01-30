import React from 'react';
import './post-status-filter.sass'
import {Button} from 'reactstrap';

const PostStatusFilter = ({filter, setFilter}) => {
    const buttons = [
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