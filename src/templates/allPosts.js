import React from "react"
import {graphql} from "gatsby"
import {
    Container,
    Content,
    ContentCard,
    FeatureImage,
    Pagination,
    Seo
} from "../components"
import{ H1, P} from "../elements"

const allPosts = ({pageContext, data}) => {
    const {currentPage, numPages} = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
    const nextPage = `/${currentPage + 1}`

    const posts = data.allMdx.edges


    return (
        <Container>
            <Seo />
            {/* <FeatureImage /> */}
            <Content>
                {/* <H1 textAlign="center" margin="0 0 1rem 0">
                    hello, World
                </H1>
                <P color="dark2" textAlign="center">
                    we do more with less and help people put ideas on the internet. 
                </P> */}
                {posts.map(post => (
                    <ContentCard 
                        key={post.node.frontmatter.slug}
                        date={post.node.frontmatter.date}
                        title={post.node.frontmatter.title}
                        excerpt={post.node.frontmatter.excerpt}
                        slug={post.node.frontmatter.slug}
                        image={post.node.frontmatter.featureImage.childImageSharp.fixed}
                    /> 
                ))}
            </Content>
            <Pagination 
                isFirst={isFirst}
                isLast={isLast}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </Container>
    )

}

export default allPosts;

export const pageQuery = graphql`
    query AllPostsQuery($skip: Int!, $limit: Int!) {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, skip: $skip, limit: $limit) {
            edges {
            node {
                frontmatter {
                date
                excerpt
                title
                slug
                featureImage {
                    childImageSharp {
                        fixed {
                            ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        }  
    }
`