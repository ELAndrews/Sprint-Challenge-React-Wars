import React from 'react';
import styled from 'styled-components';
import FilterOptions from './FilterOptions';

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

function Search () {

    return (
        <SearchDiv>
            <FilterDiv>
                <FilterOptions />
            </FilterDiv>
        </SearchDiv>
    )
}

export default Search