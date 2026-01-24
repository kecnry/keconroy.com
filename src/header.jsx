import React, { useEffect, useRef, useCallback, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { blue1, blue2, blue3, blue3overlay, gray3overlay, getScrollPerc, urlGitHub, urlADS, urlGoogleScholar, urlLinkedIn, urlOrcid } from './common'

// Hook to detect reduced motion preference
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (event) => setPrefersReducedMotion(event.matches)
    
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return prefersReducedMotion
}

export function LinkIcons() {
  return (
    <div>
      <a href={urlGitHub} target="_blank" rel="noopener noreferrer" title="GitHub" className="icon" aria-label="GitHub Profile"><span className="fab fa-2x fa-github" aria-hidden="true"></span></a>
      <a href={urlADS} target="_blank" rel="noopener noreferrer" title="ADS" className="icon" aria-label="ADS Publications"><span className="ai ai-2x ai-ads-square" aria-hidden="true"></span></a>
      <a href={urlGoogleScholar} target="_blank" rel="noopener noreferrer" title="Google Scholar" className="icon" aria-label="Google Scholar Profile"><span className="ai ai-2x ai-google-scholar-square" aria-hidden="true"></span></a>
      <a href={urlLinkedIn} target="_blank" rel="noopener noreferrer" title="Linked In" className="icon" aria-label="LinkedIn Profile"><span className="fab fa-2x fa-linkedin" aria-hidden="true"></span></a>
      <a href={urlOrcid} target="_blank" rel="noopener noreferrer" title="Orcid ID" className="icon" aria-label="ORCID Profile"><span className="ai ai-2x ai-orcid" aria-hidden="true"></span></a>
    </div>
  )
}

export function Header({ contentRef }) {
  const prefersReducedMotion = usePrefersReducedMotion()
  
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

  // Breakpoint constants
  const BREAKPOINT_DESKTOP = 1024
  const BREAKPOINT_TABLET = 768
  const MIN_HEIGHT = 600

  const scrollHome = useCallback(() => {
    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth
    const scrollPerc = getScrollPerc()

    if (windowWidth < BREAKPOINT_DESKTOP || windowHeight < MIN_HEIGHT) {
      return
    }

    if (scrollPerc > 1.25) {
      window.document.body.scrollTop = windowHeight * 1.25
    }

    window.scrollTo({ top: windowHeight * 1.0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }, [prefersReducedMotion])

  const scrollNavbar = useCallback(() => {
    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth
    const scrollPerc = getScrollPerc()

    if (windowWidth < BREAKPOINT_DESKTOP || windowHeight < MIN_HEIGHT) {
      return
    }

    if (scrollPerc < 1.0) {
      window.scrollTo({ top: windowHeight * 1.0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
    } else if (scrollPerc < 1.25) {
      window.scrollTo({ top: windowHeight * 1.25, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
    }
  }, [prefersReducedMotion])

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

    // Rectangle width is 27% of window, calculate center offset
    const rectWidth = 0.27 * windowWidth
    const rectHalfWidth = rectWidth / 2

    // Rectangle height: SVG is 5% of viewport, rect is 2800% of SVG = 1.4 * windowHeight
    const rectHeightPx = 0.05 * windowHeight * 28
    // Offset from bottom of rectangle where links should appear
    const linkBottomOffset = 0.06 * windowHeight

    const heightImagepx = 0.37 * windowHeight
    const heightImage = `${heightImagepx}px`
    const heightLogopx = 0.25 * windowHeight
    const heightLogo = `${heightLogopx}px`

    let yContent, clipBackground, yRectangles, alphaRectangles
    let yLogo, xLogo, alphaLogo, yName, yImage, clipImage, alphaImage
    let yTagline, yIcons, yQuote, xQuote, paddingXText

    // Use static header for mobile/tablet or when reduced motion is preferred on smaller screens
    const useStaticHeader = windowWidth < BREAKPOINT_DESKTOP || windowHeight < MIN_HEIGHT

    if (useStaticHeader) {
      // hide scrolling elements, show static header instead
      if (headerInteractive.current) headerInteractive.current.style.display = 'none'
      if (headerStatic.current) headerStatic.current.style.display = 'flex'
      yContent = `${0}px`
    } else {
      if (headerStatic.current) headerStatic.current.style.display = 'none'
      if (headerInteractive.current) headerInteractive.current.style.display = 'block'

      // Calculate responsive text padding based on screen width
      // On narrower screens (1000-1300px), need more padding to avoid logo overlap
      const basePaddingPerc = windowWidth < 1300 ? 30 : 25

      if (scrollPerc < 1.0) {
        clipBackground = `rect(0px, 5000px, ${windowHeight * (0.8 - 0.2 * scrollPerc)}px, 0px)`
        yRectangles = windowHeight * (-0.45 - 0.35 * scrollPerc)
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
        paddingXText = `${0 + basePaddingPerc * (scrollPerc)}%`
        yContent = `${windowHeight * 1.7}px`
      } else if (scrollPerc < 1.25) {
        clipBackground = `rect(0px, 5000px, ${windowHeight * (0.6 - 2.4 * (scrollPerc - 1))}px, 0px)`
        yRectangles = windowHeight * (-0.8 - 2.2 * (scrollPerc - 1))
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
        paddingXText = `${basePaddingPerc}%`
        yContent = `${windowHeight * (1.7 - 1.2 * (scrollPerc - 1))}px`
      } else {
        clipBackground = `rect(0px, 5000px, ${windowHeight * (1 - scrollPerc)}px, 0px)`
        yRectangles = windowHeight * -1.35
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
        paddingXText = `${basePaddingPerc}%`
        yContent = `${windowHeight * 1.4}px`
      }

      const rotateDeg = Math.max(25 - scrollPerc * 25, 0)
      const scaleXRectangles = 1 - 0.25 * scrollPercSticky
      
      // Link offset within the rectangle's coordinate system (after rotation)
      // Position at center-bottom of the rectangle
      // Account for the scaleX applied to rectangles - the visual center shifts
      const linkYOffset = rectHeightPx - linkBottomOffset
      const scaledRectHalfWidth = rectHalfWidth * scaleXRectangles
      const linkXOffset = scaledRectHalfWidth

      // Rectangle X positions (same as used in transforms)
      const rectX1 = windowWidth * (0.10 - 0.10 * scrollPercSticky)
      const rectX2 = windowWidth * (0.35 - 0.15 * scrollPercSticky)
      const rectX3 = windowWidth * (0.60 - 0.20 * scrollPercSticky)
      const rectX4 = windowWidth * (0.85 - 0.25 * scrollPercSticky)
      const rectX5 = windowWidth * (1.10 - 0.30 * scrollPercSticky)

      const transform1 = `translateY(${yRectangles}px) translateX(${rectX1}px) rotate(${rotateDeg}deg) scaleX(${scaleXRectangles})`
      const transform2 = `translateY(${yRectangles}px) translateX(${rectX2}px) rotate(${rotateDeg}deg) scaleX(${scaleXRectangles})`
      const transform3 = `translateY(${yRectangles}px) translateX(${rectX3}px) rotate(${rotateDeg}deg) scaleX(${scaleXRectangles})`
      const transform4 = `translateY(${yRectangles}px) translateX(${rectX4}px) rotate(${rotateDeg}deg) scaleX(${scaleXRectangles})`
      const transform5 = `translateY(${yRectangles}px) translateX(${rectX5}px) rotate(${rotateDeg}deg) scaleX(${scaleXRectangles})`

      // Link transforms: same base transform as rectangles (without scaleX), then offset to center-bottom
      const transformLink1 = `translateY(${yRectangles}px) translateX(${rectX1}px) rotate(${rotateDeg}deg) translateX(${linkXOffset}px) translateY(${linkYOffset}px) translateX(-50%)`
      const transformLink2 = `translateY(${yRectangles}px) translateX(${rectX2}px) rotate(${rotateDeg}deg) translateX(${linkXOffset}px) translateY(${linkYOffset}px) translateX(-50%)`
      const transformLink3 = `translateY(${yRectangles}px) translateX(${rectX3}px) rotate(${rotateDeg}deg) translateX(${linkXOffset}px) translateY(${linkYOffset}px) translateX(-50%)`
      const transformLink4 = `translateY(${yRectangles}px) translateX(${rectX4}px) rotate(${rotateDeg}deg) translateX(${linkXOffset}px) translateY(${linkYOffset}px) translateX(-50%)`
      const transformLink5 = `translateY(${yRectangles}px) translateX(${rectX5}px) rotate(${rotateDeg}deg) translateX(${linkXOffset}px) translateY(${linkYOffset}px) translateX(-50%)`

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

      if (headerLink1.current) {
        headerLink1.current.style.left = '0'
        headerLink1.current.style.transform = transformLink1
      }
      if (headerLink2.current) {
        headerLink2.current.style.left = '0'
        headerLink2.current.style.transform = transformLink2
      }
      if (headerLink3.current) {
        headerLink3.current.style.left = '0'
        headerLink3.current.style.transform = transformLink3
      }
      if (headerLink4.current) {
        headerLink4.current.style.left = '0'
        headerLink4.current.style.transform = transformLink4
      }
      if (headerLink5.current) {
        headerLink5.current.style.left = '0'
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
      <div ref={navigationOverlay} className="overlay" style={{ backgroundColor: gray3overlay }}>
        <button className="closebtn" onClick={closeNav} aria-label="Close navigation menu">&times;</button>
        <nav className="overlay-content" role="navigation">
          <NavLink to="/" onClick={closeNav}>Home</NavLink>
          <NavLink to="/projects" onClick={closeNav}>Projects</NavLink>
          <NavLink to="/publications" onClick={closeNav}>Publications</NavLink>
          <NavLink to="/products" onClick={closeNav}>Code &amp; Products</NavLink>
          <NavLink to="/cv" onClick={closeNav}>Vita</NavLink>
        </nav>
      </div>

      <div ref={headerStatic} className="headerStatic" style={{ backgroundImage: `url(/images/smc.jpg)`, display: 'none' }}>
        <div className="headerStatic-overlay"></div>

        <button 
          className="headerStaticNavbar" 
          onClick={openNav}
          aria-label="Open navigation menu"
          aria-expanded="false"
        >
          <span className="fas fa-bars fa-2x" style={{ color: 'white' }} aria-hidden="true"></span>
        </button>

        <div className="headerText">
          <h1>Kyle E Conroy<br />PhD</h1>
        </div>

        <div className="headerText">
          <p>Senior Software Engineer<br />Space Telescope Science Institute (STScI)</p>
        </div>

        <div className="headerIcons">
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
          <img ref={headerLogo} src="/images/kec_logo_w_gh.png" alt="logo" style={{ borderRadius: "12px"}} />
        </div>
        <div ref={headerName} className="headerText" style={{ right: 0, left: 0, marginRight: 'auto', marginLeft: 'auto' }}>
          <h1>Kyle E Conroy, PhD</h1>
        </div>
        <div ref={headerImageDiv} className="headerImage" style={{ right: 0, left: 0, marginRight: 'auto', marginLeft: 'auto' }}>
          <img ref={headerImage} src="/images/self.jpg" style={{ borderRadius: "6px" }} alt="self" />
        </div>
        <div ref={headerTagline} className="headerText" style={{ right: 0, left: 0, marginRight: 'auto', marginLeft: 'auto' }}>
          <p>Senior Software Engineer | Space Telescope Science Institute</p>
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
          <NavLink to="/projects" onClick={scrollNavbar}>Projects</NavLink>
        </div>
        <div ref={headerLink3} className="headerLinks">
          <NavLink to="/products" onClick={scrollNavbar}>Code &amp; Products</NavLink>
        </div>
        <div ref={headerLink4} className="headerLinks">
          <NavLink to="/publications" onClick={scrollNavbar}>Publications</NavLink>
        </div>
        <div ref={headerLink5} className="headerLinks">
          <NavLink to="/cv" onClick={scrollNavbar}>Vita</NavLink>
        </div>
      </div>
    </div>
  )
}
