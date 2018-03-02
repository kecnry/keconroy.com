import React from 'react'
import {NavLink, Link, Route} from 'react-router-dom'

import {MainTab, MainFilterTab, FilterEntry, FilterButton} from './common'


export class Product extends FilterEntry {
  render() {
    if (this.isVisible()) {
      if (this.props.content && !this.props.expanded) {
        var expandedLink = <Link to={this.props.contentLink} style={{padding: '2px', textDecoration: 'none'}}><span className="fas fa-ellipsis-h"></span> read more</Link>
      } else {
        var expandedLink = null
      }

      if (this.props.sourceLink) {
        var sourceLink = <a href={this.props.sourceLink} target="_blank" style={{padding: '2px', textDecoration: 'none'}}><span className="fas fa-code"></span> source-code</a>
      } else {
        var sourceLink = null
      }

      if (this.props.liveLink) {
        var liveLink = <a href={this.props.liveLink} target="_blank" style={{padding: '2px', textDecoration: 'none'}}><span className="fas fa-link"></span> website</a>
      } else {
        var liveLink = null
      }

      if (this.props.dataLink) {
        var dataLink = <a href={this.props.dataLink} target="_blank" style={{padding: '2px', textDecoration: 'none'}}><span className="fas fa-database"></span> data</a>
      } else {
        var dataLink = null
      }

      if (this.props.expanded) {
        var content = this.props.content
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
      <div>
        <Route exact path={`${this.props.match.url}`} component={ProductsFilter}/>
        <Route exact path={`${this.props.match.url}/:project/:type`} component={ProductsFilter}/>
        <Route exact path={`${this.props.match.url}/:title`} component={ProductsEntry}/>
      </div>
    )
  }
}

// place NEWER entries on TOP of the list
export var productDicts = [
 {
   title: "spectra sorting interactive webpage",
   sourceLink: "https://github.com/kecnry/spectra_sort_webpage",
   liveLink: "https://kecnry.github.io/spectra_sort_webpage",
   description: "teaching tool for interactive sorting of stellar spectra",
   project: [],
   type: ["code"],
 },{
   title: "autofig",
   sourceLink: "https://github.com/kecnry/autofig",
   description: "Python module to handle high-level plotting and animating functionality",
   content: <p>Content about this specific code/product (autofig)</p>,
   project: [],
   type: ["code"],
 },{
   title: "nparray",
   sourceLink: "https://github.com/kecnry/nparray",
   description: "Python module to create and manipulate numpy arrays in memory (ie. arange and linspace)",
   content: <p>Content about this specific code/product (nparray)</p>,
   project: [],
   type: ["code"],
 },{
   title: "mpltracker",
   sourceLink: "https://github.com/kecnry/mpltracker",
   description: "Python module which tracks all commands sent through matplotlib and stores the figure to a file that can be reopened in interactive mode",
   content: <p>Content about this specific code/product (mpltracker)</p>,
   project: [],
   type: ["code"],
 },{
   title: "rc-submit",
   sourceLink: "https://github.com/kecnry/rc-submit",
   description: "Python module (work-in-progress) first started during Vanderbilt's AstroHacks and continued at AAS Hack Day 2015 which aims to help in the creation and management of Amazon AWS virtual clusters",
   project: [],
   type: ["code"],
 },{
   title: "PHOEBE Website",
   liveLink: "http://phoebe-project.org",
   description: "The PHOEBE website hosts documentation and tutorials for PHOEBE",
   project: ["phoebe"],
   type: ["website"],
 },{
   title: "PHOEBE 2",
   sourceLink: "https://github.com/phoebe-project/phoebe2",
   liveLink: "http://phoebe-project.org",
   description: "PHOEBE 2.0 is a complete rewrite of the popular eclipsing binary modeling suite (PHOEBE 1.0), now including support for much higher-precision, new physics, new observable types, and a Python module interface.",
   project: ["phoebe"],
   type: ["code"],
 },{
   title: "Kepler EBs ETV Data",
   dataLink: "http://vizier.cfa.harvard.edu/viz-bin/VizieR?-source=J/PASP/126/914",
   description: "Vizier release of the timing of every eclipse for every short-period binary in the Kepler data-set",
   project: ["keplerebs", "etvs"],
   type: ["data"],
 },{
   title: "Kepler EBs Website",
   liveLink: "http://keplerebs.villanova.edu",
   description: "The Kepler EBs website hosts a searchable catalog of all EBs in the Kepler field and all computed parameters and plots. Also includes a member section which allows members of the working group to make changes to entries and leave both public and private comments.",
   project: ["keplerebs"],
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
                   project={dict.project}
                   type={dict.type}
                   filter={filter}
                   expanded={expanded}
        />)
}
