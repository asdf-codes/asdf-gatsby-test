import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import {FeatureImageWrapper} from "../elements/ImageElements"

export const FeatureImage = ({fixed}) => {
    
    const data = useStaticQuery(graphql`
        query {
            imageSharp(fixed: {originalName: {eq: "moon.png"}}) {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    `)
    
    return (
        <FeatureImageWrapper>
            <Img fixed={fixed ? fixed : data.imageSharp.fixed} style={{
                position: "absolute",
                margin: "0 auto",
            
                }}/>
        </FeatureImageWrapper>
    )
}