import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ImageServer from "./ImageServer.js"

const Header = ({ siteTitle }) => (
  
  <header
    style={{
      background: 'rgb(228, 180, 118)',
      overflow: 'auto'
    }}
  >
    <div
      style={{
        padding: '0',
        maxWidth: 950,
        display: 'inline'
      }}
    >
      <div style={{ margin: '1rem', maxWidth: `60px`, float: 'left', width: '100%'}}>
        <ImageServer alt="Gatsby Icon" filename="gatsby-icon.png"/>
      </div>
      <div style={{ marginTop: '1.5rem', display: 'flex' }} >
        <h1>
          <Link
            to="/"
            style={{
              color: 'rgb(102.5, 66.6, 6.6)',
              textDecoration: `none`
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
        
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
