import styled from 'styled-components'

export const CharacterCradContainer = styled.article`
  width: 600px;
  display: flex;
  overflow: hidden;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px,
    rgb(0 0 0 / 6%) 0px 2px 4px -1px;
  @media screen and (max-width: 425px) {
    flex-direction: column;
    height: initial;
    width: 100%;
    margin: 20px 0px;
  }
`

export const CharacterImageContainer = styled.div`
  flex: 2 1 0%;
    width: 100%;
`
export const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  margin: 0px;
  opacity: 1;
  transition: opacity 0.5s ease 0s;
  object-position: center center;
  object-fit: cover;
`
export const CharacterDetails = styled.div`
  flex: 3 1 0%;
  position: relative;
  padding: 0.75rem;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
`
