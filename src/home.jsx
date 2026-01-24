import React from 'react'
import { Link } from 'react-router-dom'

import { Section, useMainTabScroll } from './common'
import { ProjectOverviewList } from './projects'
import { publicationDicts, makePublication } from './publications'
import { productDicts, makeProduct } from './products'

export function Home() {
  useMainTabScroll(true) // isHome = true to prevent auto-scrolling the header
  
  // Define projects list to calculate proper indices
  const homeProjects = ['jdaviz', 'phoebe']
  const projectCount = homeProjects.length
  
  return (
    <div>
      <ProjectOverviewList projects={homeProjects} startIndex={0} />

      <Section index={projectCount}>
        <h2>Recent Products</h2>
        <div style={{ paddingBottom: '40px' }}>
          <Link to={`/products/all/all`}>see all products</Link>
        </div>
        {productDicts.slice(0, 5).map((p, i) => (makeProduct(p, false, {}, '/products', projectCount % 2 === 1)))}
      </Section>

      <Section index={projectCount + 1}>
        <h2>Recent Publications</h2>
        <div style={{ paddingBottom: '40px' }}>
          <Link to={`/publications/all/all/all`}>see all publications</Link>
        </div>
        {publicationDicts.slice(0, 5).map((p, i) => (makePublication(p, false, {}, '/publications')))}
      </Section>


    </div>
  )
}
