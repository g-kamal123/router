import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/gallery'>Gallery</Link>
            </li>
            <li>
                <Link to='/event'>Event</Link>
            </li>
            <li>
                <Link to='/feedback'>Feedback</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
      </nav>
    )
  }
}

export default Nav