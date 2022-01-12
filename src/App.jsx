import React from 'react'
import { GlobalStyle } from '@styles/GlobalStyle'
import { Home } from '@pages/Home/Index.jsx'

export const App = () => {
  return (
    <div className='app'>
      <GlobalStyle />
      <Home />
    </div>
  )
}
