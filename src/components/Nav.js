import React from "react"
import { useStaticQuery, Link, graphql } from 'gatsby'
import { NavWrapper } from "../elements/NavElements"

export const Nav = () => {
    
    const data = useStaticQuery(graphql`
        query {
            a613: file(relativePath: {eq: "a613.svg"}) {
                publicURL
            }
        }
    `)
    
    return(
        <NavWrapper>
            <Link to="/">
                <img 
                    src={data.a613.publicURL} 
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