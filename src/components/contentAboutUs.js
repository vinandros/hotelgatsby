import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Content = styled.main`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }

  p {
    line-height: 2;
    margin-top: 2rem;
  }
`

const ContentAboutUs = () => {
  const {
    allDatoCmsPage: {
      nodes: [info],
    },
  } = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "about-us" } }) {
        nodes {
          title
          content
          image {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  const { content, title, image } = info
  return (
    <>
      <h2
        css={css`
          margin-top: 4rem;
          text-align: center;
          font-size: 4rem;
        `}
      >
        {title}
      </h2>
      <Content>
        <p>{content}</p>
        <Image fluid={image.fluid} />
      </Content>
    </>
  )
}

export default ContentAboutUs
