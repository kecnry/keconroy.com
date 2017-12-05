import React from 'react'
import {Link, NavLink} from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/research">Research</NavLink></li>
          <li><NavLink to="/publications">Publications</NavLink></li>
          <li><NavLink to="/products">Code &amp; Products</NavLink></li>
          <li><NavLink to="/cv">Vita</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    )
  }
}


export class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    )
  }
}
