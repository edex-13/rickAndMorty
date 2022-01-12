import React from 'react'
import Logo from '../Logo/Index'
import { Headers, Container } from './styles'

export const Header = () => {
  return (
    <Headers>
      <Container>
        <Logo />
      </Container>
    </Headers>
  )
}
