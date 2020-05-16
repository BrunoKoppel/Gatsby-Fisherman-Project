import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Iframe from 'react-iframe'
import InstagramEmbed from "../components/InstagramEmbed.js"
import './PageThreeContent.css'

const PageThreeContents = () => {
  const data = useStaticQuery(graphql`
    {
      allPageThreeContentsJson {
        edges {
          node {
            Music
            Arduino
          }
        }
      }
    }
  `)
return <div>
        <h1>I'm also a Musician!</h1>
        <table>
        <tr style={{display: "inline-block"}}>
            <td>
            <div style={{float: 'left', padding: 30}}>
                <Iframe className="iframe" src="https://open.spotify.com/embed/artist/5XK2KlEZ95yiEOqE8BcbgE" 
                    width="400" height="240" allowtransparency="true" allow="encrypted-media" />
            </div>
            
            <div style={{padding: 20}}>
                <p>
                    {data.allPageThreeContentsJson.edges[0].node.Music}
                </p>
            </div>
            </td>
        </tr>
        </table>
        <h1>This is an Arduino Project I did</h1>
        <table>
        <tr style={{display: "inline-block"}}>
            <td style={{float: 'left', padding: 30, maxWidth: 400, width: '100%'}}>
            <div>
                <InstagramEmbed/>
            </div>
            </td>
            <td>
            <div style={{padding: 20}}>
                <p>
                    {data.allPageThreeContentsJson.edges[0].node.Arduino}
                </p>
            </div>
            </td>
        </tr>
        </table>
    </div>
}

export default PageThreeContents

