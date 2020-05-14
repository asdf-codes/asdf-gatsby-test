import React from 'react'
import {graphql} from 'gatsby'
import {Container, Content, FeatureImage} from '../components'
import {H1} from '../elements'

const notFound = ({data}) => {

    const featureImage = data.imageSharp.fixed 

    return (
        <Container>
            <FeatureImage fixed={featureImage}/>
            <Content>
                <H1 textAlign="center" margin="0 0 1rem 0">oh no</H1>
            </Content>
        </Container>
    )
}

export default notFound

export const notFoundQuery = graphql`
    query notFoundQuery {
        imageSharp(fixed: {originalName: {eq: "sad-cat.png"}}) {
            fixed {
                ...GatsbyImageSharpFixed
            }
        }
    }
`