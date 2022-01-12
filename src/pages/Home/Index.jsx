import React from 'react'
import { Header } from '@components/Header/Index'
import { HeroWrapper } from '@components/HeroWrapper'
import { ListOfItem } from '@components/ListOfItem'
import { useGetData } from '../../hooks/useGetData'
import { CharacterCrad } from '../../components/CharacterCard'
import { Footer } from '../../components/Footer/'

const URL_API = 'https://rickandmortyapi.com/api/'
export const Home = () => {
  const characters = useGetData(`${URL_API}/character`)

  if (characters.loading) return <h1>Loading...</h1>
  if (characters.error) return <h1>Error...</h1>

  const charactersList = characters.data.results.slice(0, 8)

  return (
    <>
      <Header />
      <main>
        <HeroWrapper />
        <ListOfItem props={{ title: 'Characters' }}>
          {charactersList.map(character => (
            <CharacterCrad key={character.id} character={character} />
          ))}
        </ListOfItem>
      </main>
      <Footer />
    </>
  )
}
