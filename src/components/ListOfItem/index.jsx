import React from 'react'

import {
  ListOfItems,
  ListOfItemContainer,
  ListOfItemContainer2,
  TitleOfItem
} from './styles'
export const ListOfItem = ({ props = {}, children }) => {
  const { title = 'x' } = props
  return (
    <ListOfItems>
      <ListOfItemContainer>
        <TitleOfItem>{title}</TitleOfItem>
        <ListOfItemContainer2>{children}</ListOfItemContainer2>
      </ListOfItemContainer>
    </ListOfItems>
  )
}
