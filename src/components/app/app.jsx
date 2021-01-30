import React, {Component} from 'react';

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

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: v1(), label: 'Going to learn React', important: true, like: false},
                {id: v1(), label: 'That is so good', important: false, like: true},
                {id: v1(), label: 'I need some break...', important: false, like: false},
            ],

            important: false,
            like: false
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.filterLiked = this.filterLiked.bind(this);
        this.filterAll = this.filterAll.bind(this);
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const newArr = data.filter(obj => obj.id !== id)

            return {
                data: newArr
            }
        });
    }

    onAddItem(body) {
        this.setState(({data}) => {
            const newItem = {
                label: body,
                important: false,
                id: v1()
            }
            return {
                data: [...data, newItem]
            }
        })
    }

    toggleElement(id, el) {
        const {data} = this.state;
        return data.map(obj => obj.id === id ? {...obj, el: !obj.el} : obj)
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const newArray = data.map(obj => obj.id === id ? {...obj, important: !obj.important} : obj)
            // const newArray = this.toggleElement(id, important);
            return {
                data: newArray
            }
        })
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const newData = [...data]
            const newArray = newData.map(obj => obj.id === id ? {...obj, like: !obj.like} : obj)
            return {
                data: newArray
            }
        })
    }

    filterLiked() {
        this.setState(({data}) => {
            const newData = [...data]
            const newArray = newData.filter(obj => obj.like)
            console.log(newArray)
            return {
                data: newArray
            }
        })
    }

    filterAll() {
        this.setState(({data}) => {
            const newData = data.map(obj => obj)
            console.log(newData)
            return {
                data: newData
            }
        })
    }


    render() {

        const likedCount = this.state.data.filter(obj => obj.like).length
        const allPosts = this.state.data.length

        return (
            <AppBlock>
                <AppHeader
                    allPosts={allPosts}
                    likedCount={likedCount}/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter
                        filterAll={this.filterAll}
                        likedPosts={this.filterLiked}/>
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                    important={this.state.important}
                    like={this.state.like}
                />
                <PostAddForm
                    onAddItem={this.onAddItem}
                />
            </AppBlock>
        )
    }
}

