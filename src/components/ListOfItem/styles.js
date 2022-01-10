import styled from 'styled-components'

import * as variables from '@styles/Variables'
import { wrapper } from '@styles/Wrapper'

export const ListOfItems = styled.section`
  width:100%;
  background-color: ${variables.BLACK};
  color: ${variables.WHITE};
  padding:30px 0px;
  border-bottom: 1px solid ${variables.GRAY};
  
`
export const ListOfItemContainer = styled.div`
  ${wrapper()}
`
export const TitleOfItem = styled.h2`
  text-transform:uppercase;
  font-weight:900;
  letter-spacing:5px;
  margin-bottom:50px;
`
