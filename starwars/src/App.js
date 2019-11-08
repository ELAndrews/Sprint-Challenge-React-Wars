import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import CharacterCard from './components/CharacterCard';
import styled from 'styled-components';

const AppDiv = styled.div`
  width: 80%;
  max-width: 800px;
  text-align: center;
  margin: 0px auto;
`;
const H1 = styled.h1`
  font-size: 4rem;
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [charactersDataState, setCharactersDataState] = useState([]);
 

  useEffect(() => {
    axios.get(`https://swapi.co/api/people`)
      .then(response => {
          setCharactersDataState(response.data.results)
        })

      .catch(error => {
        console.log(error)
      })
  })

  return (
    <AppDiv>
      <H1 className="Header">React Wars</H1>
      {
        charactersDataState.map((curr, index) => {
          return (
          <CharacterCard 
          data={curr}
          key={index}/>
          )
        })}
     </AppDiv>
  );
}

export default App;
