const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allSanityPost {
        edges {
          node {
            id
            slug {
              current
            }
            title
            mainImage {
              asset {
                url
              }
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allSanityPost.edges
    const postsPerPage = 3
    const numPages = Math.ceil(posts.length / postsPerPage)

    result.data.allSanityPost.edges.forEach(({ node }) => {
      createPage({
        path: `post/${node.slug.current}`,
        component: path.resolve(`./src/templates/blogPost.js`),
        context: {
          blog: true,
          title: node.title,
          id: node.id,
          mainImage: node.mainImage.asset.url,
        },
      })
    })

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/blogList/index.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })
}
