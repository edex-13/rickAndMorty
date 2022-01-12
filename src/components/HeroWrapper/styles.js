import styled from 'styled-components'
import * as variables from '@styles/Variables'
import { wrapper } from '@styles/Wrapper'

export const HeroContainer = styled.section`
  ${wrapper()}
  min-height: 400px;
  max-height: 500px;
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 80px;
`
export const HeroContainerText = styled.div`
  ${wrapper({ maximumSize: '1000px', paddingSize: '0px' })}
  z-index:1;
`
export const Title = styled.h1`
  font-size: 100px;
  line-height: 1.5;
  font-weight: 900;
  color: ${variables.BLACK};
  @media screen and (max-width: 720px) {
    font-size: 60px;
  }
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
  opacity: 0.1;
`
const URL_IMAGE_PARALX =
  'https://resizing.flixster.com/Vo8_0GrkRYSkBr2ctT2qoxkRAqE=/fit-in/1152x864/v2/https://flxt.tmsimg.com/assets/p13993000_i_h10_aa.jpg'
export const Parallax = styled.div`
  background-attachment: fixed;
  background-image: url(${URL_IMAGE_PARALX});
  position: relative;
  width: 100%;
  height: 100%;
  left: 0px;
  right: 0px;
  min-height: 400px;
  background-size: cover;
  background-position: center;
`

export const ParallaxText = styled.p`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px 15px;
  display: block;
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: ${variables.YELLOW};
  color: ${variables.BLACK};
  font-weight: 800;
  font-size: 45px;
  text-align: right;
  text-transform: uppercase;
  letter-spacing: 8px;
  box-sizing: border-box;
  @media screen and (max-width: 720px) {
    font-size: 25px;
  }
`
