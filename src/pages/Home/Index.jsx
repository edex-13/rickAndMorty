import React from 'react'
import { Header } from '@components/Header/Index'
import { HeroWrapper } from '@components/HeroWrapper'
import { ListOfItem } from '@components/ListOfItem'

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroWrapper />
        <ListOfItem props={{ title: 'Characters' }}>
          {[1, 2, 3, 4, 5].map(i => (
            <p key={i}>{i}</p>
          ))}
        </ListOfItem>
      </main>
    </>
  )
}
