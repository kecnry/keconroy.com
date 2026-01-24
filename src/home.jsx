import React from 'react'
import { Link } from 'react-router-dom'

import { Section, useMainTabScroll, blue2 } from './common'
import { ResearchOverview } from './research'
import { publicationDicts, makePublication } from './publications'
import { productDicts, makeProduct } from './products'

export function Home() {
  useMainTabScroll(true) // isHome = true to prevent auto-scrolling the header
  
  return (
    <div>
      <ResearchOverview project='phoebe' />
      <ResearchOverview project='etvs' color={blue2} dark={true} />

      <Section>
        <h2>Recent Publications</h2>
        <div style={{ paddingBottom: '40px' }}>
          <Link to={`/publications/all/all/all`}>see all publications</Link>
        </div>
        {publicationDicts.slice(0, 5).map((p, i) => (makePublication(p, false, {}, '/publications')))}
      </Section>

      <Section color={blue2} dark={true}>
        <h2>Recent Products</h2>
        <div style={{ paddingBottom: '40px' }}>
          <Link to={`/products/all/all`}>see all products</Link>
        </div>
        {productDicts.slice(0, 5).map((p, i) => (makeProduct(p, false, {}, '/products')))}
      </Section>
    </div>
  )
}
