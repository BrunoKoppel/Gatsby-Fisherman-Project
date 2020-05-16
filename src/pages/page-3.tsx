// Gatsby supports TypeScript natively!
import React from "react"
import Iframe from 'react-iframe'
import { PageProps, Link } from "gatsby"
import InstagramEmbed from "../components/InstagramEmbed.js"
import Layout from "../components/layout"
import SEO from "../components/seo"


const ThirdPage = (props: PageProps) => (
  <Layout>
    <SEO title="Page three" />
    <table>
      <tr style={{display: "inline-block"}}>
        <td>
          <div style={{float: 'left', padding: 30}}>
            <Iframe className="iframe" src="https://open.spotify.com/embed/artist/5XK2KlEZ95yiEOqE8BcbgE" 
                  width="300" height="280" allowtransparency="true" allow="encrypted-media" />
          </div>
          
          <div style={{padding: 20}}>
            <h1>I'm also a Musician!</h1>
            <p>My music is a mix of Progressive Electronic that may or may not contain Acoustic elements, It mostly reliants on Synthesizers and Drum Machines.
            I personally play bass, guitar, and piano. (I wish I could play drums, 
            but acoustic ones are too loud for my apartment and I don't have space for a electronic kit, which would be awesome for my music)
            As for the Software I use, it is Ableton Live 10 with MAX, this last one allows me to build my own synthesizers from scratch using MAX presets</p>
          </div>
        </td>
      </tr>
      <tr style={{display: "inline-block"}}>
        <td style={{float: 'left', padding: 30, maxWidth: 200, width: '100%'}}>
          <div>
            <InstagramEmbed/>
          </div>
        </td>
        <td>
          <div style={{padding: 20}}>
            <p>
              This is two Arduino circuits that I build to control a group of LED lights. 
              The first one is just a loop of lights that increases speed with one button and the other triggers the circuit to start. 
              The second one is mimicing a sequence of Traffic lights in a European style
            </p>
          </div>
        </td>
        
       
      </tr>
    </table>
    <button><Link to="/">Homepage (Brief Intro)</Link> </button>
    <button><Link to="/page-2/">Page 2 (books)</Link></button>
  </Layout>
)

export default ThirdPage
