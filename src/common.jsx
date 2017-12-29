import React from 'react'
import {Link} from 'react-router-dom'

var smoothScroll = require('smoothscroll'); // https://github.com/alicelieutier/smoothScroll

export class MainTab extends React.Component {
  componentDidMount = () => {
    let windowHeight = window.innerHeight
    let scrollPerc = window.document.body.scrollTop / window.innerHeight
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

export class FilterButton extends React.Component {
  toggle = () => {
    let filter = this.props.parent.state.filter
    // if (filter[this.props.category] == this.props.name) {
      // filter[this.props.category] = null
    // } else {
    filter[this.props.category] = this.props.name
    // }
    this.props.parent.setState({filter: filter})
  }
  render () {
    if (this.props.name==null) {
      var name = 'all'
    } else {
      var name = this.props.name
    }
    return (
      <button onClick={this.toggle}>{name}</button>
    )
  }
}
