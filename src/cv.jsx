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
        <CVProducts/>

        <CVProfDevelopment color={blue2} dark={true}/>
        <CVMemberships/>
        <CVAwards color={blue2} dark={true}/>
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
          Department of Physics and Astronomy<br/>
          Vanderbilt University<br/>
          VU Station B 1807, Nashville TN 37235<br/>
          <a href='mailto:kyle.conroy@vanderbilt.edu'>kyle.conroy [at] vanderbilt.edu</a>
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
              <td><em>Current</em><br/>Spring 2018</td>
              <td>PhD candidate in Physics and Astronomy | <b>Vanderbilt University</b><br/>Nashville, TN | Advisors: Keivan Stassun &amp; Andrej Prša</td>
            </tr>
            <tr>
              <td>May 2011</td>
              <td>BS in Astronomy and Astrophysics | <b>Villanova University</b><br/>Villanova, PA | Research Advisor: Andrej Prša | Minor: Physics</td>
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
              <td>Spring 2018, 2012</td>
              <td>Teaching Assistant | Villanova University<br/>Graded and helped teach the senior-level capstone course: 'Modeling Analysis'</td>
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
              <td>November 2016 - Present</td>
              <td>Research Technician | Villanova University<br/>Dr Andrej Prša</td>
            </tr>
            <tr>
              <td>June 2012 - Present</td>
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

        {publicationDicts.map((p, i) => (makePublication(p, false, {type: 'journal', selected: true}, '/publications')))}

        <p>see all <Link to="/publications/all/journal/all">Journal Publications</Link></p>

      </Section>
    )
  }
}

export class CVOralPubs extends React.Component {
  render() {
    return (
      <Section color={this.props.color} dark={this.props.dark}>
        <h2>Selected Oral Presentations</h2>

        {publicationDicts.map((p, i) => (makePublication(p, false, {type: 'oral', selected: true}, '/publications')))}

        <p>see all <Link to="/publications/all/oral/all">Oral Publications</Link></p>

      </Section>
    )
  }
}

export class CVPosterPubs extends React.Component {
  render() {
    return (
      <Section color={this.props.color} dark={this.props.dark}>
        <h2>Selected Poster Presentations</h2>

        {publicationDicts.map((p, i) => (makePublication(p, false, {type: 'poster', selected: true}, '/publications')))}

        <p>see all <Link to="/publications/all/poster/all">Poster Publications</Link></p>

      </Section>
    )
  }
}

export class CVProducts extends React.Component {
  render() {
    return (
      <Section color={this.props.color} dark={this.props.dark}>
        <h2>Code &amp; Products</h2>

        {productDicts.map((p, i) => (makeProduct(p, false, {selected: true}, '/products')))}

        <p>see all <Link to="/products">Code &amp; Products</Link></p>
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

export class CVMemberships extends React.Component {
  render() {
    return (
      <Section color={this.props.color} dark={this.props.dark}>
        <h2>Memberships</h2>

        <table>
          <tbody>
            <tr>
              <td>2011 - Present</td>
              <td>Kepler Eclipsing Binary Working Group | <a href="http://keplerebs.villanova.edu/members" target="_blank" rel="noopener noreferrer" >Member</a></td>
            </tr>
            <tr>
              <td>2010 - Present</td>
              <td>American Astronomical Society | <a href="https://aas.org/directory/member_details?id=36332" target="_blank" rel="noopener noreferrer" >Junior Member</a></td>
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
        <h2>Fellowsips &amp; Awards</h2>
        <table>
          <tbody>
            <tr>
              <td>2015 - Present</td>
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
