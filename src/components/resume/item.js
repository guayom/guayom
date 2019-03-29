import React from 'react'
import styled from 'styled-components'
import { color, space, fontSize } from 'styled-system'

const Container = styled.section`
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-column-gap: ${props => props.theme.space[3]}px;
  ${space}
`

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Content = styled.div`
  border-left: 2px solid;
  ${space}
`
const Title = styled.h3`
  ${fontSize}
  ${space}

  & > a {
    font-weight: 400;
    font-size: .8em;
    ${color}
  }
`

const SubTitle = styled.div`
  ${space}
  ${fontSize}
`

export default ({
  startDate,
  endDate,
  title,
  subTitle,
  website,
  summary,
  highlights,
}) => {
  return (
    <Container mb={4}>
      <DateContainer>
        {startDate} - {endDate != null ? endDate : `Present`}
      </DateContainer>
      <Content pl={3}>
        <Title color="orange" fontSize={4} mb={1} mt={0}>
          {title}
          {website && (
            <>
              {` - `}
              <a href={website} target="_blank" rel="noopener noreferrer">
                <small>{website}</small>
              </a>
            </>
          )}
        </Title>
        {subTitle && (
          <SubTitle m="0" fontSize="3">
            {subTitle}
          </SubTitle>
        )}
        {summary && <p>{summary}</p>}
        {highlights && (
          <div>
            <ul>
              {highlights.map((item, i) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </Content>
    </Container>
  )
}
