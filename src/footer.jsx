import React from 'react'
import { LinkIcons } from './header'

const gray1 = 'rgb(216,219,226)'
const gray3 = 'rgb(35,35,35)'

export function Footer() {
  const year = (new Date()).getFullYear()
  return (
    <div style={{ backgroundColor: gray3, color: gray1, padding: '30px', paddingTop: '80px', paddingBottom: '40px', textAlign: 'center' }}>
      <LinkIcons />
      <br />
      <p>&copy; {year} Kyle Conroy | Astronomy Postdoctoral Researcher | Villanova University</p>
    </div>
  )
}
