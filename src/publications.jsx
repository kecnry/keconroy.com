import React from 'react'
import {Link, Route} from 'react-router-dom'

import {MainTab, MainFilterTab, FilterEntry, FilterButton} from './common'

class Publication extends FilterEntry {
  render() {
    if (this.isVisible()) {
      if (this.props.content && this.props.contentLink) {
        var expandedLink = <Link to={this.props.contentLink}>read more</Link>
      } else {
        var expandedLink = null
      }

      if (this.props.adsLink) {
        var adsLink = <a href={this.props.adsLink}>ADS</a>
      } else {
        var adsLink = null
      }

      return (
        <div>
          <p><b>{this.props.title}</b> {adsLink}</p>
          <p>{this.props.authors} {this.props.year}, <b>{this.props.journal}</b>, {this.props.volume}, {this.props.page}</p>
        </div>
      )
    } else {
      return null
    }
  }
}

class PublicationsFilter extends MainFilterTab {
  render() {
    let projects = ['all', 'phoebe', 'triples', 'etvs', 'keplerebs', 'other']
    let types = ['all', 'journal', 'oral', 'poster']
    let nauthors = ['all', '1st', 'nth']

    var project = this.props.match.params.project
    var type = this.props.match.params.type
    var nauthor = this.props.match.params.nauthor

    if (!project) {
      project = 'all'
    }

    if (!type) {
      type = 'all'
    }

    if (!nauthor) {
      nauthor = 'all'
    }


    return (
      <div>
        <h2>Publications</h2>

        Project: {projects.map((p) => (<Link to={`/publications/${p}/${type}/${nauthor}`}>{p}</Link>))}

        Type: {types.map((t) => (<Link to={`/publications/${project}/${t}/${nauthor}`}>{t}</Link>))}

        Author: {nauthors.map((a) => (<Link to={`/publications/${project}/${type}/${a}`}>{a}</Link>))}

        {publicationDicts.map((p, i) => (makePublication(p, false, this.getFilterFromURL(), '/publications')))}

      </div>
    )
  }
}

class PublicationsEntry extends MainTab {
  render() {
    return (
      <div>
        {publicationDicts.map((p, i) => (makePublication(p, true, {name: this.props.name}, '/publications')))}
      </div>
    )
  }
}

export class Publications extends React.Component {
  render() {
    return (
      <div>
        <Route exact path={`${this.props.match.url}`} component={PublicationsFilter}/>
        <Route exact path={`${this.props.match.url}/:project/:type/:nauthor`} component={PublicationsFilter}/>
        {/* <Route exact path={`${this.props.match.url}/:title`} component={PublicationsEntry}/> */}
      </div>
    )
  }
}

// place NEWER entries on TOP of the list
export var publicationDicts = [
{
  title: 'A Bright Short Period M-M Eclipsing Binary from the KELT Survey: Magnetic Activity and the Mass-Radius Relationship for M-dwarfs',
  authors: 'Lubin, Jack B., Rodriguez, Joseph E., et al.',
  year: 2017,
  journal: 'ApJ',
  volume: 844,
  page: 134,
  selected: false,
  project: ['other'],
  projectSelected: [],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'http://adsabs.harvard.edu/abs/2017ApJ...844..134L'
}, {
  title: 'Heat Redistribution and Misaligned Orbit Models in PHOEBE',
  authors: 'Horvat, M., Prsa, A., Conroy, K. E.',
  year: 2017,
  journal: 'AAS',
  volume: 229,
  page: 344.23,
  selected: false,
  project: ['phoebe'],
  projectSelected: [],
  type: 'poster',
  nauthor: 'nth',
  adsLink: 'http://adsabs.harvard.edu/abs/2017AAS...22934423H'
}, {
  title: 'Robust Modeling of Stellar Triples in PHOEBE',
  authors: 'Conroy, K. E., Prsa, A., Horvat, M., Stassun, K. G.',
  year: 2017,
  journal: 'AAS',
  volume: 229,
  page: 344.22,
  selected: false,
  project: ['phoebe', 'triples'],
  projectSelected: [],
  type: 'poster',
  nauthor: '1st',
  adsLink: 'http://adsabs.harvard.edu/abs/2017AAS...22934422C'
}, {
  title: 'Physics Of Eclipsing Binaries. II. Toward the Increased Model Fidelity',
  authors: 'Prsa, A., Conroy, Kyle E., Horvat, Martin, et al.',
  year: 2016,
  journal: 'ApJS',
  volume: 227,
  page: 29,
  selected: true,
  project: ['phoebe'],
  projectSelected: ['phoebe'],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'http://adsabs.harvard.edu/abs/2016ApJS..227...29P',
  pdf: '2016Prsa+.pdf'
}, {
  title: 'Discovery and Characterization of Eclipsing Binary Stars and Transiting Planets in Young Benchmark Clusters: The Pleiades and Hyades',
  authors: 'Stassun, Keivan, David, Trevor J., Conroy, Kyle E., Hillenbrand, Lynne, et al.',
  year: 2016,
  journal: 'AAS',
  volume: 228,
  page: 102.08,
  selected: false,
  project: ['other'],
  projectSelected: [],
  type: 'oral',
  nauthor: 'nth',
  adsLink: 'http://adsabs.harvard.edu/abs/2016AAS...22810208S'
}, {
  title: 'New Pleiades Eclipsing Binaries and a Hyades Transiting System Identified by K2',
  authors: 'David, T. J., Conroy, K. E., Hillenbrand, L. A., et al.',
  year: 2016,
  journal: 'AJ',
  volume: 151,
  page: 112,
  selected: false,
  project: ['other'],
  projectSelected: [],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'http://adsabs.harvard.edu/abs/2016AJ....151..112D'
}, {
  title: 'Kepler Eclipsing Binary Stars. VIII. Identification of False Positive Eclipsing Binaries and Re-extraction of New Light Curves',
  authors: 'Abdul-Masih, M., Prsa, A., Conroy, K., et al.',
  year: 2016,
  journal: 'AJ',
  volume: 151,
  page: 101,
  selected: false,
  project: ['keplerebs'],
  projectSelected: [],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'http://adsabs.harvard.edu/abs/2016AJ....151..101A',
  pdf: '2016Abdul-Masih+.pdf',
}, {
  title: 'An Extreme Analogue of &epsilon; Aurigae: An M-giant Eclipsed Every 69 Years by a Large Opaque Disk Surrounding a Small Hot Source',
  authors: 'Rodriguez, J. E., Stassun, K. G., Lund, M. B., et al.',
  year: 2016,
  journal: 'AJ',
  volume: 151,
  page: 123,
  selected: false,
  project: ['other'],
  projectSelected: [],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'http://adsabs.harvard.edu/abs/2016AJ....151..123R'
}, {
  title: 'Kepler Eclipsing Binary Stars. VII. The Catalog of Eclipsing Binaries Found in the Entire Kepler Data-Set',
  authors: 'Kirk, B., Conroy, K., Prsa, A., et al.',
  year: 2015,
  journal: 'AJ',
  volume: 151,
  page: 68,
  selected: true,
  project: ['keplerebs'],
  projectSelected: ['keplerebs'],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'http://adsabs.harvard.edu/abs/2016AJ....151...68K',
  pdf: '2016Kirk+.pdf'
}, {
  title: 'HII 2407: An Eclipsing Binary Revealed By K2 Observations of the Pleiades',
  authors: 'David, T. J., Stauffer, J., Hillenbrand, L. A., et al.',
  year: 2015,
  journal: 'ApJ',
  volume: 814,
  page: 62,
  selected: false,
  project: ['other'],
  projectSelected: [],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'http://adsabs.harvard.edu/abs/2015ApJ...814...62D'
}, {
  title: 'Kepler Eclipsing Binary Stars. VI. Identification of eclipsing binaries in the K2 Campaign 0 data set',
  authors: 'LaCourse, D. M., Jek, K. J., Jacobs, T. L., et al.',
  year: 2015,
  journal: 'MNRAS',
  volume: 452,
  page: 3561,
  selected: false,
  project: ['keplerebs'],
  projectSelected: ['keplerebs'],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'http://adsabs.harvard.edu/abs/2015MNRAS.452.3561L'
}, {
  title: 'A Detailed Study of the Variable Stars in Five Galactic Globular Clusters: IC4499, NGC4833, NGC6171 (M107), NGC6402 (M14), and NGC6584',
  authors: 'Murphy, B. W., Darragh, A., Hettinger, P., et al.',
  year: 2015,
  journal: 'IAU General Assembly',
  volume: 22,
  page: 2255998,
  selected: false,
  project: ['other'],
  projectSelected: [],
  type: 'oral',
  nauthor: 'nth',
  adsLink: 'http://adsabs.harvard.edu/abs/2015IAUGA..2255998M'
}, {
  title: 'A Triple Eclipsing System as a Test Case for Close Binary Formation through Kozai Cycles',
  authors: 'Conroy, K. E., Prsa, A., Stassun, K. G.',
  year: 2015,
  journal: 'ASPC',
  volume: 496,
  page: '99C',
  selected: false,
  project: ['triples'],
  projectSelected: ['triples'],
  type: 'oral',
  nauthor: '1st',
  adsLink: 'http://adsabs.harvard.edu/abs/2015ASPC..496...99C'
}, {
  title: 'Call for Follow-Up Observations of the Dynamically Changing Triple Star KIC 2835289',
  authors: 'Conroy, K.; Prsa, A., Stassun, K.; Orosz, J.',
  year: 2015,
  journal: 'IBVS',
  volume: 6138,
  page: 1,
  selected: false,
  project: ['triples'],
  projectSelected: ['triples'],
  type: 'journal',
  nauthor: '1st',
  adsLink: 'http://adsabs.harvard.edu/abs/2015IBVS.6138....1C'
}, {
  title: 'VizieR Online Data Catalog: Kepler eclipsing binary stars. V. (Conroy+, 2014)',
  authors: 'Conroy, K. E., Prsa, A., Stassun, K. G., et al.',
  year: 2015,
  journal: 'yCat',
  volume: null,
  page: null,
  selected: false,
  project: ['etvs'],
  projectSelected: [],
  type: 'data',
  nauthor: '1st',
  adsLink: 'http://adsabs.harvard.edu/abs/2015yCat..61260914C'
}, {
  title: 'A triple eclipsing system as a test case for close binary formation through Kozai cycles',
  authors: 'Conroy, K. E., Prsa, A., Stassun, K. G., et al.',
  year: 2015,
  journal: 'AAS',
  volume: 225,
  page: 415.06,
  selected: false,
  project: ['triples'],
  projectSelected: [],
  type: 'poster',
  nauthor: '1st',
  adsLink: 'http://adsabs.harvard.edu/abs/2015AAS...22541506C'
}, {
  title: 'Kepler Eclipsing Binary Stars. V. Identification of 31 Candidate Eclipsing Binaries in the K2 Engineering Dataset',
  authors: 'Conroy, K. E., Prsa, A., Stassun, K. G., et al.',
  year: 2014,
  journal: 'PASP',
  volume: 126,
  page: 914,
  selected: true,
  project: ['keplerebs'],
  projectSelected: ['keplerebs'],
  type: 'journal',
  nauthor: '1st',
  adsLink: 'http://adsabs.harvard.edu/abs/2014PASP..126..914C',
  pdf: '2014bConroy+.pdf'
}, {
  title: 'Kepler Eclipsing Binary Stars. IV. Precise Eclipse Times for Close Binaries and Identification of Candidate Three-body Systems',
  authors: 'Conroy, K. E., Prsa, A., Stassun, K. G., et al.',
  year: 2014,
  journal: 'AJ',
  volume: 147,
  page: 45,
  selected: true,
  project: ['keplerebs', 'etvs'],
  projectSelected: ['keplerebs', 'etvs'],
  type: 'journal',
  nauthor: '1st',
  adsLink: 'http://adsabs.harvard.edu/abs/2014AJ....147...45C',
  pdf: '2014aConroy+.pdf'
}, {
  title: 'A Triple Eclipsing System as a Test Case for Close Binary Formation Through Kozai Cycles',
  authors: 'Conroy, Kyle E.; Prsa, A.; Stassun, K.',
  year: 2014,
  journal: 'AAS',
  volume: 223,
  page: 155.20,
  selected: false,
  project: ['triples'],
  projectSelected: [],
  type: 'oral',
  nauthor: '1st',
  adsLink: 'http://adsabs.harvard.edu/abs/2014AAS...22315520C'
}, {
  title: 'KIC 4544587: an eccentric, short-period binary system with δ Sct pulsations and tidally excited modes',
  authors: 'Hambleton, K. M., Kurtz, D. W., Prsa, A., et al.',
  year: 2013,
  journal: 'MNRAS',
  volume: 434,
  page: 925,
  selected: false,
  project: ['other', 'etvs'],
  projectSelected: [],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'http://adsabs.harvard.edu/abs/2013MNRAS.434..925H'
}, {
  title: 'Phoebe 2.0 - Triple and multiple systems',
  authors: 'Conroy, K.; Degroote, P.; Hambleton, K.; Bloemen, S.; Pablo, H.; Giammarco, J.; Prša, A.',
  year: 2013,
  journal: 'EAS',
  volume: 64,
  page: '295C',
  selected: false,
  project: ['phoebe'],
  projectSelected: ['phoebe'],
  type: 'oral',
  nauthor: '1st',
  adsLink: 'http://adsabs.harvard.edu/abs/2013EAS....64..295C'
}, {
  title: 'Physics of Eclipsing Binaries: Heartbeat Stars and Tidally Induced Pulsations',
  authors: 'Hambleton, K., Degroote, P., Conroy, K., et al.',
  year: 2013,
  journal: 'EAS',
  volume: 64,
  page: 285,
  selected: false,
  project: ['phoebe'],
  projectSelected: [],
  type: 'oral',
  nauthor: 'nth',
  adsLink: 'http://adsabs.harvard.edu/abs/2013EAS....64..285H'
}, {
  title: 'PHOEBE 2.0 - Where no model has gone before',
  authors: 'Degroote, P., Conroy, K., Hambleton, K., et al.',
  year: 2013,
  journal: 'EAS',
  volume: 64,
  page: 277,
  selected: false,
  project: ['phoebe'],
  projectSelected: [],
  type: 'oral',
  nauthor: 'nth',
  adsLink: 'http://adsabs.harvard.edu/abs/2013EAS....64..277D'
}, {
  title: 'Physics of Eclipsing Binaries: Modelling in the new era of ultra-high precision photometry',
  authors: 'Bloemen, S., Degroote, P., Conroy, K., et al.',
  year: 2013,
  journal: 'EAS',
  volume: 64,
  page: 269,
  selected: false,
  project: ['phoebe'],
  projectSelected: [],
  type: 'oral',
  nauthor: 'nth',
  adsLink: 'http://adsabs.harvard.edu/abs/2013EAS....64..269B'
}, {
  title: 'Physics of Eclipsing Binaries: Motivation for the New-Age Modeling Suite',
  authors: 'Prsa, A., Degroote, P., Conroy, K., et al.',
  year: 2013,
  journal: 'EAS',
  volume: 64,
  page: 259,
  selected: false,
  project: ['phoebe'],
  projectSelected: [],
  type: 'oral',
  nauthor: 'nth',
  adsLink: 'http://adsabs.harvard.edu/abs/2013EAS....64..259P'
}, {
  title: 'Color-Magnitude Diagram for M14',
  authors: 'Reinhart, E., McCombs, T., Murphy, B. W., et al.',
  year: 2013,
  journal: 'AAS',
  volume: 221,
  page: 250.21,
  selected: false,
  project: ['other'],
  projectSelected: [],
  type: 'poster',
  nauthor: 'nth',
  adsLink: 'http://adsabs.harvard.edu/abs/2013AAS...22125021R',
}, {
  title: 'The Color-Magnitude Diagram of the Globular Cluster M14',
  authors: 'Reinhart, E. D., McCombs, T., Darragh, A. N., et al.',
  year: 2012,
  journal: 'JSARA',
  volume: 7,
  page: 56,
  selected: false,
  project: ['other'],
  projectSelected: [],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'http://adsabs.harvard.edu/abs/2012JSARA...7...56R'
}, {
  title: 'Eclipse Timing Variations of Short-Period Binaries in the Kepler Field',
  authors: 'Conroy, Kyle E.; Prsa, A.; Orosz, J.; Welsh, W.; Kepler Team',
  year: 2012,
  journal: 'AAS',
  volume: 220,
  page: 406.03,
  selected: false,
  project: ['keplerebs', 'etvs'],
  projectSelected: [],
  type: 'oral',
  nauthor: '1st',
  adsLink: 'http://adsabs.harvard.edu/abs/2012AAS...22040603C'
}, {
  title: 'Searching for Variable Stars in Southern Globular Clusters',
  authors: 'Murphy, B. W., Darragh, A. N., Conroy, K. E., et al.',
  year: 2012,
  journal: 'AAS',
  volume: 220,
  page: 333.01,
  selected: false,
  project: ['other'],
  projectSelected: [],
  type: 'poster',
  nauthor: 'nth',
  adsLink: 'http://adsabs.harvard.edu/abs/2012AAS...22033301M'
}, {
  title: 'A Showcase of Unique Binary Systems Discovered by the Kepler Satellite',
  authors: 'Kirk, B., Prsa, A., Conroy, K., et al.',
  year: 2012,
  journal: 'AAS',
  volume: 220,
  page: 329.10,
  selected: false,
  project: ['keplerebs'],
  projectSelected: [],
  type: 'poster',
  nauthor: 'nth',
  adsLink: 'http://adsabs.harvard.edu/abs/2012AAS...22032910K'
}, {
  title: 'Variable Stars in the Globular Cluster M14',
  authors: 'Conroy, Kyle E.; Darrogh, Andrew N.; Liu, Zheyu J.; Murphy, Brian W.',
  year: 2012,
  journal: 'JSARA',
  volume: 5,
  page: '34C',
  selected: false,
  project: [],
  projectSelected: [],
  type: 'journal',
  nauthor: '1st',
  adsLink: 'http://adsabs.harvard.edu/abs/2012JSARA...5...34C'
}, {
  title: 'Kepler Eclipsing Binary Stars. II. 2165 Eclipsing Binaries in the Second Data Release',
  authors: 'Slawson, R. W., Prsa, A., Welsh, W. F., et al.',
  year: 2011,
  journal: 'AJ',
  volume: 142,
  page: 160,
  selected: false,
  project: ['keplerebs'],
  projectSelected: ['keplerebs'],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'http://adsabs.harvard.edu/abs/2011AJ....142..160S',
  pdf: '2011Slawson+.pdf'
}, {
  title: 'Kepler Eclipsing Binary Stars. I. Catalog and Principal Characterization of 1879 Eclipsing Binaries in the First Data Release',
  authors: 'Prsa, A., Batalha, N., Slawson, R. W., et al.',
  year: 2011,
  journal: 'AJ',
  volume: 141,
  page: 83,
  selected: false,
  project: ['keplerebs'],
  projectSelected: ['keplerebs'],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'http://adsabs.harvard.edu/abs/2011AJ....141...83P',
  pdf: '2011Prsa+.pdf'
}, {
  title: 'Variable Stars in the Globular Cluster M14',
  authors: 'Conroy, Kyle E.; Darragh, A. N.; Liu, Z. J.; Murphy, B. W.',
  year: 2011,
  journal: 'AAS',
  volume: 43,
  page: 152.18,
  selected: false,
  project: ['other'],
  projectSelected: [],
  type: 'poster',
  nauthor: '1st',
  adsLink: 'http://adsabs.harvard.edu/abs/2011AAS...21715218C'
}, {
  title: 'Surface Activity Analysis of the Eclipsing Bianry UV Leonis Based On New Spectroscopic Data',
  authors: 'Conroy, Kyle; Engle, S.; Ballouz, R.; Prsa, A.',
  year: 2010,
  journal: 'AAS',
  volume: 42,
  page: 282,
  selected: false,
  project: ['other'],
  projectSelected: [],
  type: 'poster',
  nauthor: '1st',
  adsLink: 'http://adsabs.harvard.edu/abs/2010AAS...21541936C'
}
]

export function makePublication(dict, expanded, filter, url) {
  // function to convert dictionary from above (publicationDicts) into a Publication
  // object by taking the filter and base URL
  return (<Publication title={dict.title}
                       adsLink={dict.adsLink}
                       authors={dict.authors}
                       year={dict.year}
                       journal={dict.journal}
                       volume={dict.volume}
                       page={dict.page}
                       project={dict.project}
                       projectSelected={dict.projectSelected}
                       type={dict.type}
                       nauthor={dict.nauthor}
                       filter={filter}
                       expanded={expanded}
        />)
}
