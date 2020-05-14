import React from "react"
import { Link } from "gatsby"
import '../styles/styles.scss'

import { Container, FeatureImage, Content, ContentCard, Button } from "../components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const IndexPage = ({children}) => {
  return(
    <Container>
      <FeatureImage/>
      <Content>
        <ContentCard 
          date="may" 
          title="Lorem" 
          excerpt=" How your brain really thinks is through conclusion jumping and pattern recognition. if → then statements that have been accumulated over a period of time. because usually it works the following way. if → if → if → if and finally → then." 
          slug="ipsum"/>
        {children}
      </Content>
    </Container>
  )
}
  


export default IndexPage


{/* <Layout>
<SEO title="Home" />
<h1>Hi people</h1>
<p>Welcome to your new Gatsby site.</p>
<p>Now go build something great.</p>
<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
   <Image />
 </div>
<Link to="/page-2/">Go to page 2</Link>
</Layout> */}

