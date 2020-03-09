import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"

const H2 = styled.h2`
  margin: 0 1rem;
`
const Wrapper = styled.header`
  position: relative;
  color: white;
  background: lightseagreen;
  margin-bottom: 3rem;
  padding: 1.5rem;
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
`

const WhiteLink = styled(Link)`
  color: white;
`

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo-piuma.png" }) {
        childImageSharp {
          fixed(width: 120, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <InnerWrapper>
        <Logo>
          <Img fixed={data.file.childImageSharp.fixed} />
          <H2>{siteTitle}</H2>
        </Logo>
        <div>
          <WhiteLink
            activeStyle={{
              textDecoration: "none",
              cursor: "default",
            }}
            to="/"
          >
            home
          </WhiteLink>{" "}
          |{" "}
          <WhiteLink
            activeStyle={{
              textDecoration: "none",
              cursor: "default",
            }}
            to="/corsi"
          >
            corsi
          </WhiteLink>
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
