/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"

import "../resources/css/reset.css"
import "../resources/css/flexboxgrid.css"
import "../resources/css/style.css"

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

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-148723592-1"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-148723592-1');
          </script>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
}

export default Layout
