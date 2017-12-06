import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const blue1 = 'rgb(142,163,190)'
const blue2 = 'rgb(64,78,104)'
const blue3 = 'rgb(33,44,64)'
const gray1 = 'rgb(216,219,226)'
const gray2 = 'rgb(72,76,85)'
const gray3 = 'rgb(35,35,35)'

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    };
  }
  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleResize);
  }

  handleScroll = (event) => {
    this.setState({
      scrollTop: event.srcElement.body.scrollTop
    });

  }

  handleResize = (event) => {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    })
  }

  render() {
    console.log(this.state)

    let scrollPerc = this.state.scrollTop * 2 / this.state.windowHeight

    let x1 = `${0.0 * this.state.windowWidth}px`
    let x2 = `${0.2 * this.state.windowWidth}px`
    let x3 = `${0.4 * this.state.windowWidth}px`
    let x4 = `${0.6 * this.state.windowWidth}px`
    let x5 = `${0.8 * this.state.windowWidth}px`
    let xText = `${0.5 * this.state.windowWidth}px`

    let scrollYSticky = Math.min(scrollPerc, 0.75)
    let y = `${-0.6 * this.state.windowHeight - scrollYSticky * this.state.windowHeight}px`
    let yText = `${(0.25-scrollPerc) * this.state.windowHeight}px`
    let yLinks = `${(0.8-scrollYSticky) * this.state.windowHeight}px`

    let rotateDeg = Math.max(25 - scrollPerc * 2 * 25, 0)
    let translateXfactor = Math.max(1 - scrollPerc * 2, 0)

    let transform1 = `translateX(${-125*translateXfactor}%) rotate(${rotateDeg}deg)`
    let transform2 = `translateX(${-100*translateXfactor}%) rotate(${rotateDeg}deg)`
    let transform3 = `translateX(${-75*translateXfactor}%) rotate(${rotateDeg}deg)`
    let transform4 = `translateX(${-50*translateXfactor}%) rotate(${rotateDeg}deg)`
    let transform5 = `translateX(${-25*translateXfactor}%) rotate(${rotateDeg}deg)`

    return (
      <div>
        <svg width="100%" height="100%" style={{position: 'fixed'}}>
          <rect x={x1} y={y} width="25%" height="140%" style={{fill:blue2, transform:transform1}} className="headerRectangle" />
          <rect x={x2} y={y} width="25%" height="140%" style={{fill:gray2, transform:transform2}} className="headerRectangle" />
          <rect x={x3} y={y} width="25%" height="140%" style={{fill:blue3, transform:transform3}} className="headerRectangle" />
          <rect x={x4} y={y} width="25%" height="140%" style={{fill:gray3, transform:transform4}} className="headerRectangle" />
          <rect x={x5} y={y} width="25%" height="140%" style={{fill:blue1, transform:transform5}} className="headerRectangle" />
        </svg>

        <div className="headerText" style={{left:xText, top:yText}}>
          <h1>Kyle E Conroy</h1>
          <p>Astronomy Graduate Student | Vanderbilt University</p>
        </div>

        <div className="headerLinks" style={{left:x1, top:yLinks, transform:transform1}}>
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="headerLinks" style={{left:x2, top:yLinks, transform:transform2}}>
          <NavLink to="/research">Research</NavLink>
        </div>
        <div className="headerLinks" style={{left:x3, top:yLinks, transform:transform3}}>
          <NavLink to="/publications">Publications</NavLink>
        </div>
        <div className="headerLinks" style={{left:x4, top:yLinks, transform:transform4}}>
          <NavLink to="/products">Code &amp; Products</NavLink>
        </div>
        <div className="headerLinks" style={{left:x5, top:yLinks, transform:transform5}}>
          <NavLink to="/cv">Vita</NavLink>
        </div>


      </div>
    )
  }
}
