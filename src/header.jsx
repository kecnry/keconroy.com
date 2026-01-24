import React, { useEffect, useRef, useCallback } from 'react'
import { NavLink } from 'react-router-dom'

import { blue1, blue2, blue3, blue3overlay, gray3overlay, getScrollPerc, urlGitHub, urlADS, urlGoogleScholar, urlLinkedIn, urlOrcid } from './common'


export function LinkIcons() {
  return (
    <div>
      <a href={urlGitHub} target="_blank" rel="noopener noreferrer" title="GitHub" className="icon"><span className="fab fa-2x fa-github"></span></a>
      <a href={urlADS} target="_blank" rel="noopener noreferrer" title="ADS" className="icon"><span className="ai ai-2x ai-ads-square"></span></a>
      <a href={urlGoogleScholar} target="_blank" rel="noopener noreferrer" title="Google Scholar" className="icon"><span className="ai ai-2x ai-google-scholar-square"></span></a>
      <a href={urlLinkedIn} target="_blank" rel="noopener noreferrer" title="Linked In" className="icon"><span className="fab fa-2x fa-linkedin"></span></a>
      <a href={urlOrcid} target="_blank" rel="noopener noreferrer" title="Orcid ID" className="icon"><span className="ai ai-2x ai-orcid"></span></a>
    </div>
  )
}

export function Header({ contentRef }) {
  // Refs for all DOM elements
  const headerInteractive = useRef(null)
  const headerStatic = useRef(null)
  const navigationOverlay = useRef(null)
  const headerBackground = useRef(null)
  const rectangle1 = useRef(null)
  const rectangle2 = useRef(null)
  const rectangle3 = useRef(null)
  const rectangle4 = useRef(null)
  const rectangle5 = useRef(null)
  const headerLogo = useRef(null)
  const headerName = useRef(null)
  const headerImageDiv = useRef(null)
  const headerImage = useRef(null)
  const headerTagline = useRef(null)
  const headerIconsDiv = useRef(null)
  const headerQuote = useRef(null)
  const headerLink1 = useRef(null)
  const headerLink2 = useRef(null)
  const headerLink3 = useRef(null)
  const headerLink4 = useRef(null)
  const headerLink5 = useRef(null)

  const scrollHome = useCallback(() => {
    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth
    const scrollPerc = getScrollPerc()

    if (windowWidth < 1024 || windowHeight < 600) {
      return
    }

    if (scrollPerc > 1.25) {
      window.document.body.scrollTop = windowHeight * 1.25
    }

    window.scrollTo({ top: windowHeight * 1.0, behavior: 'smooth' })
  }, [])

  const scrollNavbar = useCallback(() => {
    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth
    const scrollPerc = getScrollPerc()

    if (windowWidth < 1024 || windowHeight < 600) {
      return
    }

    if (scrollPerc < 1.0) {
      window.scrollTo({ top: windowHeight * 1.0, behavior: 'smooth' })
    } else if (scrollPerc < 1.25) {
      window.scrollTo({ top: windowHeight * 1.25, behavior: 'smooth' })
    }
  }, [])

  const openNav = useCallback(() => {
    if (navigationOverlay.current) {
      navigationOverlay.current.style.height = '100%'
    }
  }, [])

  const closeNav = useCallback(() => {
    if (navigationOverlay.current) {
      navigationOverlay.current.style.height = '0'
    }
  }, [])

  const updateTransforms = useCallback(() => {
    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth

    const scrollPerc = getScrollPerc()
    const scrollPercSticky = Math.min(scrollPerc, 1)

    const xLink1 = `${0.0 * windowWidth}px`
    const xLink2 = `${0.2 * windowWidth}px`
    const xLink3 = `${0.4 * windowWidth}px`
    const xLink4 = `${0.6 * windowWidth}px`
    const xLink5 = `${0.8 * windowWidth}px`

    const heightImagepx = 0.37 * windowHeight
    const heightImage = `${heightImagepx}px`
    const heightLogopx = 0.25 * windowHeight
    const heightLogo = `${heightLogopx}px`

    let yContent, clipBackground, yRectangles, alphaRectangles
    let yLogo, xLogo, alphaLogo, yName, yImage, clipImage, alphaImage
    let yTagline, yIcons, yQuote, xQuote, paddingXText, yLinks

    if (windowWidth < 1024 || windowHeight < 600) {
      // hide scrolling elements, show static header instead
      if (headerInteractive.current) headerInteractive.current.style.display = 'none'
      if (headerStatic.current) headerStatic.current.style.display = 'block'
      yContent = `${0}px`
    } else {
      if (headerStatic.current) headerStatic.current.style.display = 'none'
      if (headerInteractive.current) headerInteractive.current.style.display = 'block'

      if (scrollPerc < 1.0) {
        clipBackground = `rect(0px, 5000px, ${windowHeight * (0.8 - 0.2 * scrollPerc)}px, 0px)`
        yRectangles = `${windowHeight * (-0.45 - 0.35 * scrollPerc)}`
        alphaRectangles = `${1.0 - 0.1 * scrollPerc}`
        yLogo = `${windowHeight * 0.05}px`
        xLogo = `${-1 * heightLogopx + 0.4 * windowWidth * scrollPerc}px`
        alphaLogo = `${-2 + 3 * scrollPerc}`
        yName = `${windowHeight * 0.05}px`
        yImage = `${windowHeight * 0.20}px`
        clipImage = `rect(0px, 5000px, ${heightImagepx * (1 - scrollPerc)}px, 0px)`
        alphaImage = `${1.0 - 0.75 * scrollPerc}`
        yTagline = `${windowHeight * (0.60 - 0.42 * scrollPerc)}px`
        yIcons = `${windowHeight * (0.68 - 0.42 * scrollPerc)}px`
        yQuote = `${windowHeight * 0.38}px`
        xQuote = `${windowWidth * (2 - 1.54 * scrollPerc)}px`
        paddingXText = `${0 + 25 * (scrollPerc)}%`
        yLinks = `${windowHeight * (0.85 - 0.3 * scrollPerc)}px`
        yContent = `${windowHeight * 1.7}px`
      } else if (scrollPerc < 1.25) {
        clipBackground = `rect(0px, 5000px, ${windowHeight * (0.6 - 2.4 * (scrollPerc - 1))}px, 0px)`
        yRectangles = `${windowHeight * (-0.8 - 2.2 * (scrollPerc - 1))}`
        alphaRectangles = `${0.9 - (scrollPerc - 1)}`
        yLogo = `${windowHeight * (0.05 - 1.25 * (scrollPerc - 1))}px`
        xLogo = `${-1 * heightLogopx + 0.4 * windowWidth}px`
        alphaLogo = `${1.0}`
        yName = `${windowHeight * (0.05 - 1.25 * (scrollPerc - 1))}px`
        yImage = `${-1000}px`
        yTagline = `${windowHeight * (0.18 - 1.25 * (scrollPerc - 1))}px`
        yIcons = `${windowHeight * (0.26 - 1.25 * (scrollPerc - 1))}px`
        yQuote = `${windowHeight * (0.38 - 2.0 * (scrollPerc - 1))}px`
        xQuote = `${windowWidth * 0.46}px`
        paddingXText = '25%'
        yLinks = `${windowHeight * (0.55 - 2.12 * (scrollPerc - 1))}px`
        yContent = `${windowHeight * (1.7 - 1.2 * (scrollPerc - 1))}px`
      } else {
        clipBackground = `rect(0px, 5000px, ${windowHeight * (1 - scrollPerc)}px, 0px)`
        yRectangles = `${windowHeight * -1.35}`
        alphaRectangles = `${0.65}`
        yLogo = `${-1 * heightLogopx}px`
        xLogo = `${-1 * heightLogopx + 0.4 * windowWidth}px`
        alphaLogo = `${0.0}`
        yName = `${windowHeight * -1}px`
        yImage = `${-1000}px`
        yTagline = `${windowHeight * -1}px`
        yIcons = `${windowHeight * -1}px`
        yQuote = `${windowHeight * -1}px`
        xQuote = `${windowWidth * 0.46}px`
        paddingXText = '25%'
        yLinks = `${windowHeight * 0.02}px`
        yContent = `${windowHeight * 1.4}px`
      }

      const rotateDeg = Math.max(25 - scrollPerc * 25, 0)
      const scaleXRectangles = 1 - 0.25 * scrollPercSticky

      const transform1 = `translateY(${yRectangles}px) translateX(${windowWidth * (0.10 - 0.10 * scrollPercSticky)}px) rotate(${rotateDeg}deg) scaleX(${scaleXRectangles})`
      const transform2 = `translateY(${yRectangles}px) translateX(${windowWidth * (0.35 - 0.15 * scrollPercSticky)}px) rotate(${rotateDeg}deg) scaleX(${scaleXRectangles})`
      const transform3 = `translateY(${yRectangles}px) translateX(${windowWidth * (0.60 - 0.20 * scrollPercSticky)}px) rotate(${rotateDeg}deg) scaleX(${scaleXRectangles})`
      const transform4 = `translateY(${yRectangles}px) translateX(${windowWidth * (0.85 - 0.25 * scrollPercSticky)}px) rotate(${rotateDeg}deg) scaleX(${scaleXRectangles})`
      const transform5 = `translateY(${yRectangles}px) translateX(${windowWidth * (1.10 - 0.30 * scrollPercSticky)}px) rotate(${rotateDeg}deg) scaleX(${scaleXRectangles})`

      if (headerBackground.current) headerBackground.current.style.clip = clipBackground

      if (rectangle1.current) {
        rectangle1.current.style.opacity = alphaRectangles
        rectangle1.current.style.transform = transform1
      }
      if (rectangle2.current) {
        rectangle2.current.style.opacity = alphaRectangles
        rectangle2.current.style.transform = transform2
      }
      if (rectangle3.current) {
        rectangle3.current.style.opacity = alphaRectangles
        rectangle3.current.style.transform = transform3
      }
      if (rectangle4.current) {
        rectangle4.current.style.opacity = alphaRectangles
        rectangle4.current.style.transform = transform4
      }
      if (rectangle5.current) {
        rectangle5.current.style.opacity = alphaRectangles
        rectangle5.current.style.transform = transform5
      }

      if (headerLogo.current) {
        headerLogo.current.style.height = heightLogo
        headerLogo.current.style.left = xLogo
        headerLogo.current.style.top = yLogo
        headerLogo.current.style.opacity = alphaLogo
      }

      if (headerName.current) {
        headerName.current.style.paddingLeft = paddingXText
        headerName.current.style.top = yName
      }

      if (headerImageDiv.current) headerImageDiv.current.style.top = yImage
      if (headerImage.current) {
        headerImage.current.style.height = heightImage
        headerImage.current.style.clip = clipImage
        headerImage.current.style.paddingLeft = paddingXText
        headerImage.current.style.opacity = alphaImage
      }

      if (headerTagline.current) {
        headerTagline.current.style.paddingLeft = paddingXText
        headerTagline.current.style.top = yTagline
      }

      if (headerIconsDiv.current) {
        headerIconsDiv.current.style.top = yIcons
        headerIconsDiv.current.style.paddingLeft = paddingXText
      }

      if (headerQuote.current) {
        headerQuote.current.style.top = yQuote
        headerQuote.current.style.left = xQuote
        headerQuote.current.style.opacity = alphaLogo
      }

      const transformLink1 = `translateY(${yLinks}) translateX(${windowWidth * (-0.10 + 0.18 * scrollPercSticky)}px) rotate(${rotateDeg}deg)`
      const transformLink2 = `translateY(${yLinks}) translateX(${windowWidth * (-0.03 + 0.11 * scrollPercSticky)}px) rotate(${rotateDeg}deg)`
      const transformLink3 = `translateY(${yLinks}) translateX(${windowWidth * (-0.0 + 0.07 * scrollPercSticky)}px) rotate(${rotateDeg}deg)`
      const transformLink4 = `translateY(${yLinks}) translateX(${windowWidth * (0.03 + 0.03 * scrollPercSticky)}px) rotate(${rotateDeg}deg)`
      const transformLink5 = `translateY(${yLinks}) translateX(${windowWidth * (0.10 - 0.00 * scrollPercSticky)}px) rotate(${rotateDeg}deg)`

      if (headerLink1.current) {
        headerLink1.current.style.left = xLink1
        headerLink1.current.style.transform = transformLink1
      }
      if (headerLink2.current) {
        headerLink2.current.style.left = xLink2
        headerLink2.current.style.transform = transformLink2
      }
      if (headerLink3.current) {
        headerLink3.current.style.left = xLink3
        headerLink3.current.style.transform = transformLink3
      }
      if (headerLink4.current) {
        headerLink4.current.style.left = xLink4
        headerLink4.current.style.transform = transformLink4
      }
      if (headerLink5.current) {
        headerLink5.current.style.left = xLink5
        headerLink5.current.style.transform = transformLink5
      }
    }

    if (contentRef && contentRef.current) {
      contentRef.current.style.paddingTop = yContent
    }
  }, [contentRef])

  useEffect(() => {
    updateTransforms()

    const handleScroll = () => updateTransforms()
    const handleResize = () => updateTransforms()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [updateTransforms])

  return (
    <div>
      <div ref={headerStatic} style={{ backgroundSize: 'cover', backgroundImage: `url(/images/smc.jpg)`, height: "300px", marginTop: "-50px" }}>
        <div style={{ backgroundColor: blue3overlay, position: 'absolute', left: 0, width: '100%', height: '300px' }}></div>

        <div className="headerStaticNavbar" onClick={openNav} style={{ cursor: 'pointer', position: "relative", right: 0, left: 0, height: '40px', marginRight: 'auto', marginLeft: 'auto', marginTop: '50px', marginBottom: '-20px' }}>
          <span className="fas fa-bars fa-2x" style={{ padding: '10px', color: 'white' }}></span>
        </div>

        <div ref={navigationOverlay} className="overlay" style={{ backgroundColor: gray3overlay }}>
          <a href="#" className="closebtn" onClick={(e) => { e.preventDefault(); closeNav(); }}>&times;</a>
          <div className="overlay-content">
            <NavLink to="/" onClick={closeNav}>Home</NavLink>
            <NavLink to="/research" onClick={closeNav}>Research</NavLink>
            <NavLink to="/publications" onClick={closeNav}>Publications</NavLink>
            <NavLink to="/products" onClick={closeNav}>Code &amp; Products</NavLink>
            <NavLink to="/cv" onClick={closeNav}>Vita</NavLink>
          </div>
        </div>

        <div className="headerText" onClick={openNav} style={{ position: "relative", right: 0, left: 0, marginRight: 'auto', marginLeft: 'auto', paddingTop: "10px" }}>
          <h1 style={{ fontSize: '3em', marginTop: '10px' }}>Kyle E Conroy<br />PhD</h1>
        </div>

        <div className="headerText" style={{ position: "relative", right: 0, left: 0, marginRight: 'auto', marginLeft: 'auto', paddingTop: "0px" }}>
          <p>Postdoctoral Researcher<br />Villanova University</p>
        </div>

        <div className="headerIcons" style={{ position: "relative", right: 0, left: 0, marginRight: 'auto', marginLeft: 'auto', paddingTop: "5px", paddingBottom: "20px" }}>
          <LinkIcons />
        </div>
      </div>

      <div ref={headerInteractive}>
        <div ref={headerBackground} style={{ position: 'fixed', width: '100%', height: '100%', backgroundSize: 'cover', backgroundImage: `url(/images/smc.jpg)` }}>
        </div>

        <svg width="100%" height="5%" style={{ position: 'fixed', overflow: 'visible' }}>
          <rect ref={rectangle1} width="27%" height="2800%" className="headerRectangle" style={{ fill: blue2 }} />
          <rect ref={rectangle2} width="27%" height="2800%" className="headerRectangle" style={{ fill: 'rgb(50,56,70)' }} />
          <rect ref={rectangle3} width="27%" height="2800%" className="headerRectangle" style={{ fill: blue3 }} />
          <rect ref={rectangle4} width="27%" height="2800%" className="headerRectangle" style={{ fill: 'rgb(35,35,35)' }} />
          <rect ref={rectangle5} width="27%" height="2800%" className="headerRectangle" style={{ fill: blue1 }} />
        </svg>

        <div className="headerLogo">
          <img ref={headerLogo} src="/images/kec_logo_w_gh.png" alt="logo" />
        </div>
        <div ref={headerName} className="headerText" style={{ right: 0, left: 0, marginRight: 'auto', marginLeft: 'auto' }}>
          <h1>Kyle E Conroy, PhD</h1>
        </div>
        <div ref={headerImageDiv} className="headerImage" style={{ right: 0, left: 0, marginRight: 'auto', marginLeft: 'auto' }}>
          <img ref={headerImage} src="/images/self.jpg" style={{ borderRadius: "6px" }} alt="self" />
        </div>
        <div ref={headerTagline} className="headerText" style={{ right: 0, left: 0, marginRight: 'auto', marginLeft: 'auto' }}>
          <p>Postdoctoral Researcher | Villanova University</p>
        </div>

        <div ref={headerIconsDiv} className="headerIcons" style={{ right: 0, left: 0, marginRight: 'auto', marginLeft: 'auto' }}>
          <LinkIcons />
        </div>

        <div ref={headerQuote} className="headerQuote">
          <p style={{ background: "rgba(24,25,19,.8)", borderRadius: "10px", padding: "5px" }}>"We are a way for the cosmos to know itself" - Carl Sagan</p>
        </div>

        <div ref={headerLink1} className="headerLinks">
          <NavLink to="/" onClick={scrollHome}>Home</NavLink>
        </div>
        <div ref={headerLink2} className="headerLinks">
          <NavLink to="/research" onClick={scrollNavbar}>Research</NavLink>
        </div>
        <div ref={headerLink3} className="headerLinks">
          <NavLink to="/publications" onClick={scrollNavbar}>Publications</NavLink>
        </div>
        <div ref={headerLink4} className="headerLinks">
          <NavLink to="/products" onClick={scrollNavbar}>Code &amp; Products</NavLink>
        </div>
        <div ref={headerLink5} className="headerLinks">
          <NavLink to="/cv" onClick={scrollNavbar}>Vita</NavLink>
        </div>
      </div>
    </div>
  )
}
