import React from 'react'
import styled from 'styled-components'
import { color, space, fontSize } from 'styled-system'

const Container = styled.div`
  ${space}
`

const Title = styled.h2`
  display: block;
  border-bottom: 2px solid;
  margin: 0;
  ${color}
  ${space}
  ${fontSize}
`

export default ({ children, title, mt }) => (
  <Container mb={5} {...{mt}}>
    <Title color="orange" py="2" mb={4} fontSize={5}>{title}</Title>
    {children}
  </Container>
)
