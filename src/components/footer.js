import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import React from "react"
import Nav from "./nav"

const HomeLink = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer
        css={css`
          background-color: rgba(44, 62, 80);
          margin-top: 5rem;
          padding: 1rem;
        `}
      >
        <div
          css={css`
            max-width: 1200px;
            margin: 0 auto;

            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          <Nav />
          <HomeLink to="/">
            <h1>Hotel Gatsby</h1>
          </HomeLink>
        </div>
      </footer>
      <p
        css={css`
          text-align: center;
          color: white;
          background-color: rgb(33, 44, 55);
          margin: 0;
          padding: 1rem;
        `}
      >
        Hotel Gatsby. All right reserved {year} &copy;
      </p>
    </>
  )
}

export default Footer
