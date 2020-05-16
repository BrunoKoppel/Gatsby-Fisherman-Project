// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InjectPageThreeContent from "../components/PageThreeContent.js"



const ThirdPage = (props: PageProps) => (
  <Layout>
    <SEO title="Page three" />
    
    <InjectPageThreeContent/>
    
    <button><Link to="/">Homepage</Link> </button>
    <button><Link to="/page-2/">Page 2</Link></button>
  </Layout>
)

export default ThirdPage
