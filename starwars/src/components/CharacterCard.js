import React from 'react';
import '../App.css';

function CharacterCard(props) {

    return (
        <div>
            <h1>{props.data.name}</h1>
            <p>Year of Birth: {props.data.birth_year}</p>
            <p>Height: {props.data.height}</p>
            <p>Hair Color: {props.data.hair_color}</p>
            <p>Eye Color: {props.data.eye_color}</p>
        </div>
    )
}

export default CharacterCard;