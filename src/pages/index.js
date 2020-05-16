import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageServer from "../components/ImageServer.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <table>
      <tr>
        <h1>Hello Fisherman Team!</h1>
      </tr>
      <tr>
        <td>
          <div style={{ margin: '1rem', float: "left", maxWidth: 280, width: '100%'}}>
            <ImageServer alt="Bruno's Portrait" filename="brunokoppel.JPG"/>
          </div>
          <div style={{ margin: '1rem', maxWidth: 900}}>
            <p>
              My name is Bruno Köppel. I'm a Software Engineer in the making. C/C++ is my main strength, 
              but I've done work with Python for Raspberry Pi projects, and some smaller apps, as well as working with the Django framework. 
              Recently after building my own Website and working on the Hack.Diversity Projects I've gotten interested in building web apps and starting my own services.
              My dream would be to create a Checklist/Journal/Schedule Manager for my own needs. I often feel like the apps that I use are not giving me an accurate image 
              of how my schedule looks like and I'm also concern with privacy, hence why I want to develop for my own needs.
            </p>
          </div>
        </td>
      </tr>
    </table>
   
    





    <p></p>
    <button><Link to="/page-2/">Page 2 (books)</Link> </button>
    <button><Link to="/page-3/">Page 3 (Music and a Project)</Link></button>
  </Layout>
)


export default IndexPage
