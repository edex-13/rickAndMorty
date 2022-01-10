import React from 'react'

import { ListOfItems, ListOfItemContainer, TitleOfItem } from './styles'
export const ListOfItem = ({ props = {}, children }) => {
  const { title = 'x' } = props
  console.log(children)
  return (
    <ListOfItems>
      <ListOfItemContainer>
        <TitleOfItem>{title}</TitleOfItem>
        {children}
      </ListOfItemContainer>
    </ListOfItems>
  )
}
