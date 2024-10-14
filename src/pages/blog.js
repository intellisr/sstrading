import React from "react"
import BlogHeader from "../components/Blog/blogHeader"
import BlogsContainer from "../components/Blog/blogsContainer"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const Blog = ({ data }) => {
  console.log("data", data)
  let HeaderPost = data?.allMarkdownRemark?.edges[0]
  let otherPosts = data?.allMarkdownRemark?.edges.slice(1)

  return (
    <Layout>
      <Seo
        title="Sithranjan Saranath General Trading L.L.C"
        description="At Sithranjan Saranath General Trading L.L.C, we specialize in exporting fresh, high-quality fruits and vegetables from Sri Lanka to the United Arab Emirates. Our mission is to deliver the rich flavors of Sri Lankan produce to the Middle East, ensuring freshness and satisfaction for all our clients."
      ></Seo>
      <BlogHeader post={HeaderPost} />
      <BlogsContainer data={otherPosts} />
    </Layout>
  )
}

export default Blog

export const WorkPageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: 30
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD:MM:YYYY hh:mm a")
            title
            description
            featuredimage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
