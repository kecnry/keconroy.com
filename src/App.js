import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Publications = () => (
  <div>
    <h2>Publications</h2>
  </div>
)

const ResearchTopic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Research = ({ match }) => (
  <div>
    <h2>Research</h2>
    <ul>
      <li>
        <Link to={`${match.url}/phoebe`}>
          PHOEBE
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/triples`}>
          Triple Systems
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/etvs`}>
          ETVs
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/keplerebs`}>
          Kepler EBs
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={ResearchTopic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a research topic.</h3>
    )}/>
  </div>
)

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/publications">Publications</Link></li>
        <li><Link to="/research">Research</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/publications" component={Publications}/>
      <Route path="/research" component={Research}/>
    </div>
  </Router>
)
export default App
