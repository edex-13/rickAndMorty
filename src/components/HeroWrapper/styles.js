import styled from 'styled-components'
import * as variables from '@styles/Variables'
import { wrapper } from '@styles/Wrapper'

export const HeroContainer = styled.section`
  ${wrapper()}
  min-height: 400px;
  max-height: 500px;
  position: relative;
  display:flex;
  align-items: center;
  text-align:center;
`
export const HeroContainerText = styled.div`
  ${wrapper({ maximumSize: '1000px', paddingSize: '0px' })}
  z-index:1;
`
export const Title = styled.h1`
  font-size:100px;
  line-height: 1.5;
  font-weight:900;
  color: ${variables.BLACK}
`
export const Text = styled.p`
`

export const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  opacity:0.1;
`
