import React from 'react'
import {NavLink, Link, Route} from 'react-router-dom'

import {MainTab, MainFilterTab, FilterEntry, FilterButton, Section} from './common'


export class Product extends FilterEntry {
  render() {
    if (this.isVisible()) {
      if (this.props.content && !this.props.expanded) {
        var expandedLink = <Link to={this.props.contentLink} style={{padding: '2px', textDecoration: 'none'}}><span className="fas fa-ellipsis-h"></span> read more</Link>
      } else {
        var expandedLink = null
      }

      if (this.props.sourceLink) {
        var sourceLink = <a href={this.props.sourceLink} target="_blank" rel="noopener noreferrer"  style={{padding: '2px', textDecoration: 'none'}}><span className="fas fa-code"></span> source-code</a>
      } else {
        var sourceLink = null
      }

      if (this.props.liveLink) {
        var liveLink = <a href={this.props.liveLink} target="_blank" rel="noopener noreferrer"  style={{padding: '2px', textDecoration: 'none'}}><span className="fas fa-link"></span> website</a>
      } else {
        var liveLink = null
      }

      if (this.props.dataLink) {
        var dataLink = <a href={this.props.dataLink} target="_blank" rel="noopener noreferrer"  style={{padding: '2px', textDecoration: 'none'}}><span className="fas fa-database"></span> data</a>
      } else {
        var dataLink = null
      }

      if (this.props.expanded) {
        var content = <div style={{paddingTop: '50px'}}>{this.props.content}</div>
      } else {
        var content = null
      }

      return (
        <div style={{paddingBottom: '15px'}}>
          <p><b>{this.props.title}</b></p>
          <p>{this.props.description}</p>
          <p>{expandedLink} {sourceLink} {liveLink} {dataLink}</p>
          {content}
        </div>
      )
    } else {
      return null
    }
  }
}



class ProductsFilter extends MainFilterTab {
  render() {
    let projects = ['all', 'phoebe', 'triples', 'etvs', 'keplerebs', 'other']
    let types = ['all', 'code', 'website', 'data']

    var project = this.props.match.params.project
    var type = this.props.match.params.type

    if (!project) {
      project = 'all'
    }

    if (!type) {
      type = 'all'
    }

    return (
      <div style={{textAlign: 'center'}}>
        <h2>Products</h2>

        <div className="filterRow" style={{paddingBottom: '15px'}}>
          Project: {projects.map((p) => (<NavLink to={`/products/${p}/${type}`} className='filterButton'>{p}</NavLink>))}
        </div>
        <div className="filterRow" style={{paddingBottom: '50px'}}>
          Type: {types.map((t) => (<NavLink to={`/products/${project}/${t}`} className='filterButton'>{t}</NavLink>))}
        </div>

        {productDicts.map((p, i) => (makeProduct(p, false, this.getFilterFromURL(), '/products')))}

      </div>
    )
  }
}

class ProductsEntry extends MainTab {
  render() {
    return (
      <div>
        {productDicts.map((p, i) => (makeProduct(p, true, {title: this.props.match.params.title}, '/products')))}
      </div>
    )
  }
}


export class Products extends React.Component {
  render() {
    return (
      <Section>
        <Route exact path={`${this.props.match.url}`} component={ProductsFilter}/>
        <Route exact path={`${this.props.match.url}/:project/:type`} component={ProductsFilter}/>
        <Route exact path={`${this.props.match.url}/:title`} component={ProductsEntry}/>
      </Section>
    )
  }
}

// place NEWER entries on TOP of the list
export var productDicts = [
 {
   title: "keconroy.com",
   sourceLink: "https://github.com/kecnry/keconroy.com",
   description: "personal website (this website), written in ReactJS",
   selected: false,
   project: [],
   projectSelected: [],
   type: ["website"]
 }, {
   title: "spectra sorting interactive webpage",
   sourceLink: "https://github.com/kecnry/spectra_sort_webpage",
   liveLink: "https://kecnry.github.io/spectra_sort_webpage",
   description: "teaching tool for interactive sorting of stellar spectra",
   selected: false,
   project: [],
   projectSelected: [],
   type: ["code"],
 },{
   title: "autofig",
   sourceLink: "https://github.com/kecnry/autofig",
   description: "Python module to handle high-level plotting and animating functionality",
   content:
    <div className='row'>
      <div className='one-third column'>
        <img src={`${process.env.PUBLIC_URL}/images/autofig.gif`} style={{maxWidth: "100%"}}/>
      </div>
      <div className='two-thirds column'>
        <p>
          <a href="https://github.com/kecnry/autofig" target='_blank' rel="noopener noreferrer">autofig</a> is a python module that allows for creating advanced <a href="http://matplotlib.org" target='_blank' rel="noopener noreferrer">matplotlib</a> figures through a high-level interface.  The general goal is to get common boiler-plate code hidden behind the scences in an intuitive and self-consistent syntax while still allowing access the the underlying matplotlib objects for full customization.  Autofig aims to provide the following:
          <ul style={{textAlign: 'left'}}>
            <li>a unified calling structure to matplotlib's plot, scatter, errorbar, LineCollection, and PolyCollection in both 2D and 3D projections. So if you decide you want to add errorbars or colorscaling to an existing plot call, you don't need to change the entire calling structure anymore.</li>
            <li>basic "3D" support within 2D figures (by providing the z-coordinate, the z-orders will automatically be set).</li>
            <li>a high-level wrapper to animate an existing plot over some independent-variable (i.e. time), with effects including highlight and uncover.</li>
            <li>intelligent options for axes limits within animations.</li>
            <li>intelligent defaults for subplot creation based on conflicts in units/labels.</li>
          </ul>

          See the <a href="https://github.com/kecnry/autofig#installation" target="_blank" rel="noopener noreferrer">README</a> for installation instructions, tutorials, and full gallery of examples.

        </p>
      </div>
    </div>,
   selected: true,
   project: [],
   projectSelected: [],
   type: ["code"],
 },{
   title: "nparray",
   sourceLink: "https://github.com/kecnry/nparray",
   description: "Python module to create and manipulate numpy arrays in memory (ie. arange and linspace)",
   content:
     <div className='row'>
       <div className='column'>
         <p>
           <a href="https://github.com/kecnry/nparray" target='_blank' rel="noopener noreferrer">nparray</a> is a python module providing a high-level interface to handling and converting between various <a href="http://numpy.org" target="_blank" rel="noopener noreferrer">numpy</a> arrays, including: arange, linspace, and geomspace (among others).

           See the <a href="https://github.com/kecnry/nparray#nparray" target="_blank" rel="noopener noreferrer">README</a> for installation instructions and tutorials.

         </p>
       </div>
     </div>,
   selected: true,
   project: [],
   projectSelected: [],
   type: ["code"],
 },{
   title: "mpltracker",
   sourceLink: "https://github.com/kecnry/mpltracker",
   description: "Python module which tracks all commands sent through matplotlib and stores the figure to a file that can be reopened in interactive mode",
   // content: <p>More information on mpltracker coming soon...</p>,
   selected: false,
   project: [],
   projectSelected: [],
   type: ["code"],
 },{
   title: "rc-submit",
   sourceLink: "https://github.com/kecnry/rc-submit",
   description: "Python module (work-in-progress) first started during Vanderbilt's AstroHacks and continued at AAS Hack Day 2015 which aims to help in the creation and management of Amazon AWS virtual clusters",
   selected: false,
   project: [],
   projectSelected: [],
   type: ["code"],
 },{
   title: "PHOEBE Website",
   liveLink: "http://phoebe-project.org",
   description: "The PHOEBE website hosts documentation and tutorials for PHOEBE",
   selected: false,
   project: ["phoebe"],
   projectSelected: ['phoebe'],
   type: ["website"],
 },{
   title: "PHOEBE 2",
   sourceLink: "https://github.com/phoebe-project/phoebe2",
   liveLink: "http://phoebe-project.org",
   description: "PHOEBE 2.0 is a complete rewrite of the popular eclipsing binary modeling suite (PHOEBE 1.0), now including support for much higher-precision, new physics, new observable types, and a Python module interface.",
   selected: true,
   project: ["phoebe"],
   projectSelected: ['phoebe'],
   type: ["code"],
 },{
   title: "Kepler EBs ETV Data",
   dataLink: "http://vizier.cfa.harvard.edu/viz-bin/VizieR?-source=J/PASP/126/914",
   description: "Vizier release of the timing of every eclipse for every short-period binary in the Kepler data-set",
   selected: false,
   project: ["keplerebs", "etvs"],
   projectSelected: ['keplerebs', 'etvs'],
   type: ["data"],
 },{
   title: "Kepler EBs Website",
   liveLink: "http://keplerebs.villanova.edu",
   description: "The Kepler EBs website hosts a searchable catalog of all EBs in the Kepler field and all computed parameters and plots. Also includes a member section which allows members of the working group to make changes to entries and leave both public and private comments.",
   selected: true,
   project: ["keplerebs"],
   projectSelected: ['keplerEBs'],
   type: ["website"],
 }
]

export function makeProduct(dict, expanded, filter, url) {
  // function to convert dictionary from above (productDicts) into a Product
  // object by taking the filter and base URL

  // TODO: slugify dict.title for contentLink
  return (<Product title={dict.title}
                   sourceLink={dict.sourceLink}
                   liveLink={dict.liveLink}
                   dataLink={dict.dataLink}
                   contentLink={`${url}/${dict.title}`}
                   description={dict.description}
                   content={dict.content}
                   selected={dict.selected}
                   project={dict.project}
                   projectSelected={dict.projectSelected}
                   type={dict.type}
                   filter={filter}
                   expanded={expanded}
        />)
}
