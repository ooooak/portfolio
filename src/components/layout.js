/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql,Link } from "gatsby"

import Header from "./header"

import "../resources/css/reset.css"
import "../resources/css/flexboxgrid.css"
import "../resources/css/style.css"


// const data = (() => {
//   return useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata { title }
//       }
//     }
//   `)
// })();

const titleHTML = (title) =>  {
  if (title) {
    return (
      <div className="page-title">
        <div className="container-fluid">
          {title}
        </div>
      </div>
    )
  }else{
    return "";    
  }  
}

const Layout = ({title, children}) => {
  return (
    <div id="wrapper">
      <Header />
        <main>
          { titleHTML(title) }
          <div className="content container-fluid">
            {children}
          </div>
        </main>
        <footer className="container-fluid">
          © {new Date().getFullYear()}, Built with {` `}
          <a href="https://www.gatsbyjs.org" target="_blank">Gatsby.</a>
        </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
}

export default Layout
