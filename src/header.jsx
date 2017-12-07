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
      scrollTop: window.document.body.scrollTop
    });

  }

  handleResize = (event) => {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    })
  }

  render() {
    // console.log(this.state)

    let scrollPerc = this.state.scrollTop / this.state.windowHeight

    let x1 = `${0.0 * this.state.windowWidth}px`
    let x2 = `${0.2 * this.state.windowWidth}px`
    let x3 = `${0.4 * this.state.windowWidth}px`
    let x4 = `${0.6 * this.state.windowWidth}px`
    let x5 = `${0.8 * this.state.windowWidth}px`

    var heightImagepx = 0.37 * this.state.windowHeight
    var heightImage = `${heightImagepx}px`
    var heightLogopx = 0.25*this.state.windowHeight
    var heightLogo = `${heightLogopx}px`


    if (scrollPerc < 1.0) {
      // yRectangles from -0.6->-0.8 in scrollPerc 0->1
      var yRectangles = `${this.state.windowHeight * (-0.6-0.2*scrollPerc)}px`
      // alphaRectangles from 1->0.75 in scrollPerc 0->1
      var alphaRectangles = `${1.0-0.25*scrollPerc}`

      // yLogo fixed at 0.05
      var yLogo = `${this.state.windowHeight * 0.05}px`
      // xLogo from -1*logoWidth -> 0.45*windowWidth
      var xLogo = `${-1*heightLogopx + 0.4 * this.state.windowWidth * scrollPerc}px`
      // alphaLogo from 0->1 in scrollPerc 0->1
      var alphaLogo = `${-2+3*scrollPerc}`

      // yName fixed at 0.05
      var yName = `${this.state.windowHeight * 0.05}px`
      // yImage fixed at 0.20
      var yImage = `${this.state.windowHeight * 0.20}px`
      // clipImage
      var clipImage = `rect(0px, 5000px, ${heightImagepx*(1-scrollPerc)}px, 0px)`
      // alphaImage from 1->0.25 in scrollPerc 0->1
      var alphaImage = `${1.0-0.75*scrollPerc}`
      // yTagline from 0.60->0.18 in scrollPerc 0->1
      var yTagline = `${this.state.windowHeight * (0.60-0.42*scrollPerc)}px`
      // paddingXText from 0 (centered) -> 35%
      var paddingXText = `${0+25*(scrollPerc)}%`
      // yLinks from 0.8->0.6 in scrollPerc 0->1
      var yLinks = `${this.state.windowHeight * (0.85-0.3*scrollPerc)}px`

    } else if (scrollPerc < 1.25) {
      // yRectangles from -0.8->-1.35 in scrollPerc 1->1.25
      var yRectangles = `${this.state.windowHeight * (-0.8-2.2*(scrollPerc-1))}px`
      // alphaRectangles from 0.75->0.5 in scrollPerc 1->0.25
      var alphaRectangles = `${0.75-(scrollPerc-1)}`

      // yLogo from 0.05 to -0.2 in scrollPerc 1->1.25
      var yLogo = `${this.state.windowHeight * (0.05-1.25*(scrollPerc-1))}px`
      // xLogo fixed
      var xLogo = `${-1*heightLogopx + 0.4 * this.state.windowWidth}px`
      // alphaLogo fixed at 1
      var alphaLogo = `${1.0}`

      // yName from 0.05->-0.2 in scrollPerc 1->1.25
      var yName = `${this.state.windowHeight * (0.05-1.25*(scrollPerc-1))}px`
      // yImage fixed at -1000px (hidden)
      var yImage = `${-1000}px`
      // yTagline from 0.05->-0.2 in scrollPerc 1->1.25
      var yTagline = `${this.state.windowHeight * (0.18-1.25*(scrollPerc-1))}px`
      // paddingXText fixed at 35%
      var paddingXText = '25%'
      // yLinks from 0.6->0.05 in scrollPerc 1->1.25
      var yLinks = `${this.state.windowHeight * (0.56-2.2*(scrollPerc-1))}px`
    } else {
      // yRectangles fixed at -1.35
      var yRectangles = `${this.state.windowHeight * -1.35}px`
      // alphaRectangles
      var alphaRectangles = `${0.5}`

      // yLogo fixed at -1 logoHeight
      var yLogo = `${-1*heightLogopx}px`
      // xLogo fixed
      var xLogo = `${-1*heightLogopx + 0.4 * this.state.windowWidth}px`
      // alphaLogo fixed at 0
      var alphaLogo = `${0.0}`

      // yName fixed at -1 (hidden)
      var yName = `${this.state.windowHeight * -1}px`
      // yImage fixed at -1000px (hidden)
      var yImage = `${-1000}px`
      // yTagline fixed at -1 (hidden)
      var yTagline = `${this.state.windowHeight * -1}px`
      // paddingXText fixed at 35%
      var paddingXText = '25%'
      // yLinks fixed at 0.02
      var yLinks = `${this.state.windowHeight * 0.02}px`
    }

    // rotateDeg from 25->0 in scrollPerc 0->1
    let rotateDeg = Math.max(25 - scrollPerc * 25, 0)
    // translateXfactor from 1->0 in scrollPerc 0->1
    let translateXfactor = Math.max(1 - scrollPerc, 0)

    let transform1 = `translateX(${-125*translateXfactor}%) rotate(${rotateDeg}deg)`
    let transform2 = `translateX(${-100*translateXfactor}%) rotate(${rotateDeg}deg)`
    let transform3 = `translateX(${-75*translateXfactor}%) rotate(${rotateDeg}deg)`
    let transform4 = `translateX(${-50*translateXfactor}%) rotate(${rotateDeg}deg)`
    let transform5 = `translateX(${-25*translateXfactor}%) rotate(${rotateDeg}deg)`

    // TODO: fix laggy animations by moving these things out of the React state and into refs:
    // https://stackoverflow.com/questions/29725828/update-style-of-a-component-onscroll-in-react-js
    return (
      <div>
        <svg width="100%" height="100%" style={{position: 'fixed'}}>
          <rect x={x1} y={yRectangles} width="25%" height="140%" style={{fill:blue2, opacity:alphaRectangles, transform:transform1, MozTransform:transform1}} className="headerRectangle" />
          <rect x={x2} y={yRectangles} width="25%" height="140%" style={{fill:gray2, opacity:alphaRectangles, transform:transform2, MozTransform:transform2}} className="headerRectangle" />
          <rect x={x3} y={yRectangles} width="25%" height="140%" style={{fill:blue3, opacity:alphaRectangles, transform:transform3, MozTransform:transform3}} className="headerRectangle" />
          <rect x={x4} y={yRectangles} width="25%" height="140%" style={{fill:gray3, opacity:alphaRectangles, transform:transform4, MozTransform:transform4}} className="headerRectangle" />
          <rect x={x5} y={yRectangles} width="25%" height="140%" style={{fill:blue1, opacity:alphaRectangles, transform:transform5, MozTransform:transform5}} className="headerRectangle" />
        </svg>

        <div className="headerLogo">
          <img src='/images/kec_logo_w_gh.png' style={{height:heightLogo, left:xLogo, top: yLogo, opacity:alphaLogo}}/>
        </div>
        <div className="headerText" style={{right: 0, left: 0, paddingLeft: paddingXText, top: yName, marginRight: 'auto', marginLeft: 'auto'}}>
          <h1>Kyle E Conroy</h1>
        </div>
        <div className="headerImage" style={{right:0, left: 0, top: yImage, marginRight: 'auto', marginLeft: 'auto'}}>
          <img src='/images/self.jpg' style={{height:heightImage, clip:clipImage, paddingLeft: paddingXText, opacity:alphaImage}}/>
        </div>
        <div className="headerText" style={{right: 0, left: 0, paddingLeft: paddingXText, top: yTagline, marginRight: 'auto', marginLeft: 'auto'}}>
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
