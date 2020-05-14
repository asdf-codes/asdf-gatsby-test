import React from 'react'
import {graphql} from 'gatsby'
import {Container, Content, ContentCard, FeatureImage, Pagination} from '../components'
import {H1, P} from '../elements'

const allPosts = ({pageContext, data}) => {
    const {currentPage, numPages} = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
    const nextPage = `/${currentPage + 1}`

    const posts = data.allMdx.edges 
    
    return(
        <Container>
            <FeatureImage/>
            <Content>
                <H1 textAligh="center" margin="0 0 1rem 0">fff</H1>
                <P color="dark1" textAligh="center">atterns of thinking is something I can get enough of. I feel like when you cannot control your thought that rarely anyone can. that is when you become delirious and uncontrollable to yourself but very vulnerable to the outside world. </P>
                {posts.map(post => (
                    <ContentCard
                    key={post.node.frontmatter.slug}
                    title={post.node.frontmatter.title}
                    date={post.node.frontmatter.date}
                    excerpt={post.node.frontmatter.excerpt}
                    slug={post.node.frontmatter.slug}/>
                ))}
            </Content>
            <Pagination
                ifFirst={isFirst}
                isLast={isLast}
                prevPage={prevPage}
                nextPage={nextPage}
                />
        </Container>
    )
} 

export default allPosts

export const pageQuery = graphql `
    query AllPostsQuery($skip: Int!, $limit: Int!) {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, skip: $skip, limit: $limit) {
            edges {
                node {
                    frontmatter {
                    slug
                    title
                    date
                    excerpt
                    }
                }
            }
        }
    }
`