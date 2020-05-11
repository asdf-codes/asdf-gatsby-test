import React from "react"
import { useStaticQuery, Link, graphql } from 'gatsby'
import { NavWrapper } from "../elements"

export const Nav = () => {
    
    const data = useStaticQuery(graphql`
        query {
            logl: file(relativePath: {eq: "logl.svg"}) {
                publicURL
            }
        }
    `)
    
    return(
        <NavWrapper>
            <Link to="/">
                <img 
                    src={data.logl.publicURL} 
                    alt="My log"
                    style={{
                        margin: `0 auto`,
                        maxWidth: '5rem',
                        padding: `1.45rem 1.0875rem`,
                      }}/>
            </Link>
        </NavWrapper>
    )
}