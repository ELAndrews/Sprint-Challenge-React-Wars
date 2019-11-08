import React, { useEffect }from 'react';
import styled from 'styled-components';

const SearchDiv = styled.div`
    background-color: rgb(84, 84, 84, 0.7);
    width: 100vw;
    height: 50px;
    position: absolute;
    left: 0px;
`;
const FilterDiv = styled.div`
    width: 80%;
    max-width: 1000px;
    text-align: center;
    margin: 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    `;
const Span = styled.span`
    color: white;
    text-align: center;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    font-weight: bold;
`;
const Input = styled.input`
    color: rgb(255, 255, 255, 0.7);
    text-align: center;
    background-color: transparent;
    border: none;
    height: 50px;
    font-size: 1rem;
    font-weight: bold;

    &:hover {
        background-color: rgb(84, 84, 84);
    }
`;


function Search (props) {

useEffect(() => {

})

    return (
        <SearchDiv>
            <FilterDiv>
                <Span>Filter by:</Span>
                <Input type="text" value="name"></Input>
                <Input type="text" value="species"></Input>
                <Input type="text" value="starships"></Input>
            </FilterDiv>
        </SearchDiv>
    )
}

export default Search