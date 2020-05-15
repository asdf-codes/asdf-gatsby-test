import React from "react"
import {Helmet} from "react-helmet"
import {StaticQuery, graphql} from "gatsby"

export const Seo = ({description, keywords, title, image, url, author}) => {
    const site = ""

    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const twitterUser = data.site.siteMetadata.twitterUsername
                const metaDescription = description || data.site.siteMetadata.description
                const metaTitle = title ? title : data.site.siteMetadata.title
                const metaAuthor = author ? author : data.site.siteMetadata.author
                const metaUrl = url ? url : data.site.siteMetadata.url
                const metaImage = image ? `${site}${image}` : data.site.siteMetadata.image
                const metaKeywords = keywords ? keywords : ["gatsby blog", "gatsby MDX blog"]
                return (
                    <Helmet
                        title={title}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription,
                              },
                              {
                                property: `og:title`,
                                content: metaTitle,
                              },
                              {
                                property: `og:description`,
                                content: metaDescription,
                              },
                              {
                                property: `og:type`,
                                content: `website`,
                              },
                              {
                                property: `og:image`,
                                content: metaImage,
                              },
                              {
                                property: `og:url`,
                                content: metaUrl,
                              },
                              {
                                name: `twitter:card`,
                                content: `summary_large_image`,
                              },
                              {
                                name: `twitter:creator`,
                                content: twitterUser,
                              },
                              {
                                name: `twitter:title`,
                                content: metaTitle,
                              },
                              {
                                name: `twitter:description`,
                                content: metaDescription,
                              },
                              {
                                name: `twitter:image`,
                                content: metaImage,
                              },
                        ].concat(
                            metaKeywords && metaKeywords.length > 0 ? {
                                name: `keywords`,
                                content: metaKeywords.join(`, `),
                            } : []
                        )
                    }
                    />
                )
            }}
        />
    )
}

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                author
                image
            }
        }
    }
`

/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */



// import React from "react"
// import PropTypes from "prop-types"
// import { Helmet } from "react-helmet"
// import { useStaticQuery, graphql } from "gatsby"

// function SEO({ description, lang, meta, title }) {
//   const { site } = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//           }
//         }
//       }
//     `
//   )

//   const metaDescription = description || site.siteMetadata.description

//   return (
//     <Helmet
//       htmlAttributes={{
//         lang,
//       }}
//       title={title}
//       titleTemplate={`%s | ${site.siteMetadata.title}`}
//       meta={[
//         {
//           name: `description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:title`,
//           content: title,
//         },
//         {
//           property: `og:description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:type`,
//           content: `website`,
//         },
//         {
//           name: `twitter:card`,
//           content: `summary`,
//         },
//         {
//           name: `twitter:creator`,
//           content: site.siteMetadata.author,
//         },
//         {
//           name: `twitter:title`,
//           content: title,
//         },
//         {
//           name: `twitter:description`,
//           content: metaDescription,
//         },
//       ].concat(meta)}
//     />
//   )
// }

// SEO.defaultProps = {
//   lang: `en`,
//   meta: [],
//   description: ``,
// }

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired,
// }

// export default SEO
