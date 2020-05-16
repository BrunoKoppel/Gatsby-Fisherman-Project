import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ImageServer from './ImageServer.js'
import './PageTwoBookContent.css'

const BookData = () => {
  const data = useStaticQuery(graphql`
    {
      allBookNameAndDescriptionJson {
        edges {
          node {
            Title
            Author
            Description
            Description1
            Description2
            OnTheNatureOfThings
          }
        }
      }
    }
  `)
  return <tr>
            <td>
                <div> 
                    <div className="book-img">
                        
                            <ImageServer alt="The Swerve Bookcover" filename="the-swerve-pulitzer-paperback.jpg" />
                        
                    </div>
                    <div className="book-text">
                        <div>
                            <h3>"{data.allBookNameAndDescriptionJson.edges[0].node.Title}" by {data.allBookNameAndDescriptionJson.edges[0].node.Author}</h3>
                            <p>
                                {data.allBookNameAndDescriptionJson.edges[0].node.Description1}
                                <i>{data.allBookNameAndDescriptionJson.edges[0].node.OnTheNatureOfThings}</i>
                                {data.allBookNameAndDescriptionJson.edges[0].node.Description2}
                            </p>
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div> 
                    <div className="book-img">
                        
                            <ImageServer alt="Hackers and Painters BookCover" filename="paulgraham_2202_3598897.jpg" />
                        
                    </div>
                    <div className="book-text">
                        <div>
                            <h3>"{data.allBookNameAndDescriptionJson.edges[1].node.Title}" by {data.allBookNameAndDescriptionJson.edges[1].node.Author}</h3>
                            <p>{data.allBookNameAndDescriptionJson.edges[1].node.Description}</p>
                        </div>
                    </div>
                </div>
            </td>
  </tr>
        
};
    

export default BookData