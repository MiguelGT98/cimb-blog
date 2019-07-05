const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allSanityPost {
        edges {
          node {
            categories {
              title
            }
            author {
              name
            }
            body {
              children{
                text
              }
            }
            publishedAt
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
      console.log(node)
      createPage({
        path: `post/${node.slug.current}`,
        component: path.resolve(`./src/templates/blogPost.js`),
        context: {
          blog: true,
          title: node.title,
          id: node.id,
          mainImage: node.mainImage.asset.url,
          categories: node.categories,
          author: node.author.name,
          description:node.body[0],
          date: node.publishedAt,
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
