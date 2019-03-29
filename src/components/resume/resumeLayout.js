import styled from 'styled-components'
import { space } from 'styled-system'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr ${props => props.theme.navSizes[1]}px;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  grid-column-gap: ${props => props.theme.space[5]}px;
`

const Main = styled.main`
  max-height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  box-sizing: border-box;
`

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

const NavigationContainer = styled.nav`
  ${space}
`

export { Container, Main, SkillsContainer, NavigationContainer }