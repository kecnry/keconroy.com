import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export const blue1 = 'rgb(76,95,119)'
export const blue2 = 'rgb(59,75,103)'
export const blue3 = 'rgb(33,44,64)'
export const blue3overlay = 'rgba(33,44,64,0.7)'
export const gray1 = 'rgb(216,219,226)'
export const gray2 = 'rgb(50,56,70)'
export const gray3 = 'rgb(35,35,35)'
export const gray3overlay = 'rgba(35,35,35,0.95)'
export const graybg = 'rgb(216,219,226)';

export const urlGitHub = "https://github.com/kecnry";
export const urlADS = "https://ui.adsabs.harvard.edu/#search/q=orcid%3A0000-0002-5442-8550&sort=citation_count%20desc%2C%20bibcode%20desc";
export const urlGoogleScholar = "https://scholar.google.com.au/citations?user=RT1pPfYAAAAJ";
export const urlLinkedIn = "https://www.linkedin.com/in/kyle-conroy-a2b1b337";
export const urlOrcid = "http://orcid.org/0000-0002-5442-8550";

export const getScrollPerc = () => {
  var scrollTop = window.document.body.scrollTop || document.documentElement.scrollTop;
  return scrollTop / window.innerHeight
};

// Helper function for smooth scrolling (replaces smoothscroll library)
export const smoothScrollTo = (target, duration = 1200) => {
  window.scrollTo({ top: target, behavior: 'smooth' })
}

// Helper function for scroll-to behavior on page navigation
export const scrollTo = (y) => {
  window.document.body.scrollTop = y
  window.document.documentElement.scrollTop = y
  window.pageYOffset = y
  window.scrollY = y
}

// Hook for MainTab behavior (scroll on mount)
export function useMainTabScroll(isHome = false) {
  useEffect(() => {
    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth
    const scrollPerc = getScrollPerc()

    if (isHome) {
      scrollTo(1)
      scrollTo(0)
      return
    }

    if (windowWidth < 1024 || windowHeight < 600) {
      // don't scroll on mobile
      scrollTo(0)
      return
    }

    if (scrollPerc < 1.0) {
      smoothScrollTo(windowHeight * 1.0, 1200)
    } else if (scrollPerc < 1.25) {
      smoothScrollTo(windowHeight * 1.25, 1200)
    } else {
      scrollTo(windowHeight * 1.25)
    }
  }, [isHome])
}

// Legacy class component for MainTab - kept for compatibility
export class MainTab extends React.Component {
  scrollTo = (y) => {
    window.document.body.scrollTop = y
    window.document.documentElement.scrollTop = y
    window.pageYOffset = y
    window.scrollY = y
  }
  componentDidMount = () => {
    let windowHeight = window.innerHeight
    let windowWidth = window.innerWidth
    let scrollPerc = getScrollPerc()

    if (this.isHome) {
      this.scrollTo(1)
      this.scrollTo(0)
      return
    }

    if (windowWidth < 1024 || windowHeight < 600) {
      // don't scroll on mobile
      this.scrollTo(0)
      return
    }

    if (scrollPerc < 1.0) {
      smoothScrollTo(windowHeight * 1.0, 1200)
    } else if (scrollPerc < 1.25) {
      smoothScrollTo(windowHeight * 1.25, 1200)
    } else {
      this.scrollTo(windowHeight * 1.25)
    }
  }
}


export class MainFilterTab extends MainTab {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
      }
    };
  }
  // Note: In React Router v7, match.params is passed via props from a wrapper
  getFilterFromURL = () => {
    return this.props.params || {}
  }

}


export class FilterEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  isVisible = () => {
    let filter = this.props.filter

    for (let [k,v] of Object.entries(filter)) {
      let entryValue = this.props[k]
      if (v===null || v==='all') {
        continue
      } else if (v===entryValue) {
        continue
      } else if (v===true && entryValue !== true) {
        return false
      } else if (entryValue && entryValue.indexOf && entryValue.indexOf(v) >= 0) {
        continue
      } else {
        return false
      }
    }
    return true
  }
}

// FilterTab: clicking an active tab reverts to 'all'
export function FilterTab({ value, currentValue, to, toAll, children }) {
  const isActive = value === currentValue
  const targetTo = isActive && value !== 'all' ? toAll : to
  
  return (
    <NavLink 
      to={targetTo} 
      className={({ isActive: navActive }) => 
        `filterButton${isActive ? ' active' : ''}`
      }
    >
      {children}
    </NavLink>
  )
}

export function Section({ color, dark, children }) {
  const textColor = dark ? 'rgb(230,230,230)' : 'black'
  const contentPane = dark ? 'content-pane dark' : 'content-pane light'
  
  return (
    <div className='section' style={{ backgroundColor: color, color: textColor }}>
      <div className={contentPane}>
        {children}
      </div>
    </div>
  )
}
