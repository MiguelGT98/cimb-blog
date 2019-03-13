import React from 'react'
import { Link } from "gatsby"

import { StaticQuery, graphql } from "gatsby"

import './index.css';

function index() {
    return (
        <StaticQuery
            query={
                graphql`
                    query blogPostsQuery {
                        allSitePage (filter: { context:{ blog: { eq: true } } }) {
                            edges {
                              node {
                                context {
                                    blog
                                    title
                                }
                                path
                              }
                            }
                        }
                    }
                `
            }
            render={data => (
                <>
                    {data.allSitePage.edges.map(node => {
                        return <Link className="blog_post_link" to={node.node.path}>{node.node.context.title}</Link>
                    })}
                </>
            )}
        />
    )
}

export default index
