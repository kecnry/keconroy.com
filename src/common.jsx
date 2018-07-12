import React from 'react'
import {Link} from 'react-router-dom'

var smoothScroll = require('smoothscroll'); // https://github.com/alicelieutier/smoothScroll


export const blue1 = 'rgb(76,95,119)'
export const blue2 = 'rgb(59,75,103)'
export const blue3 = 'rgb(33,44,64)'
export const blue3overlay = 'rgba(33,44,64,0.7)'
export const gray1 = 'rgb(216,219,226)'
export const gray2 = 'rgb(50,56,70)'
export const gray3 = 'rgb(35,35,35)'
export const gray3overlay = 'rgba(35,35,35,0.95)'
export const graybg = 'rgb(216,219,226)';

export const getScrollPerc = () => {
  var scrollTop = window.document.body.scrollTop || document.documentElement.scrollTop;
  return scrollTop / window.innerHeight
};


export class MainTab extends React.Component {
  scrollTo = (y) => {
    window.document.body.scrollTop = y
    window.document.documentElement.scrollTop = y
    window.pagYOffset = y
    window.scrollY = y
  }
  componentDidMount = () => {
    // console.log("MainTab componentDidMount")
    let windowHeight = window.innerHeight
    let windowWidth = window.innerWidth
    let scrollPerc = getScrollPerc()

    // console.log("MainTab.componentDidMount "+scrollPerc)

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
      smoothScroll(windowHeight * 1.0, 1200)
    } else if (scrollPerc < 1.25){
      smoothScroll(windowHeight * 1.25, 1200)
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
  getFilterFromURL = () => {
    return this.props.match.params
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
      // console.log("*** filter: "+k+"="+v+" entryValue="+entryValue+" entryTitle="+this.props['title'])
      // console.log(this.props)
      if (v===null || v==='all') {
        continue
      } else if (v===entryValue) {
        continue
      } else if (v===true && entryValue != true) {
        return false
      } else if (entryValue.indexOf(v) >= 0) {
        continue
      } else {
        return false
      }
    }
    return true
  }
}

export class Section extends React.Component {
  render() {
    if (this.props.dark) {
      var color = 'rgb(230,230,230)'
      var contentPane = 'content-pane dark'
    } else {
      var color = 'black'
      var contentPane = 'content-pane light'
    }
    return (
      <div className='section' style={{backgroundColor: this.props.color, color: color}}>
        <div className={contentPane}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
