import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import 'babel-polyfill' // https://medium.com/@andrewzey/google-seo-with-create-react-app-fixing-the-hidden-gotcha-c164063106d

import HttpsRedirect from './protocal-redirect'

import {Header} from './header'
import {Footer} from './footer'
import {Home} from './home'
import {Research} from './research'
import {Publications} from './publications'
import {Products} from './products'
import {NotFound} from './errors'
import {CV} from './cv'

class App extends React.Component {
  render() {
    return (
      <HttpsRedirect>
        <Router>
          <div id='main'>

            <Header app={this}/>

            <div ref={(ref) => this.contentDiv = ref} id='content'>
              <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
                <Route path={process.env.PUBLIC_URL + '/research'} component={Research}/>
                <Route path={process.env.PUBLIC_URL + '/publications'} component={Publications}/>
                <Route path={process.env.PUBLIC_URL + '/products'} component={Products}/>
                <Route path={process.env.PUBLIC_URL + '/cv'} component={CV}/>
                <Route path="*" component={NotFound} />
              </Switch>
            </div>

            <Footer />
          </div>
        </Router>
      </HttpsRedirect>
    )
  }
}

export default App
