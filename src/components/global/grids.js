import styled from "styled-components"

const MainGrid = styled.div`
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: ${props => props.theme.navSizes[1]}px 3fr;
  grid-column-gap: ${props => props.theme.space[5]}px;
  overflow: hidden;

  color: ${props => props.theme.colors.orange};
  background: ${props => props.theme.colors.creme};
  font-family: ${props => props.theme.fonts.sansSerif};

  & > * {
    box-sizing: border-box;
    overflow-y: scroll;
  }

  & > header {
    text-align: right;

    a {
      color: ${props => props.theme.colors.orange};
      text-decoration: none;

      &:hover {
        color: #000;
      }
    }
  }
`

export { MainGrid }