import React from 'react';
import Img from 'gatsby-image'
import styled from 'styled-components'
import { space, fontSize } from 'styled-system'

const Container = styled.div`
  ${space}
`

const ImageContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  ${space}
`

const Text = styled.div`
  ${fontSize}
  ${space}
`

export default ({ picture, name, label, email, phone, languages, idNumber}) => {
  return(
    <Container pt={4} pr={5}>
      <ImageContainer mb={4}>
        <Img fluid={picture.asset.fluid} alt={name} />
      </ImageContainer>
      <Text fontSize={4} mb={0}><strong>{name}</strong></Text>
      <Text fontSize={3} mb={3}>{label}</Text>
      <Text mb={1}>{email}</Text>
      <Text mb={1}>{phone}</Text>
      <Text mb={3}>Id number: {idNumber}</Text>
      
      <Text mb={1}><strong>Languages</strong></Text>
      {languages.edges.map(({ node: language }) => {
        return (
          <div key={language.id}>
            {language.language}: {language.fluency}
          </div>
        )
      })}
    </Container>
  );
};