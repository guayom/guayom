import styled from "styled-components"

const MainGrid = styled.div`
  min-height: 100vh;
  color: ${props => props.theme.colors.orange};
  background: ${props => props.theme.colors.creme};
  font-family: ${props => props.theme.fonts.sansSerif};

  .navigation {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    height: 60px;
  }

  .main {
    padding: 20px 40px;
    padding-bottom: ${props => props.theme.navSizes[0]}px;
    box-sizing: border-box;
    min-height: 100vh;
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}px){
    padding-left: ${props => props.theme.navSizes[1]}px;

    .navigation {
      position: fixed;
      bottom: 0;
      left: 0;
      right: auto;
      top: 0;
      height: 100vh;
      width: ${props => props.theme.navSizes[1]}px;
    }

    .main {
      padding: 20px 40px 40px;
      box-sizing: border-box;
    }

  }  
`

export { MainGrid }