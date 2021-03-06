import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {LinkIcons} from './header'

const blue1 = 'rgb(142,163,190)'
const blue2 = 'rgb(64,78,104)'
const blue3 = 'rgb(33,44,64)'
const gray1 = 'rgb(216,219,226)'
const gray2 = 'rgb(72,76,85)'
const gray3 = 'rgb(35,35,35)'

export class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    var year = (new Date()).getFullYear()
    return (
      <div style={{backgroundColor: gray3, color: gray1, padding: '30px', paddingTop: '80px', paddingBottom: '40px', textAlign: 'center'}}>
        <LinkIcons />
        <br/>
        <p>&copy; {year} Kyle Conroy | Astronomy Postdoctoral Researcher | Villanova University</p>
      </div>
    )
  }
}
