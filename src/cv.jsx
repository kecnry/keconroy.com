import React from 'react'
import {Link} from 'react-router-dom'

import {MainTab, Section} from './common'
import {blue1, blue2, blue3, blue3overlay, gray1, gray2, gray3, gray3overlay} from './common'
import {publicationDicts, makePublication} from './publications'
import {productDicts, makeProduct} from './products'

export class CV extends MainTab {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h2>Curriculum Vitae</h2>

        <CVInfo includePDF={true}/>
        <CVEducation color={blue2} dark={true}/>
        <CVTeaching/>
        <CVResearch color={blue2} dark={true}/>
        <CVObserving/>

        <CVSelectPubs color={blue2} dark={true}/>
        <CVOralPubs/>
        <CVPosterPubs color={blue2} dark={true}/>
        <CVInvitedTalks/>
        <CVProducts color={blue2} dark={true}/>

        <CVProfDevelopment/>
        <CVMemberships color={blue2} dark={true}/>
        <CVAwards/>
      </div>
    )
  }
}

export class CVInfo extends React.Component {
  render() {
    if (this.props.includePDF) {
      var pdfLink = <a href={`${process.env.PUBLIC_URL}/pdf/KyleConroy_CV.pdf`} target="_blank" rel="noopener noreferrer"  style={{padding: '2px'}}><span className="far fa-file-pdf"></span> PDF version</a>
    } else {
      var pdfLink = null
    }

    return (
      <Section color={this.props.color} dark={this.props.dark}>
        {/* <h1>Kyle Conroy</h1> */}
        <p>
          Department of Astrophysics &amp; Planetary Sciences<br/>
          Villanova University<br/>
          800 E Lancaster Ave, Villanova PA 19085<br/>
          <a href='mailto:kyle.conroy@villanova.edu'>kyle.conroy [at] villanova.edu</a>
        </p>

        {pdfLink}

      </Section>
    )
  }
}

export class CVEducation extends React.Component {
  render() {
    return (
      <Section color={this.props.color} dark={this.props.dark}>
        <h2>Education</h2>
        <table>
          <tbody>
            <tr>
              <td>May 2018</td>
              <td><b>PhD</b> in Physics | <b>Vanderbilt University</b>, Nashville, TN<br/>Advisors: Keivan Stassun &amp; Andrej Prša | Committee Members: David Weintraub, Andreas Berlind<br/>Dissertation: <a href={`${process.env.PUBLIC_URL}/pdf/2018Conroy_dissertation.pdf`} target="_blank" rel="noopener noreferrer">Astrophysics of Stellar Multiple Systems</a></td>
            </tr>
            <tr>
              <td>May 2011</td>
              <td><b>BS</b> in Astronomy and Astrophysics | <b>Villanova University</b>, Villanova, PA<br/>Research Advisor: Andrej Prša | Minor: Physics</td>
            </tr>
          </tbody>
        </table>

      </Section>
    )
  }
}

export class CVTeaching extends React.Component {
  render() {
    return (
      <Section color={this.props.color} dark={this.props.dark}>
        <h2>Teaching Positions</h2>

        <table>
          <tbody>
            <tr>
              <td>Fall 2019, 2020</td>
              <td>Adjunct Professor | Villanova University<br/>Taught physics for engineers lab session</td>
            </tr>
            <tr>
              <td>Spring 2018, 2012</td>
              <td>Teaching Assistant | Villanova University<br/>Graded and helped teach the senior-level capstone course: <a href="http://aprsa.villanova.edu/?q=modeling" target="_blank" rel="noopener noreferrer">Modeling Analysis</a></td>
            </tr>
            <tr>
              <td>June 2015, Jan 2014</td>
              <td>Internship Sponsor | Vanderbilt University<br/>Hosted high-school students for 6-week internships</td>
            </tr>
            <tr>
              <td>Spring 2015</td>
              <td>Contributing Lecturer | Vanderbilt University<br/>Planned and taught two class-sessions in a freshman seminar on exoplanets</td>
            </tr>
            <tr>
              <td>Aug 2013 - June 2014</td>
              <td>Graduate Teaching Assistant | Vanderbilt University<br/>Intro Nighttime Astronomy Lab - helped create labs and taught a lab-section</td>
            </tr>
            <tr>
              <td>Fall 2008 - 2010</td>
              <td>Undergraduate Teaching Assistant | Villanova University<br/>Co-taught and graded labs for AST 1073 Stellar Lab for arts majors</td>
            </tr>
          </tbody>
        </table>

      </Section>
    )
  }
}

export class CVResearch extends React.Component {
  render() {
    return (
      <Section color={this.props.color} dark={this.props.dark}>
        <h2>Research Positions</h2>

        <table>
          <tbody>
            <tr>
              <td>June 2018 - Present</td>
              <td>Postdoctoral Researcher | Villanova University<br/>Dr Andrej Prša</td>
            </tr>
            <tr>
              <td>November 2016 - May 2018</td>
              <td>Research Technician | Villanova University<br/>Dr Andrej Prša</td>
            </tr>
            <tr>
              <td>June 2012 - May 2018</td>
              <td>Graduate Research Assistant | Vanderbilt University<br/>Dr Keivan Stassun</td>
            </tr>
            <tr>
              <td>Aug 2011 - June 2012</td>
              <td>Research Consultant | Villanova University<br/>Dr Andrej Prša</td>
            </tr>
            <tr>
              <td>Summer 2011</td>
              <td>Research Associate | Pennsylvania State University<br/>Dr Richard Wade</td>
            </tr>
            <tr>
              <td>Summer 2010</td>
              <td>SARA NSF REU Intern | Butler University<br/>Dr Brian Murphy</td>
            </tr>
            <tr>
              <td>Feb 2008 - June 2011</td>
              <td>Undergraduate Research Assistant | Villanova University<br/>Dr Edward Guinan and Dr Andrej Prša</td>
            </tr>
          </tbody>
        </table>

      </Section>
    )
  }
}

export class CVObserving extends React.Component {
  render() {
    return (
      <Section color={this.props.color} dark={this.props.dark}>
        <h2>Observing Experience</h2>

        <table>
          <tbody>
            <tr>
              <td>May 2015</td>
              <td>Arranged world-wide photometric <a href="http://adsabs.harvard.edu/abs/2015IBVS.6138....1C" target="_blank" rel="noopener noreferrer" >follow-up campaign for triple eclipse event of KIC 2835289</a></td>
            </tr>
            <tr>
              <td>Summer 2012</td>
              <td>Mayall 4-m at KPNO</td>
            </tr>
            <tr>
              <td>Summer 2010</td>
              <td>SARA 0.9-m at KPNO and remotely at CTIO</td>
            </tr>
          </tbody>
        </table>

      </Section>
    )
  }
}

export class CVSelectPubs extends React.Component {
  render() {
    return (
      <Section color={this.props.color} dark={this.props.dark}>
        <h2>Selected Publications</h2>
        <div style={{paddingBottom: '40px'}}>
          <p>see all <Link to="/publications/all/journal/all">Journal Publications</Link></p>
        </div>

        {publicationDicts.map((p, i) => (makePublication(p, false, {type: 'journal', selected: true}, '/publications')))}

      </Section>
    )
  }
}

export class CVOralPubs extends React.Component {
  render() {
    return (
      <Section color={this.props.color} dark={this.props.dark}>
        <h2>Selected Oral Presentations</h2>
        <div style={{paddingBottom: '40px'}}>
          <p>see all <Link to="/publications/all/oral/all">Oral Publications</Link></p>
        </div>

        {publicationDicts.map((p, i) => (makePublication(p, false, {type: 'oral', selected: true}, '/publications')))}

      </Section>
    )
  }
}

export class CVPosterPubs extends React.Component {
  render() {
    return (
      <Section color={this.props.color} dark={this.props.dark}>
        <h2>Selected Poster Presentations</h2>
        <div style={{paddingBottom: '40px'}}>
          <p>see all <Link to="/publications/all/poster/all">Poster Publications</Link></p>
        </div>

        {publicationDicts.map((p, i) => (makePublication(p, false, {type: 'poster', selected: true}, '/publications')))}

      </Section>
    )
  }
}

export class CVProducts extends React.Component {
  render() {
    return (
      <Section color={this.props.color} dark={this.props.dark}>
        <h2>Code &amp; Products</h2>
        <div style={{paddingBottom: '40px'}}>
          <p>see all <Link to="/products">Code &amp; Products</Link></p>
        </div>

        {productDicts.map((p, i) => (makeProduct(p, false, {selected: true}, '/products')))}

      </Section>
    )
  }
}

export class CVInvitedTalks extends React.Component {
  render() {
    return (
      <Section color={this.props.color} dark={this.props.dark}>
        <h2>Invited Talks</h2>

        <table>
          <tbody>
            <tr>
              <td>July 2020</td>
              <td><a href="https://www.ru.nl/astrophysics/news-agenda/colloquia-events/" target="_blank" rel="noopener noreferrer">Invited Colloquium Speaker</a> | Radboud University Nijmegen</td>
            </tr>
            <tr>
              <td>October 2019</td>
              <td>Invited Speaker | University of Liege, Belgium</td>
            </tr>
            <tr>
              <td>June 2018, July 2019</td>
              <td>Co-Lead workshops including giving multiple talks and tutorials | <a href="http://phoebe-project.org/workshops" target="_blank" rel="noopener noreferrer">PHOEBE Workshop</a> | Villanova University</td>
            </tr>
            <tr>
              <td>March 2018</td>
              <td>Invited Speaker | <a href="https://www.cfa.harvard.edu/events/stars-planets-seminar?field_seminar_series_value=spring18" target="_blank" rel="noopener noreferrer">Stars &amp; Planets Seminar</a> | Center for Astrophysics, Harvard University</td>
            </tr>
            <tr>
              <td>December 2017</td>
              <td>Invited Colloquium Speaker | Ljubljana University, Slovenia</td>
            </tr>
            <tr>
              <td>April 2015</td>
              <td>Invited to lead workshop on using PHOEBE | <a href="https://fys.kuleuven.be/ster/meetings/binary-2015" target="_blank" rel="noopener noreferrer">Space-Inn Workshop</a> | KU Leuven, Belgium</td>
            </tr>
          </tbody>
        </table>
      </Section>
    )
  }
}

export class CVProfDevelopment extends React.Component {
  render() {
    return (
      <Section color={this.props.color} dark={this.props.dark}>
        <h2>Professional Development</h2>

        <table>
          <tbody>
            <tr>
              <td><b>Refereed Articles</b></td>
              <td>
                Astronomical/Astrophysical Journal (8),
                Astronomy &amp; Astrophysics (3),
                Monthly Notices of the Royal Astronomical Society (8),
                Information Bulletin on Variable Stars (1),
                Publications of the Astronomical Society of the Pacific (1),
                Publications of the Astronomical Society of Japan (3),
                MDPI Data (1),
                Astrophysics &amp; Space Science (1),
                New Astronomy (1)
              </td>
            </tr>
            <tr>
              <td><b>Grant Review Panels</b></td>
              <td>
                NSF AAG (1)
              </td>
            </tr>
            <tr>
              <td><b>Scientific Organizing Committees</b></td>
              <td>
                <a href="https://binaries.physics.muni.cz/organisers/soc/" target="_blank" rel="noopener norefferer">Universe of Binaries</a> | Telc Czech Republic | September 2019
              </td>
            </tr>
            <tr>
              <td><b>Local Organizing Committees</b></td>
              <td>
                <a href="http://phoebe-project.org/workshops/2020june/organizing_committee" target="_blank" rel="noopener norefferer">PHOEBE Workshop</a> | Villanova University | June-July 2020
                <br/>
                <a href="http://phoebe-project.org/workshops/2019july/organizing_committee" target="_blank" rel="noopener norefferer">PHOEBE Workshop</a> | Villanova University | July 2019
                <br/>
                <a href="http://phoebe-project.org/workshops/2018june/organizing_committee" target="_blank" rel="noopener norefferer">PHOEBE Workshop</a> | Villanova University | June 2018
              </td>
            </tr>
            <tr>
              <td>Summer 2015</td>
              <td>
                Started departmental <i>AstroHacks</i> (weekly meetings to work on <a href="http://github.com/vandy-astro-hacks" target="_blank" rel="noopener noreferrer">collaborative code projects</a>) at Vanderbilt University
              </td>
            </tr>
          </tbody>
        </table>

      </Section>
    )
  }
}

export class CVMemberships extends React.Component {
  render() {
    return (
      <Section color={this.props.color} dark={this.props.dark}>
        <h2>Memberships</h2>

        <table>
          <tbody>
            <tr>
              <td>2011 - 2016</td>
              <td>Kepler Eclipsing Binary Working Group | <a href="http://keplerebs.villanova.edu/members" target="_blank" rel="noopener noreferrer" >Member</a></td>
            </tr>
            <tr>
              <td>2010 - Present</td>
              <td>American Astronomical Society | <a href="https://aas.org/directory/member_details?id=36332" target="_blank" rel="noopener noreferrer" >Full Member</a></td>
            </tr>
            <tr>
              <td>2010 - Present</td>
              <td>Society of Physics Students | Member</td>
            </tr>
          </tbody>
        </table>

      </Section>
    )
  }
}

export class CVAwards extends React.Component {
  render() {
    return (
      <Section color={this.props.color} dark={this.props.dark}>
        <h2>Fellowships &amp; Awards</h2>
        <table>
          <tbody>
            <tr>
              <td>2015 - 2018</td>
              <td>NASA Earth and Space Science Graduate Fellowship (<a href="http://nspires.nasaprs.com/external/solicitations/summary.do?method=init&amp;solId=%7BB6CDCEA6-8EDD-A48A-FAF8-E588F66661C3%7D&amp;path=open" target="_blank" rel="noopener noreferrer" >NESSF</a>) Recipient</td>
            </tr>
            <tr>
              <td>May 2011</td>
              <td>Gregor Mendel Dean's Award - Academic Excellence in the Sciences</td>
            </tr>
            <tr>
              <td>May 2010</td>
              <td>Sigma Pi Sigma - Physics National Honor Society</td>
            </tr>
            <tr>
              <td>April 2010</td>
              <td>Barry M Goldwater <a href="https://goldwater.scholarsapply.org/hm-2010.php" target="_blank" rel="noopener noreferrer" >Honorable Mention</a></td>
            </tr>
            <tr>
              <td>Oct 2008 - Dec 2009</td>
              <td>NASA International Year of Astronomy <a href="http://www.nasa.gov/home/hqnews/2008/nov/HQ_08-282_IYA_Ambassadors.html" target="_blank" rel="noopener noreferrer" >Student Ambassador</a> for Pennsylvania</td>
            </tr>
          </tbody>
        </table>

      </Section>
    )
  }
}
