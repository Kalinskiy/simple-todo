import React from 'react';
import './post-list.sass'
import {ListGroup} from 'reactstrap';
import PostListItem from "../post-list-item/post-list-item";
import {ItemType} from "../../types";

type PropsType = {
    posts:Array<ItemType>
    onDelete:(id:string)=>void
    onToggleImportant:(id:string)=>void
    onToggleLiked:(id:string)=>void

}

const PostList:React.FC<PropsType> = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
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