import React from 'react';
import './app-header.sass'
import styled from 'styled-components'

const Header = styled.div`
  display:flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
   font-size: 26px;
    :hover{
      color:blue;
    }
  }
  h2{
    font-size: 1.2rem;
    color: grey;
  }
  
`

const AppHeader = ({likedCount, allPosts}) => {
    return (
        <Header colored>
            <h1>Alexander Kalinskiy</h1>
            <h2>{allPosts} записей, из них понравилось {likedCount}</h2>
        </Header>
    );
};

export default AppHeader;