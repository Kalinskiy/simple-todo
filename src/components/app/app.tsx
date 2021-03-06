import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import PostStatusFilter from '../post-status-filter/post-status-filter'
import PostList from '../post-list/post-list'
import PostAddForm from '../post-add-form/post-add-form'
import styled from 'styled-components'
import './app.sass';
import {v1} from "uuid";
import {useState} from "react";
import {FilterType, ItemType} from "../../types";
import React from 'react';



const AppBlock = styled.div`
  margin: 100px auto;
  max-width: 800px;
`


const App = () => {
    const [data, setData] = useState<Array<ItemType>>([
            {id: v1(), label: 'Going to learn React', important: true, like: true},
            {id: v1(), label: 'That is so good', important: false, like: false},
            {id: v1(), label: 'I need some break...', important: false, like: false},
        ],
    );
    const [term, setTerm] = useState<string>('')
    const [filter, setFilter] = useState<FilterType>('all')
    const likedCount = data.filter(obj => obj.like).length
    const allPosts = data.length


    const deleteItem = (id:string) => {
        const newArr = data.filter(obj => obj.id !== id)
        setData(newArr)
    }

    const onAddItem = (body:string) => {
        const newItem = {
            label: body,
            important: false,
            id: v1(),
            like: false

        }
        setData([...data, newItem])
    }

    const onToggleImportant = (id:string) => {
        const newArray = data.map(obj => obj.id === id ? {...obj, important: !obj.important} : obj)
        setData(newArray)
    }

    const onToggleLiked = (id:string) => {
        const newData = [...data]
        const newArray = newData.map(obj => obj.id === id ? {...obj, like: !obj.like} : obj)
        setData(newArray)
    }
    const filterPosts = (items:Array<ItemType>, filter:FilterType) => {
        switch (filter) {
            case 'like': {
                return items.filter(obj => obj.like)
            }
            case 'all': {
                return items;
            }
            default : {
                return items;
            }
        }
    }

    const searchPost = (items:Array<ItemType>, term:string) => {
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


export default App;