import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FooterWrapper, FooterSocialWrapper, FooterSocialIcons, P, } from '../elements'


export const Footer = () => {

    const data = useStaticQuery(graphql `
        query {
            facebook: file(relativePath: {eq: "facebook.svg"}) {
                publicURL
            }
            instagram: file(relativePath: {eq: "instagram.svg"}) {
                publicURL
            }
            medium: file(relativePath: {eq: "medium.svg"}) {
                publicURL
            }
        }
    `)

    return(
        <FooterWrapper>
            <FooterSocialWrapper>
                <FooterSocialIcons>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <img src={data.facebook.publicURL} alt="facebooklogo"/>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <img src={data.instagram.publicURL} alt="facebooklogo"/>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <img src={data.medium.publicURL} alt="facebooklogo"/>
                    </a>
                </FooterSocialIcons>
                <P size="xSmall" color="light1">∞bye world∞</P>
            </FooterSocialWrapper>
        </FooterWrapper>
    )
}