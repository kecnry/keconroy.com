import React from 'react'
import {NavLink, Link, Route} from 'react-router-dom'


export class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center', color: 'red'}}>Sorry, this page couldn't be found</h1>
      </div>
    )
  }
}
