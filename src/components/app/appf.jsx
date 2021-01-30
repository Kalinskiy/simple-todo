import React, {useState} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import styled from 'styled-components'
import './app.sass';
import {v1} from "uuid";

const AppBlock = styled.div`
  margin: 100px auto;
  max-width: 800px;
`


const AppF = () => {
    const [data, setData] = useState([
            {id: v1(), label: 'Going to learn React', important: true, like: false},
            {id: v1(), label: 'That is so good', important: false, like: true},
            {id: v1(), label: 'I need some break...', important: false, like: false},
        ],
    );
    const [term, setTerm] = useState('')
    const [filter, setFilter] = useState('all')
    const likedCount = data.filter(obj => obj.like).length
    const allPosts = data.length


    const deleteItem = (id) => {
        const newArr = data.filter(obj => obj.id !== id)
        setData(newArr)
    }

    const onAddItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: v1(),
            like: false
        }
        setData([...data, newItem])
    }


    const toggleElement = (id, el) => {
        return data.map(obj => obj.id === id ? {...obj, el: !obj.el} : obj)
    }

    const onToggleImportant = (id) => {
        const newArray = data.map(obj => obj.id === id ? {...obj, important: !obj.important} : obj)
        setData(newArray)

    }

    const onToggleLiked = (id) => {
        const newData = [...data]
        const newArray = newData.map(obj => obj.id === id ? {...obj, like: !obj.like} : obj)
        setData(newArray)
    }
    const filterPosts = (items, filter) => {
        switch (filter) {
            case 'like': {
                return items.filter(obj => obj.like)
            }
            case 'all': {
                return items;
            }
            default :{
                return items;
            }

        }

    }
    // const filterLiked = () => {
    //     const newData = [...data]
    //     const newArray = newData.filter(obj => obj.like)
    //     setData(newArray)
    // }
    //
    // const filterAll = () => {
    //     const newData = data.map(obj => obj)
    //     setData(newData)
    // }
    const searchPost = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term) > -1 //возвращает те item, в которых содержится term
        })
    }
    const visiblePosts = filterPosts(searchPost(data, term), filter)

    return (
        <AppBlock>
            <AppHeader
                allPosts={allPosts}
                likedCount={likedCount}/>
            <div className="search-panel d-flex">
                <SearchPanel
                    term={term}
                    setTerm={setTerm}
                />
                <PostStatusFilter
                    // filterAll={filterAll}
                    // likedPosts={filterLiked}
                    filter={filter}
                    setFilter={setFilter}
                />
            </div>
            <PostList
                posts={visiblePosts}
                onDelete={deleteItem}
                onToggleImportant={onToggleImportant}
                onToggleLiked={onToggleLiked}

            />
            <PostAddForm
                onAddItem={onAddItem}
            />
        </AppBlock>
    )

}

export default AppF;