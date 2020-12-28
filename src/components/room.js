import React from "react"
import PropTypes from "prop-types"
import GatsbyImage from "gatsby-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Buttom = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.85);
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
`

const Room = ({ room }) => {
  const { content, title, image, slug } = room
  return (
    <div
      css={css`
        border: 1px solid #e1e1e1;
        margin-bottom: 2rem;
      `}
    >
      <GatsbyImage fluid={image.fluid} />
      <div
        css={css`
          padding: 3rem;
        `}
      >
        <h3
          css={css`
            font-size: 3rem;
          `}
        >
          {title}
        </h3>
        <p>{content}</p>
        <Buttom to={slug}>View</Buttom>
      </div>
    </div>
  )
}

Room.propTypes = {
  room: PropTypes.object.isRequired,
}

export default Room
