import React from 'react'
import {Link} from 'react-router-dom'


export default class NavBar extends React.Component {

  render() {
    return (
      <header className="navbar">
        <Link to="/" className="nav-link">
          <strong>NOTE BOOK</strong>
        </Link>
        <Link to="/page-2" className="nav-link">
          Page 2
        </Link>
      </header>
    )
  }
}
