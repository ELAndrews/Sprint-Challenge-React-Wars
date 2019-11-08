import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
    color: white;
    text-align: center;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    font-weight: bold;
`;
const Input = styled.input`
    color: rgb(255, 255, 255);
    text-align: center;
    background-color: transparent;
    border: none;
    height: 50px;
    font-size: 1rem;
    font-weight: bold;
    &::placeholder {
        color: rgb(255, 255, 255, 0.6);
    }
    &:hover {
        background-color: rgb(84, 84, 84);
    }
`;

class FilterOptions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
                }
        this.handleNameChange = this.handleNameChange.bind(this);
    }

handleNameChange(e) {
    console.log(`change happened`, e.target.value)
}

render() {
    return (
            <div>
                <Span>Filter by:</Span>
                <Input type="text" name="name" placeholder="name" onChange={this.handleNameChange}></Input>
                <Input type="text" placeholder="name"></Input>
                <Input type="text" placeholder="name"></Input>

             </div>
    )
}
}

export default FilterOptions