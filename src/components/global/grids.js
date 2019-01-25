import styled from "styled-components"

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 60px;
  height: 100%;
  min-height: calc(100vh - 60px);

  .navigation {
    order: 2;
    border-top: solid 1px #ddd;
  }

  .main {
    order: 1;
    overflow: scroll;
    padding: 40px;
    box-sizing: border-box;
  }
`

export { MainGrid }