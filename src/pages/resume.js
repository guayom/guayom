import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container, Main, SkillsContainer, NavigationContainer } from '../components/resume/resumeLayout'
import Panel from '../components/resume/panel'
import Item from '../components/resume/item'
import Skill from '../components/resume/skill'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const {
    page,
    languages,
    work,
    education,
    skills,
    skillLevels,
    basics: { name, label, email, phone, website, summary, idNumber, picture },
  } = data

  return (
    <Layout>
      <SEO title={page.name} />
      <Container>
        <Main>
          <NavigationContainer py={4}>Navigation here</NavigationContainer>
          <Panel title="About me">
            {summary}
          </Panel>
          <Panel title="Work experience">
            {work.edges.map(({ node: work }) => {
              return (
                <Item
                  key={work.id}
                  startDate={work.startDate}
                  endDate={work.endDate}
                  title={work.company}
                  subTitle={work.position}
                  website={work.website}
                  summary={work.summary}
                  highlights={work.highlights}
                />
              )
            })}
          </Panel>
          <Panel title="Education">
            {education.edges.map(({ node: education }) => {
              return (
                <Item
                  key={education.id}
                  startDate={education.startDate}
                  endDate={education.endDate}
                  title={education.institution}
                  subTitle={`${education.studiesType} in ${education.area}`}
                />
              )
            })}
          </Panel>
          <Panel title="Skills">
            <SkillsContainer>
              {skillLevels.edges
                .sort((a, b) => a.node.ordering - b.node.ordering)
                .map(({ node: level }) => (
                  <div>
                    <h4 style={{margin: 0}}>{level.title}</h4>
                    <ul>
                      {skills.edges
                        .filter(
                          ({ node: skill }) =>
                            skill.skillLevel.title === level.title
                        )
                        .sort((a, b) => a.node.order - b.node.order)
                        .map(({ node: skill }) => (
                          <Skill key={skill.id} skill={skill} />
                        ))}
                    </ul>
                  </div>
                ))}
            </SkillsContainer>
          </Panel>
        </Main>
        <aside>
          <Img fluid={picture.asset.fluid} alt={name} />
          <div>{name}</div>
          <div>{label}</div>
          <div>{email}</div>
          <div>{phone}</div>
          {languages.edges.map(({ node: language }) => {
            return (
              <div key={language.id}>
                {language.language}: {language.fluency}
              </div>
            )
          })}
          <div>{website}</div>
          <div>{idNumber}</div>
        </aside>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ResumeTemplateQuery {
    page: sanityPage(path: { eq: "/resume/" }) {
      name
      description
    }
    basics: sanityBasics(id: { eq: "d66e91f8-30e2-5aa6-99cd-d5e2251a4afb" }) {
      name
      label
      email
      phone
      website
      summary
      idNumber
      location {
        address
        city
        region
      }
      picture {
        asset {
          fluid(maxWidth: 700) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
    languages: allSanityLanguage {
      edges {
        node {
          id
          language
          fluency
        }
      }
    }
    work: allSanityWork(
      sort: { fields: [endDate, position, startDate], order: DESC }
    ) {
      edges {
        node {
          id
          company
          position
          website
          startDate(formatString: "YYYY")
          endDate(formatString: "YYYY")
          summary
          highlights
        }
      }
    }
    education: allSanityEducation {
      edges {
        node {
          id
          institution
          area
          startDate(formatString: "YYYY")
          endDate(formatString: "YYYY")
          studiesType
        }
      }
    }
    skills: allSanitySkill {
      edges {
        node {
          id
          name
          skillLevel {
            title
          }
          keywords
          order
        }
      }
    }
    skillLevels: allSanitySkillLevel {
      edges {
        node {
          id
          title
          ordering
        }
      }
    }
  }
`
