import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 250px;
  height: calc(100vh - 80px);
  overflow: hidden;
  box-sizing: border-box;
  grid-column-gap: 40px;
`

const Main = styled.div`
  max-height: 100%;
  overflow: scroll;
  box-sizing: border-box;
`

export { Container, Main }