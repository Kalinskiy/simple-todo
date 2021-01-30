import React from 'react';
import PostListItem from '../post-list-item'
import './post-list.sass'
import {ListGroup} from 'reactstrap';


const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked, like, important}) => {
    const elements = posts && posts.map(post => {
        const {id, ...itemProps} = post
        return <div key={id} className='list-group-item'>
            <PostListItem
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleLiked={() => onToggleLiked(id)}

            />
        </div>
    })

    return (

        <ListGroup className='app-list'>
            {elements}
        </ListGroup>

    )
};

export default PostList;