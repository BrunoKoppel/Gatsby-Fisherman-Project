// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InjectBooks from "../components/PageTwoBookContent.js"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Books that have had a huge impact on me:</h1>
    <table style={{maxWidth: 800}}>
        <InjectBooks/>
    </table>
    <footer style={{}}>
      <button><Link to="/">Homepage (Brief Intro)</Link> </button>
      <button><Link to="/page-3/">Page 3 (Music and a Project)</Link></button>
    </footer>
    
  </Layout>
)

export default SecondPage
