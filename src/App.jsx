import React, { useRef } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import HttpsRedirect from './protocal-redirect'

import { Header } from './header'
import { Footer } from './footer'
import { Home } from './home'
import { Research } from './research'
import { Publications } from './publications'
import { Products } from './products'
import { NotFound } from './errors'
import { CV } from './cv'

function App() {
  const contentRef = useRef(null)

  return (
    <HttpsRedirect>
      <Router>
        <div id='main'>

          <Header contentRef={contentRef} />

          <div ref={contentRef} id='content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/projects/*' element={<Research />} />
              <Route path='/research' element={<Navigate to="/projects" replace />} />
              <Route path='/research/:project' element={<ResearchRedirect />} />
              <Route path='/publications/*' element={<Publications />} />
              <Route path='/products/*' element={<Products />} />
              <Route path='/cv' element={<CV />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </HttpsRedirect>
  )
}

function ResearchRedirect() {
  const params = window.location.pathname.replace('/research', '/projects')
  return <Navigate to={params} replace />
}

export default App
