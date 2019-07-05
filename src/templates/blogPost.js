import React, { Component } from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer/index"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

import "./blogPost.css"

const BlogPost = ({location, data }) => {
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const {
    id,
    slug,
    title,
    author,
    mainImage,
    body,
    publishedAt,
  } = data.sanityPost
  return (
    <div>
      <Navbar />
      <div className="blog-post">
        <SEO title={title} />
        <Breadcrumb
          location={location}
          crumbLabel={title}
          crumbStyle={{ color: "#ccc" }}
          crumbActiveStyle={{ color: "#122c47" }}
        />
        <img className="mainImage" src={mainImage.asset.url} />
        <div className="details">
          <span className="date">
            {new Date(publishedAt).toLocaleDateString("es-MX", dateOptions)}
          </span>
          <h3 className="author">por {author.name}</h3>
        </div>
        <h1 className="title">{title}</h1>
        <div className="content">
          {body.map(block => {
            if (block.children) {
              return block.children.map(child => {
                return <p key={child.key}>{child.text}</p>
              })
            }

            if (block.asset) {
              return <img src={block.asset.url} />
            }
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query($id: String!) {
    sanityPost(id: { eq: $id }) {
      id
      publishedAt
      slug {
        current
      }
      mainImage {
        asset {
          id
          url
        }
      }
      title
      author {
        name
      }
      body {
        type: _type
        children {
          key: _key
          type: _type
          text
        }
        asset {
          type: _type
          url
        }
      }
    }
  }
`

export default BlogPost
