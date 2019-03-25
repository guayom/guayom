import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 30px;
`

const DateContainer = styled.div``

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
    <Container>
      <DateContainer>
        {startDate} - {endDate != null ? endDate : `Present`}
        <h3>{title}</h3>
        {subTitle && (
          <p>
            <strong>{subTitle}</strong>
          </p>
        )}
        {website && (
          <p>
            <a href={website} target="_blank" rel="noopener noreferrer">
              <small>{website}</small>
            </a>
          </p>
        )}
        {summary && <p>{summary}</p>}
        {highlights && (
          <div>
            <p>Highlights:</p>
            <ul>
              {highlights.map((item, i) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </DateContainer>
    </Container>
  )
}
