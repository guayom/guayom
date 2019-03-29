import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr ${props => props.theme.navSizes[1]}px;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  grid-column-gap: ${props => props.theme.space[4]}px;
`

const Main = styled.main`
  max-height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  box-sizing: border-box;
`

export { Container, Main }