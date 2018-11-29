import React from 'react'
import {Route, Link} from 'react-router-dom'

import {MainTab, Section} from './common'
import {blue1, blue2, blue3, blue3overlay, gray1, gray2, gray3, gray3overlay} from './common'
import {publicationDicts, makePublication} from './publications'
import {productDicts, makeProduct} from './products'

export class ResearchOverview extends React.Component {
  render() {
    var project = this.props.project
    var title = researchDicts[project]['title']
    var overview = researchDicts[project]['overview']
    return (
      <Section color={this.props.color} dark={this.props.dark}>
        <h1>{title}</h1>

        {overview}

        <div className="row" style={{paddingTop: "20px"}}>
          <div className="one-third column">
            <Link to={`/research/${project}`} className='button'>Read More</Link>
          </div>
          <div className="one-third column">
            <Link to={`/publications/${project}/all/all`} className='button'>Publications</Link>
          </div>
          <div className="one-third column">
            <Link to={`/products/${project}/all`} className='button'>Products</Link>
          </div>
        </div>
      </Section>
    )
  }
}

export class ResearchTopic extends MainTab {
  render() {
    var project = this.props.match.params.project
    var title = researchDicts[project]['title']
    var content = researchDicts[project]['content']
    return (
      <div>
        <Section>
          <h1>{title}</h1>

          {content}

        </Section>

        <Section color={blue2} dark={true}>
          <h2>{title} Publications</h2>
          <div style={{paddingBottom: '40px'}}>
            <Link to={`/publications/${project}/all/all`}>see all {title} publications</Link>
          </div>
          {publicationDicts.map((p, i) => (makePublication(p, false, {projectSelected: project}, '/publications')))}
        </Section>

        <Section>
          <h2>{this.props.title} Products</h2>
          <div style={{paddingBottom: '40px'}}>
            <Link to={`/products/${project}/all`}>see all {title} products</Link>
          </div>
          {productDicts.map((p, i) => (makeProduct(p, false, {projectSelected: project}, '/products')))}
        </Section>
      </div>
    )
  }
}

export class ResearchOverviews extends MainTab {
  render() {
    return (
      <div>
          <ResearchOverview project='phoebe'/>
          <ResearchOverview project='triples' color={blue2} dark={true}/>
          <ResearchOverview project='etvs'/>
          <ResearchOverview project='keplerebs' color={blue2} dark={true}/>
      </div>
    )
  }
}

export class Research extends React.Component {
  render() {
    return (
      <div>
        <Route exact path={`${this.props.match.url}`} component={ResearchOverviews}/>
        <Route exact path={`${this.props.match.url}/:project`} component={ResearchTopic}/>
      </div>
    )
  }
}

export var researchDicts = {
  'phoebe': {
    'title': 'PHOEBE',
    'overview': <div className="row">
                  <div className="one-third column">
                    <img className="u-max-full-width" src={`${process.env.PUBLIC_URL}/images/phoebe_light.png`} style={{height: "250px"}}/>
                  </div>

                  <div className="two-thirds column">
                    <p>
                      <a href="http://phoebe-project.org" target="_blank" rel="noopener noreferrer" >PHOEBE</a> is an eclipsing binary modeling suite that reproduces and fits light curves and radial velocity curves of eclipsing systems.
                    </p>
                    <p>
                      As a part of the PHOEBE <a href="http://phoebe-project.org/help/devel/" target="_blank" rel="noopener noreferrer" >development team</a>, we have developed and released the completely reimagined PHOEBE 2: bringing the ability to model data in the new era of ultra-precise photometry.  We are also in the process of developing several future releases which will include the support for new physics (including support for systems with more than two stars) and new observables.
                    </p>
                  </div>
                </div>,
    'content': <div className="container">
                <div className="row">
                  <div className="one-third column">
                    <img className="u-max-full-width" src={`${process.env.PUBLIC_URL}/images/phoebe_light.png`} style={{height: "250px"}}/>
                  </div>

                  <div className="two-thirds column">
                    <p>
                      <a href="http://phoebe-project.org" target="_blank" rel="noopener noreferrer" >PHOEBE</a> is an eclipsing binary modeling suite that reproduces and fits light curves and radial velocity curves of eclipsing systems.
                    </p>
                    <p>
                      As a part of the PHOEBE <a href="http://phoebe-project.org/help/devel/" target="_blank" rel="noopener noreferrer" >development team</a>, we are developing a completely reimagined version of PHOEBE.  We released <a href="http://phoebe-project.org/releases/2.0" target="_blank" rel="noopener noreferrer">version 2.0</a> in early 2017 and have recently released <a href="http://phoebe-project.org/releases/2.1" target="_blank" rel="noopener noreferrer">version 2.1</a> which adds support for spin-orbit misalignment and spectral line profiles.  We are currently working on more future versions which will introduce new features (reddening/extinction, heat redistribution, triples, contact binaries, fitting, pulsations, etc).  PHOEBE 2 provides a new framework that will allow for implementing new physics on top of a very robust model, bringing the ability to model data in the new era of ultra-precise observations.
                    </p>
                  </div>
                </div>

                <div className="row">
                    <p>
                      PHOEBE is written mostly in C with a Python frontend and is available via our <a href="http://github.com/phoebe-project/phoebe2" target="_blank" rel="noopener noreferrer" >github repository</a>.  We have designed the Python frontend to provide as much flexibility to the user as possible, including automatic unit conversions and allowing for multiple parameterizations of via our <i>constraints</i> framework.
                    </p>
                    <p>
                      Our goal in building PHOEBE is to build the most robust and accurate model possible, even when at the cost of significant computational time.  However, we have designed the frontend in such a way that PHOEBE's backend is swappable with other existing codes.  The plan here is to allow data to be fitted roughly at first with codes that make more assumptions, and are therefore more efficient.  After the solution begins to converge, it is then trivial to switch to the full, robust model provided by the PHOEBE 2 backend.
                    </p>
                    <p>
                      In addition to writing the entire frontend, my focus in PHOEBE has been to design and develop a new <i>hybrid method</i> for handling stellar systems with more than two components.  Particularly in the case of <a id="ember577" href="/research/triples" className="ember-view">triple systems</a> with a tight inner-binary, it is important to include both dynamical effects (ie. not simply nested keplerian orbits) as well as stellar distortion (ie. not just spherical or rotating stars).  Our method accounts for both of these effects and allows for precisely modeling both the stellar and orbital parameters of these complex systems.
                    </p>
                </div>
              </div>
  },
  'triples': {
    'title': 'Stellar Triples',
    'overview': <div className="row">
                  <div className="two-thirds column">
                    <p>
                      Eclipsing triple stellar systems allow us to determine the parameters of the individual stellar components with even more precision than eclipsing binaries.
                    </p>
                    <p>
                      Triple star systems, whether inferred through eclipse timing variations or through actual eclipse events, help constrain the multiplicity occurence rates (ie how many stars are single vs double vs triple vs higher-order).  Triple stars also provide the ability to study dynamical interactions which could give us hints towards the planetary interactions that could have happened in the early stages of our Solar System's development.
                    </p>
                  </div>

                  <div className="one-third column">
                    <img className="u-max-full-width" src={`${process.env.PUBLIC_URL}/images/triples_splash.jpg`} style={{maxWidth: "100%"}}/>
                  </div>
                </div>,
    'content': <div className="container">
                <div className="row">
                  <div className="two-thirds column">
                    <p>
                      Eclipsing triple stellar systems allow us to determine the parameters of the individual stellar components with even more precision than eclipsing binaries.
                    </p>
                    <p>
                      Triple star systems, whether inferred through <Link to="/research/etvs">eclipse timing variations</Link> or through actual eclipse events, help constrain the multiplicity occurence rates (ie. how many stars are single vs double vs triple vs higher-order).  Triple stars also provide the ability to study dynamical interactions which could give us hints towards the planetary interactions that could have happened in the early stages of our Solar System's development.
                    </p>
                  </div>

                  <div className="one-third column">
                    <img className="u-max-full-width" src={`${process.env.PUBLIC_URL}/images/triples_splash.jpg`} style={{maxWidth: "100%"}}/>
                  </div>
                </div>

                <div className="row">
                  <p>
                    As soon as we have completed the work on implementing stellar triples within <Link to="/research/phoebe">PHOEBE</Link>, we plan to apply our code to fit several very promising triple systems discovered within the <Link to="/research/keplerebs">Kepler EBs</Link> dataset.  Several of these systems consist of a third star around a tight inner-binary and by modeling the orientation of the orbits within these systems we hope to test the predictions of Kozai Cycles and Tidal Friction as a mechanism for tight binary formation.
                  </p>
                </div>

              </div>
  },
  'etvs': {
    'title': 'Eclipse Timing Variations',
    'overview': <div className="row">
                <div className="two-thirds column">
                  <p>
                    By precisely measuring the timings of individual eclipses, we can infer behaviour in the eclipsing binary - including the presence of additional bodies in the system, either planets or stars.
                  </p>
                  <p>
                  	By detecting potential components that aren't eclipsing or transiting, we can probe additional parameter space that other detections cannot and begin to constrain theories for formation mechanisms for stellar and planetary systems.
                  </p>
                </div>

                <div className="one-third column">
                  <img className="u-max-full-width" src={`${process.env.PUBLIC_URL}/images/etv_splash.png`} style={{maxWidth: "100%"}}/>
                </div>
              </div>,
    'content': <div className="container">
                <div className="row">
                  <div className="two-thirds column">
                    <p>
                      By precisely measuring the timings of individual eclipses, we can infer behaviour in the eclipsing binary - including the presence of additional bodies in the system, either planets or stars.
                    </p>
                    <p>
                      By detecting potential components that aren't eclipsing or transiting, we can probe additional parameter space that other detections cannot and begin to constrain theories for formation mechanisms for stellar and planetary systems.
                    </p>
                  </div>

                  <div className="one-third column">
                    <img className="u-max-full-width" src={`${process.env.PUBLIC_URL}/images/etv_splash.png`} style={{maxWidth: "100%"}}/>
                  </div>
                </div>

                <div className="row">
                  <p>To detect candidate triple systems, we have measured the timings of all eclipses in the Kepler Eclipsing Binary Catalog.  For the short-period binary sample, this has resulted in approximately 1300 candidate triple systems.</p>
                </div>

                <div className="row">
                  <p>The resulting ETVs are then a combination of dynamical (physical change to the orbital elements of the inner-binary caused by interactions with additional bodies in the system) and light time effects (apparent change in the timing of an eclipse due to the finite speed of light).  In addition to the previously known contributions, we have discovered and formulated a new effect caused by the plane-of-sky motion of the inner-binary caused by the orbit around the common center of mass of the entire system.</p>
                </div>

              </div>

  },
  'keplerebs': {
    'title': 'Kepler EBs',
    'overview': <div className="row">
                  <div className="one-third column">
                    <img src={`${process.env.PUBLIC_URL}/images/kepler.png`} style={{maxWidth: "100%", maxHeight: "200px"}}/>
                  </div>

                  <div className="two-thirds column">
                    <p>
          			       The <a href="http://kepler.nasa.gov/" target="_blank" rel="noopener noreferrer">Kepler mission</a> provided a perfect opportunity to get unprecendented precision data for a large number of EBs. We identified, classified, and obtained solution estimates for over <a href="http://keplerebs.villanova.edu" target="_blank" rel="noopener noreferrer">2500 EBs</a> in the Kepler data. As the mission continues and the baseline gets longer, we not only continue to identify more long-period binaries but we also continue to individually study and model the most interesting EBs in the catalog.
                    </p>
                  </div>
                </div>,
    'content': <div className="container">
                <div className="row">
                  <div className="one-third column">
                    <img src={`${process.env.PUBLIC_URL}/images/kepler.png`} style={{maxWidth: "100%", maxHeight: "200px"}}/>
                  </div>

                  <div className="two-thirds column">
                    <p>

                       The <a href="http://kepler.nasa.gov/" target="_blank" rel="noopener noreferrer">Kepler mission</a> provided a perfect opportunity to get unprecendented precision data for a large number of EBs. We identified, classified, and obtained solution estimates for over <a href="http://keplerebs.villanova.edu" target="_blank" rel="noopener noreferrer">2500 EBs</a> in the Kepler data. We also obtained follow-up spectroscopic information and individually studied a number of particularly interesting EBs in the catalog.

                    </p>
                  </div>
                </div>

                <div className="row">
                  <p>In addition to detecting EB signals in the extracted light curves, we also identified the true sources of many EBs whose signals were leaking into Kepler light curves.  The actual EBs in these cases do not correspond to a target directly observed by Kepler, but rather a nearby source that contaminates the Kepler source.  We can infer the true source of these EBs and extract a light curve from the surrounding pixels, when available. </p>
                </div>

                <div className="row">
                  <p>As Kepler transitioned to the K2 mission, we also cataloged <a href="http://keplerebs.villanova.edu/k2" target="_blank" rel="noopener noreferrer">K2 EBs</a>.  Although a much short time baseline exists for each target, we benefit from the multiple stellar populations that each K2 quarter probes throughout the ecliptic plane.</p>
                </div>

              </div>
  }
}
