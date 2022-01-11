import React from 'react'

import { CharacterCradContainer, CharacterImageContainer, CharacterImage, CharacterDetails } from './styles'

export const CharacterCrad = ({ character = {} }) => {
  const { image, name, status, species, gender, location, origin } = character
  return (
    <CharacterCradContainer>
      <CharacterImageContainer>
        <CharacterImage src={image} alt={name} />
      </CharacterImageContainer>
      <CharacterDetails>
        <h3>{name}</h3>
        <p>{status} -  {species}</p>
        <p>
          {gender}
        </p>
        <p>
          <p>Last known location:</p>
          <span> {location.name}</span>
        </p>
        <p>
          <p>Origin:</p>
          <span> {origin.name}</span>
        </p>
      </CharacterDetails>
    </CharacterCradContainer>
  )
}
