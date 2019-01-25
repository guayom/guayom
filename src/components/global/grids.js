import styled from "styled-components"

const MainGrid = styled.div`
  padding-bottom: 60px;

  .navigation {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    height: 60px;
  }

  .main {
    padding: 20px 40px 40px;
    box-sizing: border-box;
  }
`

export { MainGrid }