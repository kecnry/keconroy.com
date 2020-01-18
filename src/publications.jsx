import React from 'react'
import {NavLink, Link, Route} from 'react-router-dom'

import {MainTab, MainFilterTab, FilterEntry, Section, urlADS, urlGoogleScholar, urlOrcid} from './common'


class Publication extends FilterEntry {
  render() {
    if (this.isVisible()) {
      // if (this.props.content && this.props.contentLink) {
      //   var expandedLink = <Link to={this.props.contentLink}>read more</Link>
      // } else {
      //   var expandedLink = null
      // }

      if (this.props.adsLink) {
        var adsLink = <a href={this.props.adsLink} target="_blank" rel="noopener noreferrer"  style={{padding: '2px'}}><span className="ai ai-ads"></span> ADS</a>
      } else {
        var adsLink = null
      }

      if (this.props.pdf) {
        var pdfLink = <a href={`${process.env.PUBLIC_URL}/pdf/`+this.props.pdf} style={{padding: '2px'}}><span className="far fa-file-pdf"></span> PDF</a>
      } else {
        var pdfLink = null
      }

      if (this.props.publisherLink) {
        var publisherLink = <a href={this.props.publisherLink} target='_blank' style={{padding: '2px'}}><span className="ai ai-doi"></span> publisher</a>
      } else {
        var publisherLink = null
      }

      if (this.props.publisherLink && this.props.publisherLink.indexOf("doi.org") !== -1) {
        var doi = this.props.publisherLink.slice(this.props.publisherLink.indexOf("doi.org")+8)
        var badges = <div className="row">
                        <div style={{float: "left", padding: "15px", marginLeft: "calc(50% - 90px)"}} className="col-sm-8" data-badge-popover="left" data-badge-type="donut" data-doi={doi} data-condensed="true" data-hide-no-mentions="false" class="altmetric-embed"></div>

                        <div style={{float: "left", padding: "15px", mixBlendMode: "multiply"}} className="col-sm-8 __dimensions_badge_embed__" data-doi={doi} data-legend="hover-right" data-style="small_circle"></div>
                      </div>
      } else {
        var badges = null
      }

      return (
        <div style={{paddingBottom: '15px'}}>
          <p><b>{this.props.title}</b></p>
          <p>{this.props.authors} {this.props.year}, <b>{this.props.journal}</b>, {this.props.volume}, {this.props.page}</p>
          {badges}
          <p>{adsLink} {publisherLink} {pdfLink}</p>
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

    var project = this.props.match.params.project || 'all'
    var type = this.props.match.params.type || 'all'
    var nauthor = this.props.match.params.nauthor || 'all'
    // var selected = this.props.match.params.selected || false

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
      <div style={{textAlign: 'center'}}>
        <h2>Publications</h2>

        <div className="urlRow" style={{paddingBottom: '25px'}}>
          <a href={urlADS} target="_blank" rel="noopener noreferrer" title="ADS">View Publications on ADS</a>
          <br/>
          <a href={urlGoogleScholar} target="_blank" rel="noopener noreferrer"  title="Google Scholar">Google Scholar Profile</a>
          <br/>
          <a href={urlOrcid} target="_blank" rel="noopener noreferrer"  title="Orcid ID">ORCID Profile</a>
        </div>

        <div className="filterRowTitle">Project:</div>
        <div className="filterRow">{projects.map((p) => (<NavLink to={`/publications/${p}/${type}/${nauthor}`} className='filterButton'>{p}</NavLink>))}</div>

        <div className="filterRowTitle">Type:</div>
        <div className="filterRow">{types.map((t) => (<NavLink to={`/publications/${project}/${t}/${nauthor}`} className='filterButton'>{t}</NavLink>))}</div>

        <div className="filterRowTitle">Author:</div>
        <div className="filterRow">{nauthors.map((a) => (<NavLink to={`/publications/${project}/${type}/${a}`} className='filterButton'>{a}</NavLink>))}</div>

        <div className="filterContent">
          {publicationDicts.map((p, i) => (makePublication(p, false, this.getFilterFromURL(), '/publications')))}
        </div>


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
      <Section>
        <Route exact path={`${this.props.match.url}`} component={PublicationsFilter}/>
        <Route exact path={`${this.props.match.url}/:project/:type/:nauthor`} component={PublicationsFilter}/>
        {/* <Route exact path={`${this.props.match.url}/:title`} component={PublicationsEntry}/> */}
      </Section>
    )
  }
}

// place NEWER entries on TOP of the list
export var publicationDicts = [
{
  title: 'New Physics and Features in the 2.2 Release of the PHOEBE Eclipsing Binary Modeling Code',
  authors: 'Conroy, K.; Jones, D.; Horvat, M.; Pablo, H.; Kochoska, A.; Giammarco, J.; Prsa, A.',
  year: 2020,
  journal: 'AAS',
  volume: 235,
  page: 114.05,
  selected: false,
  project: ['phoebe'],
  projectSelected: [],
  type: 'poster',
  nauthor: '1st',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2020AAS...23511405C',
  publisherLink: 'http://aas235-aas.ipostersessions.com/Default.aspx?s=C1-23-B4-73-F7-E7-0F-2C-7E-07-06-C0-D3-08-2E-DF'
},
{
  title: 'Fitting in the wild: exploration of new approaches and methods for estimating binary system parameters from light curve data',
  authors: 'Kochoska, A.; Conroy, K.; Hambleton, K.; Prsa, A.',
  year: 2020,
  journal: 'AAS',
  volume: 235,
  page: 114.03,
  selected: false,
  project: ['phoebe'],
  projectSelected: [],
  type: 'poster',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2020AAS...23511403K'
},
{
  title: 'Physics of Eclipsing Binaries. IV. The impact of interstellar extinction on the light curves of eclipsing binaries',
  authors: 'Jones, David; Conroy, Kyle E.; Horvat, Martin; Giammarco, Joseph; Kochoska, Angela; Pablo, Herbert; Brown, Alex J.; Sowicka, Paulina; Prsa, Andrej',
  year: 2020,
  journal: 'ApJS',
  volume: 'submitted',
  page: null,
  selected: false,
  project: ['phoebe'],
  projectSelected: ['phoebe'],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2019arXiv191209474J'
},
{
  title: 'The SDSS-HET Survey of Kepler Eclipsing Binaries. Description of the Survey and First Results',
  authors: 'Mahadevan, Suvrath; Bender, Chad F.; Hambleton, Kelly; Fleming, Scott W.; Deshpande, Rohit; Conroy, Kyle; Matijevič, Gal; Hebb, Leslie; Roy, Arpita; Ak, Hasan; Leban, Blaž; Prša, Andrej',
  year: 2019,
  journal: 'ApJ',
  volume: 884,
  page: 126,
  selected: false,
  project: ['other'],
  projectSelected: [],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2019ApJ...884..126M',
  publisherLink: 'https://iopscience.iop.org/article/10.3847/1538-4357/ab3793'
},
{
  title: 'Considerations and Design Principles for the 2.1 Release of the PHOEBE Eclipsing Binary Modeling Code',
  authors: 'Conroy, Kyle; Horvat, Martin; Pablo, Herbert; Hambleton, Kelly; Kochoska, Angela; Giammarco, Joseph; Prša, Andrej',
  year: 2019,
  journal: 'AAS',
  volume: 233,
  page: 348.27,
  selected: true,
  project: ['phoebe'],
  projectSelected: [],
  type: 'poster',
  nauthor: '1st',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2019AAS...23334827C',
  publisherLink: null,
  pdf: 'aas_2019_jan.pdf'
},
{
  title: 'The COBAIN code. Basic principles and geometrical considerations',
  authors: 'Kochoska, Angela; Zwitter, Tomaz; Horvat, Martin; Conroy, Kyle; Prša, Andrej',
  year: 2019,
  journal: 'AAS',
  volume: 233,
  page: 348.19,
  selected: false,
  project: [],
  projectSelected: [],
  type: 'poster',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2019AAS...23334819K',
  publisherLink: null
},
{
  title: 'Bolometric Treatment of Irradiation Effects: General Discussion and Application to Binary Stars',
  authors: 'Horvat, Martin; Conroy, Kyle E.; Jones, Dave; Prša, Andrej',
  year: 2019,
  journal: 'ApJS',
  volume: 240,
  page: 2,
  selected: false,
  project: ['phoebe'],
  projectSelected: [],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2019ApJS..240...36H',
  publisherLink: 'https://doi.org/10.3847/1538-4365/aaffd7',
  pdf: '2019Horvat+.pdf'
},
{
  title: 'Physics of Eclipsing Binaries. III. Spin-Orbit Misalignment',
  authors: 'Horvat, Martin; Conroy, Kyle E.; Pablo, Herbert; et al.',
  year: 2018,
  journal: 'ApJS',
  volume: 237,
  page: 26,
  selected: true,
  project: ['phoebe'],
  projectSelected: ['phoebe'],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2018ApJS..237...26H',
  publisherLink: 'https://doi.org/10.3847/1538-4365/aacd0f',
  pdf: '2018Horvat+.pdf'
},
{
  title: 'COBAIN: generalized 3D radiative transfer code for contact binary atmospheres',
  authors: 'Kochoska, Angela; Prša, Andrej; Zwitter, Tomaž; Horvat, Martin; Conroy, Kyle E.',
  year: 2018,
  journal: 'arXiv',
  volume: null,
  page: null,
  selected: false,
  project: [],
  projectSelected: [],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2018arXiv180408781K',
  publisherLink: null
},
{
  title: 'Astrophysics of Stellar Multiple Systems',
  authors: 'Conroy, Kyle E.',
  year: 2018,
  journal: 'PhD Dissertation',
  volume: '04092018',
  page: '102518',
  selected: false,
  project: ['triples', 'etvs'],
  projectSelected: ['triples'],
  type: 'dissertation',
  nauthor: '1st',
  publisherLink: 'https://etd.library.vanderbilt.edu/available/etd-04092018-102518/',
  pdf: '2018Conroy_dissertation.pdf'
},
{
  title: 'The Effects of Barycentric and Asymmetric Transverse Velocities on Eclipse and Transit Times',
  authors: 'Conroy, Kyle E.; Prsa, A.; Horvat, M.; Stassun, K.G.',
  year: 2018,
  journal: 'ApJ',
  volume: 854,
  page: 163,
  selected: true,
  project: ['etvs', 'triples'],
  projectSelected: ['etvs'],
  type: 'journal',
  nauthor: '1st',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2018ApJ...854..163C',
  publisherLink: 'http://doi.org/10.3847/1538-4357/aaa3ea',
  pdf: '2018Conroy+.pdf'
}, {
  title: 'The Effect of Transverse Motion on Eclipse and Transit Times',
  authors: 'Conroy, Kyle; Prša, Andrej; Horvat, Martin; Stassun, Keivan G.',
  year: 2018,
  journal: 'AAS',
  volume: 231,
  page: 244.25,
  selected: true,
  project: ['etvs', 'triples'],
  projectSelected: [],
  type: 'poster',
  nauthor: '1st',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2018AAS...23124425C',
  pdf: 'aas_2018_jan.pdf'
}, {
  title: 'Interfacing modeling suite Physics Of Eclipsing Binaries 2.0 with a Virtual Reality Platform',
  authors: 'Harriett, Edward; Conroy, Kyle; Prša, Andrej; Klassner, Frank',
  year: 2018,
  journal: 'AAS',
  volume: 231,
  page: 244.07,
  selected: false,
  project: ['other'],
  projectSelected: [],
  type: 'poster',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2018AAS...23124407H'
}, {
  title: 'Digitizing Villanova University\'s Eclipsing Binary Card Catalogue',
  authors: 'Guzman, Giannina; Dalton, Briana; Conroy, Kyle; Prsa, Andrej',
  year: 2018,
  journal: 'AAS',
  volume: 231,
  page: 151.03,
  selected: false,
  project: ['other'],
  projectSelected: [],
  type: 'poster',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2018AAS...23115103G'
}, {
  title: 'A Bright Short Period M-M Eclipsing Binary from the KELT Survey: Magnetic Activity and the Mass-Radius Relationship for M-dwarfs',
  authors: 'Lubin, Jack B.; Rodriguez, Joseph E.; et al.',
  year: 2017,
  journal: 'ApJ',
  volume: 844,
  page: 134,
  selected: false,
  project: ['other'],
  projectSelected: [],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2017ApJ...844..134L',
  publisherLink: 'http://doi.org/10.3847/1538-4357/aa7947'
}, {
  title: 'Heat Redistribution and Misaligned Orbit Models in PHOEBE',
  authors: 'Horvat, M.; Prsa, A.; Conroy, K. E.',
  year: 2017,
  journal: 'AAS',
  volume: 229,
  page: 344.23,
  selected: false,
  project: ['phoebe'],
  projectSelected: [],
  type: 'poster',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2017AAS...22934423H'
}, {
  title: 'Robust Modeling of Stellar Triples in PHOEBE',
  authors: 'Conroy, K. E.; Prsa, A.; Horvat, M.; Stassun, K. G.',
  year: 2017,
  journal: 'AAS',
  volume: 229,
  page: 344.22,
  selected: true,
  project: ['phoebe', 'triples'],
  projectSelected: [],
  type: 'poster',
  nauthor: '1st',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2017AAS...22934422C',
  pdf: 'aas_2017_jan.pdf'
}, {
  title: 'Physics Of Eclipsing Binaries. II. Toward the Increased Model Fidelity',
  authors: 'Prsa, A.; Conroy, Kyle E.; Horvat, Martin; et al.',
  year: 2016,
  journal: 'ApJS',
  volume: 227,
  page: 29,
  selected: true,
  project: ['phoebe'],
  projectSelected: ['phoebe'],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2016ApJS..227...29P',
  publisherLink: 'http://doi.org/10.3847/1538-4365/227/2/29',
  pdf: '2016Prsa+.pdf'
}, {
  title: 'Discovery and Characterization of Eclipsing Binary Stars and Transiting Planets in Young Benchmark Clusters: The Pleiades and Hyades',
  authors: 'Stassun, Keivan; David, Trevor J.; Conroy, Kyle E.; Hillenbrand, Lynne; et al.',
  year: 2016,
  journal: 'AAS',
  volume: 228,
  page: 102.08,
  selected: false,
  project: ['other'],
  projectSelected: [],
  type: 'oral',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2016AAS...22810208S'
}, {
  title: 'New Pleiades Eclipsing Binaries and a Hyades Transiting System Identified by K2',
  authors: 'David, T. J.; Conroy, K. E.; Hillenbrand, L. A.; et al.',
  year: 2016,
  journal: 'AJ',
  volume: 151,
  page: 112,
  selected: false,
  project: ['other'],
  projectSelected: [],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2016AJ....151..112D',
  publisherLink: 'http://doi.org/10.3847/0004-6256/151/5/112'
}, {
  title: 'Kepler Eclipsing Binary Stars. VIII. Identification of False Positive Eclipsing Binaries and Re-extraction of New Light Curves',
  authors: 'Abdul-Masih, M.; Prsa, A., Conroy, K.; et al.',
  year: 2016,
  journal: 'AJ',
  volume: 151,
  page: 101,
  selected: false,
  project: ['keplerebs'],
  projectSelected: [],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2016AJ....151..101A',
  publisherLink: 'http://doi.org/10.3847/0004-6256/151/4/101',
  pdf: '2016Abdul-Masih+.pdf',
}, {
  title: 'An Extreme Analogue of \u03B5 Aurigae: An M-giant Eclipsed Every 69 Years by a Large Opaque Disk Surrounding a Small Hot Source',
  authors: 'Rodriguez, J. E.; Stassun, K. G.; Lund, M. B.; et al.',
  year: 2016,
  journal: 'AJ',
  volume: 151,
  page: 123,
  selected: false,
  project: ['other'],
  projectSelected: [],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2016AJ....151..123R',
  publisherLink: 'http://doi.org/10.3847/0004-6256/151/5/123'
}, {
  title: 'Kepler Eclipsing Binary Stars. VII. The Catalog of Eclipsing Binaries Found in the Entire Kepler Data-Set',
  authors: 'Kirk, B.; Conroy, K.; Prsa, A.; et al.',
  year: 2015,
  journal: 'AJ',
  volume: 151,
  page: 68,
  selected: true,
  project: ['keplerebs'],
  projectSelected: ['keplerebs'],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2016AJ....151...68K',
  publisherLink: 'http://doi.org/10.3847/0004-6256/151/3/68',
  pdf: '2016Kirk+.pdf'
}, {
  title: 'HII 2407: An Eclipsing Binary Revealed By K2 Observations of the Pleiades',
  authors: 'David, T. J.; Stauffer, J.; Hillenbrand, L. A.; et al.',
  year: 2015,
  journal: 'ApJ',
  volume: 814,
  page: 62,
  selected: false,
  project: ['other'],
  projectSelected: [],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2015ApJ...814...62D',
  publisherLink: 'http://doi.org/10.1088/0004-637X/814/1/62'
}, {
  title: 'Kepler Eclipsing Binary Stars. VI. Identification of eclipsing binaries in the K2 Campaign 0 data set',
  authors: 'LaCourse, D. M.; Jek, K. J.; Jacobs, T. L.; et al.',
  year: 2015,
  journal: 'MNRAS',
  volume: 452,
  page: 3561,
  selected: false,
  project: ['keplerebs'],
  projectSelected: ['keplerebs'],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2015MNRAS.452.3561L',
  publisherLink: 'http://doi.org/10.1093/mnras/stv1475'
}, {
  title: 'A Detailed Study of the Variable Stars in Five Galactic Globular Clusters: IC4499, NGC4833, NGC6171 (M107), NGC6402 (M14), and NGC6584',
  authors: 'Murphy, B. W.; Darragh, A.; Hettinger, P.; et al.',
  year: 2015,
  journal: 'IAU General Assembly',
  volume: 22,
  page: 2255998,
  selected: false,
  project: ['other'],
  projectSelected: [],
  type: 'oral',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2015IAUGA..2255998M'
}, {
  title: 'A Triple Eclipsing System as a Test Case for Close Binary Formation through Kozai Cycles',
  authors: 'Conroy, K. E.; Prsa, A.; Stassun, K. G.',
  year: 2015,
  journal: 'ASPC',
  volume: 496,
  page: '99C',
  selected: true,
  project: ['triples'],
  projectSelected: ['triples'],
  type: 'oral',
  nauthor: '1st',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2015ASPC..496...99C'
}, {
  title: 'Call for Follow-Up Observations of the Dynamically Changing Triple Star KIC 2835289',
  authors: 'Conroy, K.; Prsa, A.; Stassun, K.; Orosz, J.',
  year: 2015,
  journal: 'IBVS',
  volume: 6138,
  page: 1,
  selected: false,
  project: ['triples'],
  projectSelected: ['triples'],
  type: 'journal',
  nauthor: '1st',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2015IBVS.6138....1C',
  publisherLink: 'http://www.konkoly.hu/cgi-bin/IBVS?6138',
  pdf: '2015Conroy+.pdf'
}, {
  title: 'VizieR Online Data Catalog: Kepler eclipsing binary stars. V. (Conroy+, 2014)',
  authors: 'Conroy, K. E.; Prsa, A.; Stassun, K. G.; et al.',
  year: 2015,
  journal: 'yCat',
  volume: null,
  page: null,
  selected: false,
  project: ['etvs'],
  projectSelected: [],
  type: 'data',
  nauthor: '1st',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2015yCat..61260914C'
}, {
  title: 'A triple eclipsing system as a test case for close binary formation through Kozai cycles',
  authors: 'Conroy, K. E.; Prsa, A.; Stassun, K. G.; et al.',
  year: 2015,
  journal: 'AAS',
  volume: 225,
  page: 415.06,
  selected: true,
  project: ['triples'],
  projectSelected: [],
  type: 'oral',
  nauthor: '1st',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2015AAS...22541506C'
}, {
  title: 'Kepler Eclipsing Binary Stars. V. Identification of 31 Candidate Eclipsing Binaries in the K2 Engineering Dataset',
  authors: 'Conroy, K. E.; Prsa, A.; Stassun, K. G.; et al.',
  year: 2014,
  journal: 'PASP',
  volume: 126,
  page: 914,
  selected: true,
  project: ['keplerebs'],
  projectSelected: ['keplerebs'],
  type: 'journal',
  nauthor: '1st',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2014PASP..126..914C',
  publisherLink: 'http://doi.org/10.1086/678953',
  pdf: '2014bConroy+.pdf'
}, {
  title: 'Kepler Eclipsing Binary Stars. IV. Precise Eclipse Times for Close Binaries and Identification of Candidate Three-body Systems',
  authors: 'Conroy, K. E.; Prsa, A.; Stassun, K. G.; et al.',
  year: 2014,
  journal: 'AJ',
  volume: 147,
  page: 45,
  selected: true,
  project: ['keplerebs', 'etvs'],
  projectSelected: ['keplerebs', 'etvs'],
  type: 'journal',
  nauthor: '1st',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2014AJ....147...45C',
  publisherLink: 'http://doi.org/10.1088/0004-6256/147/2/45',
  pdf: '2014aConroy+.pdf'
}, {
  title: 'A Triple Eclipsing System as a Test Case for Close Binary Formation Through Kozai Cycles',
  authors: 'Conroy, Kyle E.; Prsa, A.; Stassun, K.',
  year: 2014,
  journal: 'AAS',
  volume: 223,
  page: 155.20,
  selected: true,
  project: ['triples'],
  projectSelected: [],
  type: 'poster',
  nauthor: '1st',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2014AAS...22315520C',
  pdf: 'aas_2014_jan.pdf'
}, {
  title: 'KIC 4544587: an eccentric, short-period binary system with δ Sct pulsations and tidally excited modes',
  authors: 'Hambleton, K. M.; Kurtz, D. W.; Prsa, A.; et al.',
  year: 2013,
  journal: 'MNRAS',
  volume: 434,
  page: 925,
  selected: false,
  project: ['other', 'etvs'],
  projectSelected: [],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2013MNRAS.434..925H',
  publisherLink: 'http://doi.org/10.1093/mnras/stt886'
}, {
  title: 'Phoebe 2.0 - Triple and multiple systems',
  authors: 'Conroy, K.; Degroote, P.; Hambleton, K.; Bloemen, S.; Pablo, H.; Giammarco, J.; Prša, A.',
  year: 2013,
  journal: 'EAS',
  volume: 64,
  page: '295C',
  selected: true,
  project: ['phoebe'],
  projectSelected: ['phoebe'],
  type: 'oral',
  nauthor: '1st',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2013EAS....64..295C',
  publisherLink: 'http://doi.org/10.1051/eas/1364040',
}, {
  title: 'Physics of Eclipsing Binaries: Heartbeat Stars and Tidally Induced Pulsations',
  authors: 'Hambleton, K.; Degroote, P.; Conroy, K.; et al.',
  year: 2013,
  journal: 'EAS',
  volume: 64,
  page: 285,
  selected: false,
  project: ['phoebe'],
  projectSelected: [],
  type: 'oral',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2013EAS....64..285H',
  publisherLink: 'http://doi.org/10.1051/eas/1364039'
}, {
  title: 'PHOEBE 2.0 - Where no model has gone before',
  authors: 'Degroote, P.; Conroy, K.; Hambleton, K.; et al.',
  year: 2013,
  journal: 'EAS',
  volume: 64,
  page: 277,
  selected: false,
  project: ['phoebe'],
  projectSelected: [],
  type: 'oral',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2013EAS....64..277D',
  publisherLink: 'http://doi.org/10.1051/eas/1364038'
}, {
  title: 'Physics of Eclipsing Binaries: Modelling in the new era of ultra-high precision photometry',
  authors: 'Bloemen, S.; Degroote, P.; Conroy, K.; et al.',
  year: 2013,
  journal: 'EAS',
  volume: 64,
  page: 269,
  selected: false,
  project: ['phoebe'],
  projectSelected: [],
  type: 'oral',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2013EAS....64..269B',
  publisherLink: 'http://doi.org/10.1051/eas/1364037'
}, {
  title: 'Physics of Eclipsing Binaries: Motivation for the New-Age Modeling Suite',
  authors: 'Prsa, A.; Degroote, P.; Conroy, K.; et al.',
  year: 2013,
  journal: 'EAS',
  volume: 64,
  page: 259,
  selected: false,
  project: ['phoebe'],
  projectSelected: [],
  type: 'oral',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2013EAS....64..259P',
  publisherLink: 'http://doi.org/10.1051/eas/1364036'
}, {
  title: 'Color-Magnitude Diagram for M14',
  authors: 'Reinhart, E.; McCombs, T.; Murphy, B. W.; et al.',
  year: 2013,
  journal: 'AAS',
  volume: 221,
  page: 250.21,
  selected: false,
  project: ['other'],
  projectSelected: [],
  type: 'poster',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2013AAS...22125021R',
}, {
  title: 'The Color-Magnitude Diagram of the Globular Cluster M14',
  authors: 'Reinhart, E. D.; McCombs, T.; Darragh, A. N.; et al.',
  year: 2012,
  journal: 'JSARA',
  volume: 7,
  page: 56,
  selected: false,
  project: ['other'],
  projectSelected: [],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2012JSARA...7...56R',
  publisherLink: 'http://jsara.org/volume07.html'
}, {
  title: 'Eclipse Timing Variations of Short-Period Binaries in the Kepler Field',
  authors: 'Conroy, Kyle E.; Prsa, A.; Orosz, J.; Welsh, W.; Kepler Team',
  year: 2012,
  journal: 'AAS',
  volume: 220,
  page: 406.03,
  selected: true,
  project: ['keplerebs', 'etvs'],
  projectSelected: [],
  type: 'oral',
  nauthor: '1st',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2012AAS...22040603C',
}, {
  title: 'Searching for Variable Stars in Southern Globular Clusters',
  authors: 'Murphy, B. W.; Darragh, A. N.; Conroy, K. E.; et al.',
  year: 2012,
  journal: 'AAS',
  volume: 220,
  page: 333.01,
  selected: false,
  project: ['other'],
  projectSelected: [],
  type: 'poster',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2012AAS...22033301M'
}, {
  title: 'A Showcase of Unique Binary Systems Discovered by the Kepler Satellite',
  authors: 'Kirk, B.; Prsa, A.; Conroy, K.; et al.',
  year: 2012,
  journal: 'AAS',
  volume: 220,
  page: 329.10,
  selected: false,
  project: ['keplerebs'],
  projectSelected: [],
  type: 'poster',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2012AAS...22032910K'
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
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2012JSARA...5...34C',
  publisherLink: 'http://jsara.org/volume05.html',
  pdf: '2012Conroy+.pdf'
}, {
  title: 'Kepler Eclipsing Binary Stars. II. 2165 Eclipsing Binaries in the Second Data Release',
  authors: 'Slawson, R. W.; Prsa, A.; Welsh, W. F.; et al.',
  year: 2011,
  journal: 'AJ',
  volume: 142,
  page: 160,
  selected: false,
  project: ['keplerebs'],
  projectSelected: ['keplerebs'],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2011AJ....142..160S',
  publisherLink: 'http://doi.org/10.1088/0004-6256/142/5/160',
  pdf: '2011Slawson+.pdf'
}, {
  title: 'Kepler Eclipsing Binary Stars. I. Catalog and Principal Characterization of 1879 Eclipsing Binaries in the First Data Release',
  authors: 'Prsa, A.; Batalha, N.; Slawson, R. W.; et al.',
  year: 2011,
  journal: 'AJ',
  volume: 141,
  page: 83,
  selected: false,
  project: ['keplerebs'],
  projectSelected: ['keplerebs'],
  type: 'journal',
  nauthor: 'nth',
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2011AJ....141...83P',
  publisherLink: 'http://doi.org/10.1088/0004-6256/141/3/83',
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
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2011AAS...21715218C'
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
  adsLink: 'https://ui.adsabs.harvard.edu/abs/2010AAS...21541936C',
  pdf: 'aas_2010_jan.pdf'
}
]

export function makePublication(dict, expanded, filter, url) {
  // function to convert dictionary from above (publicationDicts) into a Publication
  // object by taking the filter and base URL
  return (<Publication title={dict.title}
                       adsLink={dict.adsLink}
                       publisherLink={dict.publisherLink}
                       pdf={dict.pdf}
                       authors={dict.authors}
                       year={dict.year}
                       journal={dict.journal}
                       volume={dict.volume}
                       page={dict.page}
                       selected={dict.selected}
                       project={dict.project}
                       projectSelected={dict.projectSelected}
                       type={dict.type}
                       nauthor={dict.nauthor}
                       filter={filter}
                       expanded={expanded}
        />)
}
