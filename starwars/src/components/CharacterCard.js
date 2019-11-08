import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
    width: 30%;
    min-width: 350px;
    padding: 20px;
    margin: 1%;
    background-color: rgb(84, 84, 84, 0.7);
    border-left: 15px solid rgb(84, 84, 84);
`;

const H1 = styled.h1`
    font-size: 2rem;
    margin: 15px auto;
    color: white;
    text-shadow: 1px 1px 5px #443e3e;
`;

const P = styled.p`
    color: white;
`;

function CharacterCard(props) {

    return (
        <CardDiv>
            <H1>{props.data.name}</H1>
            <P>Year of Birth: {props.data.birth_year}</P>
            <P>Height: {props.data.height}</P>
            <P>Hair Color: {props.data.hair_color}</P>
            <P>Eye Color: {props.data.eye_color}</P>
        </CardDiv>
    )
}

export default CharacterCard;