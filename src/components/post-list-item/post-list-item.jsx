import React from 'react';
import './post-list-item.css'

export default function PostListItem(props) {
    const {label, onDelete, onToggleImportant, onToggleLiked, like, important} = props;
    let classNames = "app-list-item d-flex justify-content-between";

    if (important) {
        classNames += ' important'
    }
    if (like) {
        classNames += ' like';

    }

    return (
        <div className={classNames}>
            <span
                className="app-list-item-label"
                onClick={onToggleLiked}>
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button
                    style={{backgroundColor: 'transparent'}}
                    type="button"
                    className="btn-star btn-sm"
                    onClick={onToggleImportant}>
                    <i className="fa fa-star"></i>
                </button>
                <button
                    onClick={onDelete}
                    style={{backgroundColor: 'transparent'}}
                    type="button"
                    className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
    )
}


