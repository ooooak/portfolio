import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header className="container-fluid">
    <div className="row">
      <div className="col-xs-12 end-xs">
        <nav id="navigation">
          <Link to="/">Home</Link>
          <Link to="/cv">CV</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  </header>
)


export default Header
