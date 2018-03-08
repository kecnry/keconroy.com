import React from 'react'
import {Link} from 'react-router-dom'

import {Section} from './common'
import {CVInfo} from './cv'
import {ResearchOverview} from './research'
import {blue1, blue2, blue3, blue3overlay, gray1, gray2, gray3, gray3overlay} from './common'
import {publicationDicts, makePublication} from './publications'
import {productDicts, makeProduct} from './products'

export class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <CVInfo/> */}

        {/* <Section>
          <p><b>THIS PAGE IS A WORK IN PROGRESS AND WILL EVENTUALLY REPLACE <a href="http://keconroy.com">keconroy.com</a></b></p>
        </Section> */}

        <ResearchOverview project='phoebe'/>
        {/* <ResearchOverview project='triples' color={blue2} dark={true}/> */}
        <ResearchOverview project='etvs' color={blue2} dark={true}/>

        <Section>
          <h2>Recent Publications</h2>
          <div style={{paddingBottom: '40px'}}>
            <Link to={`/publications/all/all/all`}>see all publications</Link>
          </div>
          {publicationDicts.slice(0,5).map((p, i) => (makePublication(p, false, {}, '/publications')))}
        </Section>


        <Section color={blue2} dark={true}>
          <h2>Recent Products</h2>
          <div style={{paddingBottom: '40px'}}>
            <Link to={`/products/all/all`}>see all products</Link>
          </div>
          {productDicts.slice(0,5).map((p, i) => (makeProduct(p, false, {}, '/products')))}
        </Section>
      </div>
    )
  }
}
