import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

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

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/publications">Publications</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cv">Vita</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/research" component={Research}/>
      <Route path="/publications" component={Publications}/>
      <Route path="/products" component={Products}/>
      <Route path="/cv" component={CV}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </Router>
)
export default App
