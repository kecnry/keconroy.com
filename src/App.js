import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {Header} from './header'
import {Footer} from './footer'
import {Home} from './home'
import {Research, ResearchTopic} from './research'
import {Publications} from './publications'
import {Products} from './products'
import {CV} from './cv'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id='main'>

          <Header app={this}/>

          <div ref={(ref) => this.contentDiv = ref} id='content'>
            <Route exact path="/" component={Home}/>
            <Route path="/research" component={Research}/>
            <Route path="/publications" component={Publications}/>
            <Route path="/products" component={Products}/>
            <Route path="/cv" component={CV}/>
          </div>

          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
