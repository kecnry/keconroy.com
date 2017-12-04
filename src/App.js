import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {Header} from './header'
import {Research, ResearchTopic} from './research'
import {Publications} from './publications'
import {Products} from './products'
import {CV} from './cv'
import {Contact} from './contact'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)



class App extends React.Component {
  render() {


    return (
      <Router>
        <div>

          <Header/>

          <div id='content'>
            <Route exact path="/" component={Home}/>
            <Route path="/research" component={Research}/>
            <Route path="/publications" component={Publications}/>
            <Route path="/products" component={Products}/>
            <Route path="/cv" component={CV}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
