import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container, Main } from '../components/resume/resumeLayout'
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
          <Panel>
            <h2>Basics</h2>
            {summary}
          </Panel>
          <Panel>
            <h2>Work</h2>
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
          <Panel>
            <h2>Education</h2>
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
          <Panel>
            <h2>Skills</h2>
            {skillLevels.edges
              .sort((a, b) => a.node.ordering - b.node.ordering)
              .map(({ node: level }) => (
                <div>
                  <h4>{level.title}</h4>
                  <div>
                    {skills.edges
                      .filter(
                        ({ node: skill }) =>
                          skill.skillLevel.title === level.title
                      )
                      .sort((a, b) => a.node.order - b.node.order)
                      .map(({ node: skill }) => (
                        <Skill key={skill.id} skill={skill} />
                      ))}
                  </div>
                </div>
              ))}
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
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
          originalFilename
          fluid {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
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
          startDate
          endDate
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
