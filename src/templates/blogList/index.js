import React from "react"
import { Link, graphql } from "gatsby"

import "./index.css"

import Layout from "../../components/layout"
import BlogPreview from "./blogPreview"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"


export default class BlogList extends React.Component {
  render() {
    const { currentPage, numPages } = this.props.pageContext
    const numberPagesBetween = numPages - currentPage
    let pagesBetween

    if (numberPagesBetween > 3) {
      pagesBetween = Array.from({ length: 3 }).map((item, index) => {
        return currentPage + index
      })
    } else {
      pagesBetween = Array.from({ length: numberPagesBetween }).map(
        (item, index) => {
          return currentPage + index + 1
        }
      )
    }

    return (
      <Layout>
        <div className="blog-list">
          <h2>Nuestro blog</h2>
          <div className="grid-container">
            {this.props.data.allSitePage.edges.map((node, index) => {
              return (
                <BlogPreview
                  path={node.node.path}
                  title={node.node.context.title}
                  mainImage={node.node.context.mainImage}
                  n={index + 1}
                />
              )
            })}
          </div>
        </div>
        <ul className="blog-navigation-wrapper">
          {!(currentPage === 1) && (
            <li className="blog-navigation-item">
              {" "}
              <Link
                to={`/blog/${currentPage - 1 === 1 ? "" : currentPage - 1}`}
              >
                Prev.
              </Link>
            </li>
          )}
          <li className="blog-navigation-item current">{currentPage}</li>
          {pagesBetween.map(number => {
            return (
              <li className="blog-navigation-item">
                <Link to={`/blog/${number}`}>{number}</Link>
              </li>
            )
          })}
          {!(currentPage === numPages) && (
            <li className="blog-navigation-item">
              {" "}
              <Link to={`/blog/${currentPage + 1}`}>Sig.</Link>
            </li>
          )}
        </ul>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogPostsQuery($skip: Int!, $limit: Int!) {
    allSitePage(
      filter: { context: { blog: { eq: true } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          context {
            blog
            title
            mainImage
          }
          path
        }
      }
    }
  }
`
