import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import EventListener, {withOptions} from 'react-event-listener'; // https://www.npmjs.com/package/react-event-listener

import {blue1, blue2, blue3, blue3overlay, gray1, gray2, gray3, gray3overlay} from './common'

var smoothScroll = require('smoothscroll'); // https://github.com/alicelieutier/smoothScroll


export class LinkIcons extends React.Component {
  render () {
    return (
      <div>
        <a href="https://github.com/kecnry" target="_blank" rel="noopener noreferrer"  title="GitHub" className="icon"><span className="fab fa-2x fa-github"></span></a>
        <a href="https://ui.adsabs.harvard.edu/#search/q=orcid%3A0000-0002-5442-8550&sort=citation_count%20desc%2C%20bibcode%20desc" target="_blank" rel="noopener noreferrer"  title="ADS" className="icon"><span className="ai ai-2x ai-ads-square"></span></a>
        <a href="https://scholar.google.com.au/citations?user=RT1pPfYAAAAJ" target="_blank" rel="noopener noreferrer"  title="Google Scholar" className="icon"><span className="ai ai-2x ai-google-scholar-square"></span></a>
        <a href="https://www.linkedin.com/in/kyle-conroy-a2b1b337" target="_blank" rel="noopener noreferrer"  title="Linked In" className="icon"><span className="fab fa-2x fa-linkedin"></span></a>
        <a href="http://orcid.org/0000-0002-5442-8550" target="_blank" rel="noopener noreferrer"  title="Orcid ID" className="icon"><span className="ai ai-2x ai-orcid"></span></a>

      </div>
    )
  }
}

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
      // make sure to set initial transform state
      this.updateTransforms()
  }
  componentWillUnmount() {
  }
  getScrollPerc = () => {
    var scrollTop = window.document.body.scrollTop || document.documentElement.scrollTop
    return scrollTop / window.innerHeight
  }
  scrollHome = () => {
    let windowHeight = window.innerHeight
    let windowWidth = window.innerWidth
    let scrollPerc = this.getScrollPerc()

    if (windowWidth < 1024 || windowHeight < 600) {
      // don't scroll on mobile
      return
    }

    if (scrollPerc > 1.25) {
      window.document.body.scrollTop = windowHeight * 1.25
    }

    smoothScroll(windowHeight * 1.0, 1200)
  }
  scrollNavbar = () => {
    let windowHeight = window.innerHeight
    let windowWidth = window.innerWidth
    let scrollPerc = this.getScrollPerc()

    if (windowWidth < 1024 || windowHeight < 600) {
      // don't scroll on mobile
      return
    }

    if (scrollPerc < 1.0) {
      smoothScroll(windowHeight * 1.0, 1200)
    } else if (scrollPerc < 1.25){
      smoothScroll(windowHeight * 1.25, 1200)
    } else {
      window.document.body.scrollTop = windowHeight * 1.25
    }
  }
  openNav = () => {
    console.log("openNav")
    this.navigationOverlay.style.height = '100%'
  }
  closeNav = () => {
    console.log("closeNav")
    this.navigationOverlay.style.height = '0'
  }
  updateTransforms = () => {
    let windowHeight = window.innerHeight
    let windowWidth = window.innerWidth

    let scrollPerc = this.getScrollPerc()
    let scrollPercSticky = Math.min(scrollPerc, 1)

    let widthLink = 0.2*windowWidth
    let xLink1 = `${0.0 * windowWidth}px`
    let xLink2 = `${0.2 * windowWidth}px`
    let xLink3 = `${0.4 * windowWidth}px`
    let xLink4 = `${0.6 * windowWidth}px`
    let xLink5 = `${0.8 * windowWidth}px`

    var heightImagepx = 0.37 * windowHeight
    var heightImage = `${heightImagepx}px`
    var heightLogopx = 0.25 * windowHeight
    var heightLogo = `${heightLogopx}px`

    if (windowWidth < 1024 || windowHeight < 600) {
      // hide scrolling elements, show static header instead
      this.headerInteractive.style.display = 'none'
      this.headerStatic.style.display = 'block'

      var yContent = `${0}px`

      // if (windowWidth < 800) {
      //   this.headerStaticLogoLeft.style.display = 'none'
      //   this.headerStaticLogoCenter.style.display = 'block'
      // } else {
      //   this.headerStaticLogoLeft.style.display = 'block'
      //   this.headerStaticLogoCenter.style.display = 'none'
      // }

    } else {
      this.headerStatic.style.display = 'none'
      this.headerInteractive.style.display = 'block'
      // continue to responsive code below

      if (scrollPerc < 1.0) {
        // clipBackground
        var clipBackground = `rect(0px, 5000px, ${windowHeight*(0.8-0.2*scrollPerc)}px, 0px)`
        // yRectangles from -0.6->-0.8 in scrollPerc 0->1
        var yRectangles = `${windowHeight * (-0.6-0.2*scrollPerc)}px`
        // alphaRectangles from 1->0.9 in scrollPerc 0->1
        var alphaRectangles = `${1.0-0.1*scrollPerc}`

        // yLogo fixed at 0.05
        var yLogo = `${windowHeight * 0.05}px`
        // xLogo from -1*logoWidth -> 0.45*windowWidth
        var xLogo = `${-1*heightLogopx + 0.4 * windowWidth * scrollPerc}px`
        // alphaLogo from 0->1 in scrollPerc 0->1
        var alphaLogo = `${-2+3*scrollPerc}`

        // yName fixed at 0.05
        var yName = `${windowHeight * 0.05}px`
        // yImage fixed at 0.20
        var yImage = `${windowHeight * 0.20}px`
        // clipImage
        var clipImage = `rect(0px, 5000px, ${heightImagepx*(1-scrollPerc)}px, 0px)`
        // alphaImage from 1->0.25 in scrollPerc 0->1
        var alphaImage = `${1.0-0.75*scrollPerc}`
        // yTagline from 0.60->0.18 in scrollPerc 0->1
        var yTagline = `${windowHeight * (0.60-0.42*scrollPerc)}px`
        // yIcons from 0.68->0.26 in scrollPerc 0->1
        var yIcons = `${windowHeight * (0.68-0.42*scrollPerc)}px`
        // yQuote
        var yQuote = `${windowHeight * 0.38}px`
        // xQuote
        var xQuote = `${windowWidth * (2-1.54*scrollPerc)}px`
        // paddingXText from 0 (centered) -> 35%
        var paddingXText = `${0+25*(scrollPerc)}%`
        // yLinks from 0.8->0.6 in scrollPerc 0->1
        var yLinks = `${windowHeight * (0.85-0.3*scrollPerc)}px`
        // yContent
        var yContent = `${windowHeight * 1.7}px`

      } else if (scrollPerc < 1.25) {
        // clipBackground
        var clipBackground = `rect(0px, 5000px, ${windowHeight*(0.6-2.4*(scrollPerc-1))}px, 0px)`
        // yRectangles from -0.8->-1.35 in scrollPerc 1->1.25
        var yRectangles = `${windowHeight * (-0.8-2.2*(scrollPerc-1))}px`
        // alphaRectangles from 0.9->0.65 in scrollPerc 1->0.25
        var alphaRectangles = `${0.9-(scrollPerc-1)}`

        // yLogo from 0.05 to -0.2 in scrollPerc 1->1.25
        var yLogo = `${windowHeight * (0.05-1.25*(scrollPerc-1))}px`
        // xLogo fixed
        var xLogo = `${-1*heightLogopx + 0.4 * windowWidth}px`
        // alphaLogo fixed at 1
        var alphaLogo = `${1.0}`

        // yName from 0.05->-0.2 in scrollPerc 1->1.25
        var yName = `${windowHeight * (0.05-1.25*(scrollPerc-1))}px`
        // yImage fixed at -1000px (hidden)
        var yImage = `${-1000}px`
        // yTagline
        var yTagline = `${windowHeight * (0.18-1.25*(scrollPerc-1))}px`
        // yIcons
        var yIcons = `${windowHeight * (0.26-1.25*(scrollPerc-1))}px`
        // yQuote
        var yQuote = `${windowHeight * (0.38-2.0*(scrollPerc-1))}px`
        // xQuote
        var xQuote = `${windowWidth * 0.46}px`
        // paddingXText fixed at 35%
        var paddingXText = '25%'
        // yLinks from 0.6->0.05 in scrollPerc 1->1.25
        var yLinks = `${windowHeight * (0.56-2.2*(scrollPerc-1))}px`
        // yContent
        var yContent = `${windowHeight * (1.7-1.2*(scrollPerc-1))}px`

      } else {
        // clipBackground
        var clipBackground = `rect(0px, 5000px, ${windowHeight*(1-scrollPerc)}px, 0px)`
        // yRectangles fixed at -1.35
        var yRectangles = `${windowHeight * -1.35}px`
        // alphaRectangles
        var alphaRectangles = `${0.65}`

        // yLogo fixed at -1 logoHeight
        var yLogo = `${-1*heightLogopx}px`
        // xLogo fixed
        var xLogo = `${-1*heightLogopx + 0.4 * windowWidth}px`
        // alphaLogo fixed at 0
        var alphaLogo = `${0.0}`

        // yName fixed at -1 (hidden)
        var yName = `${windowHeight * -1}px`
        // yImage fixed at -1000px (hidden)
        var yImage = `${-1000}px`
        // yTagline fixed at -1 (hidden)
        var yTagline = `${windowHeight * -1}px`
        // yIcons fixed at -1 (hidden)
        var yIcons = `${windowHeight * -1}px`
        // yQuote fixed at -1 (hidden)
        var yQuote = `${windowHeight * -1}px`
        // xQuote
        var xQuote = `${windowWidth * 0.46}px`
        // paddingXText fixed at 35%
        var paddingXText = '25%'
        // yLinks fixed at 0.02
        var yLinks = `${windowHeight * 0.02}px`
        // yContent
        var yContent = `${windowHeight * 1.4}px`

      }

      // rotateDeg from 25->0 in scrollPerc 0->1
      let rotateDeg = Math.max(25 - scrollPerc * 25, 0)
      // translateXfactor from 1->0 in scrollPerc 0->1
      // let translateXfactor = Math.max(1 - scrollPerc, 0)
      let scaleXRectangles = 1 - 0.25*scrollPercSticky

      let transform1 = `translateY(${yRectangles}) translateX(${windowWidth*(-0.2+0.20*scrollPercSticky)}px) rotate(${rotateDeg}deg) scaleX(${scaleXRectangles})`
      let transform2 = `translateY(${yRectangles}) translateX(${windowWidth*(0.05+0.15*scrollPercSticky)}px) rotate(${rotateDeg}deg) scaleX(${scaleXRectangles})`
      let transform3 = `translateY(${yRectangles}) translateX(${windowWidth*(0.30+0.10*scrollPercSticky)}px) rotate(${rotateDeg}deg) scaleX(${scaleXRectangles})`
      let transform4 = `translateY(${yRectangles}) translateX(${windowWidth*(0.55+0.05*scrollPercSticky)}px) rotate(${rotateDeg}deg) scaleX(${scaleXRectangles})`
      let transform5 = `translateY(${yRectangles}) translateX(${windowWidth*(0.80+0.00*scrollPercSticky)}px) rotate(${rotateDeg}deg) scaleX(${scaleXRectangles})`

      this.headerBackground.style.clip = clipBackground

      this.rectangle1.style.opacity = alphaRectangles
      this.rectangle1.style.transform = transform1

      this.rectangle2.style.opacity = alphaRectangles
      this.rectangle2.style.transform = transform2

      this.rectangle3.style.opacity = alphaRectangles
      this.rectangle3.style.transform = transform3

      this.rectangle4.style.opacity = alphaRectangles
      this.rectangle4.style.transform = transform4

      this.rectangle5.style.opacity = alphaRectangles
      this.rectangle5.style.transform = transform5

      this.headerLogo.style.height = heightLogo
      this.headerLogo.style.left = xLogo
      this.headerLogo.style.top = yLogo
      this.headerLogo.style.opacity = alphaLogo

      this.headerName.style.paddingLeft = paddingXText
      this.headerName.style.top = yName

      this.headerImageDiv.style.top = yImage
      this.headerImage.style.height = heightImage
      this.headerImage.style.clip = clipImage
      this.headerImage.style.paddingLeft = paddingXText
      this.headerImage.style.opacity = alphaImage

      this.headerTagline.style.paddingLeft = paddingXText
      this.headerTagline.style.top = yTagline

      this.headerIconsDiv.style.top = yIcons
      this.headerIconsDiv.style.paddingLeft = paddingXText

      this.headerQuote.style.top = yQuote
      this.headerQuote.style.left = xQuote
      this.headerQuote.style.opacity = alphaLogo

      let transformLink1 = `translateY(${yLinks}) translateX(${windowWidth*(-0.05+0.12*scrollPercSticky)}px) rotate(${rotateDeg}deg)`
      let transformLink2 = `translateY(${yLinks}) translateX(${windowWidth*(-0.04+0.10*scrollPercSticky)}px) rotate(${rotateDeg}deg)`
      let transformLink3 = `translateY(${yLinks}) translateX(${windowWidth*(-0.0+0.08*scrollPercSticky)}px) rotate(${rotateDeg}deg)`
      let transformLink4 = `translateY(${yLinks}) translateX(${windowWidth*(0.03+0.04*scrollPercSticky)}px) rotate(${rotateDeg}deg)`
      let transformLink5 = `translateY(${yLinks}) translateX(${windowWidth*(0.10+0.00*scrollPercSticky)}px) rotate(${rotateDeg}deg)`

      this.headerLink1.style.left = xLink1
      // this.headerLink1.child.style.paddingLeft = `${widthLink/2}px`
      // this.headerLink1.child.style.paddingRight = `${widthLink/2}px`
      this.headerLink1.style.transform = transformLink1

      this.headerLink2.style.left = xLink2
      this.headerLink2.style.transform = transformLink2

      this.headerLink3.style.left = xLink3
      this.headerLink3.style.transform = transformLink3

      this.headerLink4.style.left = xLink4
      this.headerLink4.style.transform = transformLink4

      this.headerLink5.style.left = xLink5
      this.headerLink5.style.transform = transformLink5
    }

    if (this.props.app.contentDiv) {
      this.props.app.contentDiv.style.paddingTop = yContent
    }

  }

  render() {
    // console.log(this.state)

    // we'll handle scrolling transformations by setting the ref and then
    // updating the transform in the updateTransforms function.  Normally
    // editing the DOM like this should probably be done by changing the
    // state and handling in the render function, but that creates a laggy
    // experience and inconsistency between browsers.  See discussion here:
    // https://stackoverflow.com/a/35467176
    // https://reactjs.org/docs/refs-and-the-dom.html


    return (
      <div>
        <EventListener
          target="window"
          onResize={this.updateTransforms}
          onScroll={withOptions(this.updateTransforms, {passive: true, capture: false})}
        />
        <div ref={(ref) => this.headerStatic = ref} style={{backgroundSize:'cover', backgroundImage:`url(${process.env.PUBLIC_URL}/images/smc.jpg)`, height: "300px", marginTop: "-50px"}}>
          <div style={{backgroundColor: blue3overlay, position: 'absolute', left: 0, width: '100%', height: '300px'}}></div>
          {/* <div style={{position: 'fixed', width:'100%', height:'100%', backgroundSize:'cover', backgroundImage:`url(${process.env.PUBLIC_URL}/images/smc.jpg)`}}>
          </div> */}

          {/* <svg width="100%" height="25%" style={{position: 'fixed', overflow: 'visible'}}>
            <rect width="27%" height="100%" className="headerRectangle" style={{fill:blue2}}/>
            <rect width="27%" height="100%" className="headerRectangle" style={{fill:gray2}} />
            <rect width="27%" height="100%" className="headerRectangle" style={{fill:blue3}} />
            <rect width="27%" height="100%" className="headerRectangle" style={{fill:gray3}} />
            <rect width="27%" height="100%" className="headerRectangle" style={{fill:blue1}} />
          </svg> */}

          {/* <div ref={(ref) => this.headerStaticLogoLeft = ref} className="headerLogo">
            <img src={`${process.env.PUBLIC_URL}/images/kec_logo_w_gh.png`} style={{position: "relative", height: "100px", paddingTop: "100px", paddingLeft: "50px"}}/>
          </div> */}
          <div className="headerStaticNavbar" onClick={this.openNav} style={{cursor: 'pointer', position: "relative", right: 0, left: 0, height: '40px', marginRight: 'auto', marginLeft: 'auto', marginTop: '50px'}}>
            {/* <img src={`${process.env.PUBLIC_URL}/images/kec_logo_w_gh.png`} style={{height: "40px"}}/> */}
            <span className="fas fa-bars fa-2x" style={{padding: '10px', color: 'white'}}></span>
          </div>

          <div ref={(ref) => this.navigationOverlay = ref} className="overlay" style={{backgroundColor: gray3overlay}}>

            <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>

            <div className="overlay-content">
              <NavLink exact to="/" onClick={this.closeNav}>Home</NavLink>
              <NavLink to="/research" onClick={this.closeNav}>Research</NavLink>
              <NavLink to="/publications" onClick={this.closeNav}>Publications</NavLink>
              <NavLink to="/products" onClick={this.closeNav}>Code &amp; Products</NavLink>
              <NavLink to="/cv" onClick={this.closeNav}>Vita</NavLink>
            </div>

          </div>

          <div className="headerText" onClick={this.openNav} style={{position: "relative", right: 0, left: 0, marginRight: 'auto', marginLeft: 'auto', paddingTop: "10px"}}>
            <h1 style={{fontSize: '3em', marginTop: '10px'}}>Kyle E Conroy</h1>
          </div>

          {/* <div ref={(ref) => this.headerStaticLogoCenter = ref} className="headerLogo">
            <img src={`${process.env.PUBLIC_URL}/images/kec_logo_w_gh.png`} style={{position: "relative", height: "100px"}}/>
          </div> */}

          {/* <div className="headerImage" style={{right:0, left: 0, marginRight: 'auto', marginLeft: 'auto'}}>
            <img src={`${process.env.PUBLIC_URL}/images/self.jpg`} />
          </div> */}
          <div className="headerText" style={{position: "relative", right: 0, left: 0, marginRight: 'auto', marginLeft: 'auto', paddingTop: "0px"}}>
            <p>Physics PhD | Vanderbilt University</p>
          </div>

          <div className="headerIcons" style={{position: "relative", right: 0, left: 0, marginRight: 'auto', marginLeft: 'auto', paddingTop: "5px", paddingBottom: "20px"}}>
            <LinkIcons />
          </div>

          {/* <ul style={{width: "100%", listStyle: "none", textAlign: "center"}}>
            <li style={{display: "inline-block", width: "20%"}}><NavLink exact to="/" onClick={this.scrollHome}>Home</NavLink></li>
            <li style={{display: "inline-block", width: "20%"}}><NavLink to="/research" onClick={this.scrollNavbar}>Research</NavLink></li>
            <li style={{display: "inline-block", width: "20%"}}><NavLink to="/publications" onClick={this.scrollNavbar}>Publications</NavLink></li>
            <li style={{display: "inline-block", width: "20%"}}><NavLink to="/products" onClick={this.scrollNavbar}>Code &amp; Products</NavLink></li>
            <li style={{display: "inline-block", width: "20%"}}><NavLink to="/cv" onClick={this.scrollNavbar}>Vita</NavLink></li>
          </ul> */}

        </div>


        <div ref={(ref) => this.headerInteractive = ref}>
          <div ref={(ref) => this.headerBackground = ref} style={{position: 'fixed', width:'100%', height:'100%', backgroundSize:'cover', backgroundImage:`url(${process.env.PUBLIC_URL}/images/smc.jpg)`}}>
          </div>

          {/* if we set the height to 100% then that will block all links on the page.  So instead, we set the height to 5%,
          overflate the heights of all svg objects by a factor of 20, and set overflow to visible */}
          <svg ref={(ref) => this.headerSVG = ref} width="100%" height="5%" style={{position: 'fixed', overflow: 'visible'}}>
            <rect ref={(ref) => this.rectangle1 = ref} width="27%" height="2800%" className="headerRectangle" style={{fill:blue2}}/>
            <rect ref={(ref) => this.rectangle2 = ref} width="27%" height="2800%" className="headerRectangle" style={{fill:gray2}} />
            <rect ref={(ref) => this.rectangle3 = ref} width="27%" height="2800%" className="headerRectangle" style={{fill:blue3}} />
            <rect ref={(ref) => this.rectangle4 = ref} width="27%" height="2800%" className="headerRectangle" style={{fill:gray3}} />
            <rect ref={(ref) => this.rectangle5 = ref} width="27%" height="2800%" className="headerRectangle" style={{fill:blue1}} />
          </svg>

          <div ref={(ref) => this.headerLogoDiv = ref} className="headerLogo">
            <img ref={(ref) => this.headerLogo = ref} src={`${process.env.PUBLIC_URL}/images/kec_logo_w_gh.png`}/>
          </div>
          <div ref={(ref) => this.headerName = ref} className="headerText" style={{right: 0, left: 0, marginRight: 'auto', marginLeft: 'auto'}}>
            <h1>Kyle E Conroy</h1>
          </div>
          <div ref={(ref) => this.headerImageDiv = ref} className="headerImage" style={{right:0, left: 0, marginRight: 'auto', marginLeft: 'auto'}}>
            <img ref={(ref) => this.headerImage = ref} src={`${process.env.PUBLIC_URL}/images/self.jpg`} />
          </div>
          <div ref={(ref) => this.headerTagline = ref} className="headerText" style={{right: 0, left: 0, marginRight: 'auto', marginLeft: 'auto'}}>
            <p>Physics PhD | Vanderbilt University</p>
          </div>

          <div ref={(ref) => this.headerIconsDiv = ref} className="headerIcons" style={{right: 0, left: 0, marginRight: 'auto', marginLeft: 'auto'}}>
            <LinkIcons />
          </div>

          <div ref={(ref) => this.headerQuote = ref} className="headerQuote">
            <p style={{background: "rgba(24,25,19,.8)", borderRadius: "10px", padding: "5px"}}>"We are a way for the cosmos to know itself" - Carl Sagan</p>
          </div>


          <div ref={(ref) => this.headerLink1 = ref} className="headerLinks">
            <NavLink exact to="/" onClick={this.scrollHome}>Home</NavLink>
          </div>
          <div ref={(ref) => this.headerLink2 = ref} className="headerLinks">
            <NavLink to="/research" onClick={this.scrollNavbar}>Research</NavLink>
          </div>
          <div ref={(ref) => this.headerLink3 = ref} className="headerLinks">
            <NavLink to="/publications" onClick={this.scrollNavbar}>Publications</NavLink>
          </div>
          <div ref={(ref) => this.headerLink4 = ref} className="headerLinks">
            <NavLink to="/products" onClick={this.scrollNavbar}>Code &amp; Products</NavLink>
          </div>
          <div ref={(ref) => this.headerLink5 = ref} className="headerLinks">
            <NavLink to="/cv" onClick={this.scrollNavbar}>Vita</NavLink>
          </div>
        </div>
      </div>
    )
  }
}
