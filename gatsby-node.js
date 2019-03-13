const path = require(`path`);

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
                }
            }
        }
    }
    `).then((result)=>{
        result.data.allSanityPost.edges.forEach(({node})=>{
            createPage({
                path: `blog/${node.slug.current}`,
                component: path.resolve(`./src/templates/blogPost.js`),
                context:{
                    id: node.id
                }
            })
        })
    })
}