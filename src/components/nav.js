import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const NavStyle = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`

const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1rem;
  font-family: "PT Sans", sans-serif;
  text-decoration: none;
  padding: 1rem;
  margin-right: 1rem;

  &:last-of-type {
    margin-right: 0;
  }
  &.currect-page {
    border-bottom: 2px solid #fff;
  }
  &:hover {
    border-bottom: 2px solid #fff;
  }
`

const Nav = () => {
  return (
    <NavStyle>
      <NavLink to="/" activeClassName="currect-page">
        Home
      </NavLink>
      <NavLink to="/about-us" activeClassName="currect-page">
        About Us
      </NavLink>
    </NavStyle>
  )
}

export default Nav
