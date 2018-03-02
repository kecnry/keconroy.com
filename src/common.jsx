import React from 'react'
import {Link} from 'react-router-dom'

var smoothScroll = require('smoothscroll'); // https://github.com/alicelieutier/smoothScroll

export class MainTab extends React.Component {
  componentDidMount = () => {
    let windowHeight = window.innerHeight
    let windowWidth = window.innerWidth
    let scrollPerc = window.document.body.scrollTop / window.innerHeight

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
      // console.log("*** filter: "+k+"="+v+" entryValue="+entryValue)
      // console.log(this.props)
      if (v===null || v==='all') {
        continue
      } else if (v===entryValue) {
        continue
      } else if (entryValue.indexOf(v) >= 0) {
        continue
      } else {
        return false
      }
    }
    return true
  }
}
