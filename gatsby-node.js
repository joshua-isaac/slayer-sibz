// create single post & category page templates
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      categories: allWpCategory {
        edges {
          node {
            slug
          }
        }
      }
      posts: allWpPost {
        edges {
          node {
            slug
            categories {
              nodes {
                slug
              }
            }
          }
        }
      }
    }
  `)

  const singlePostTemplate = require.resolve(
    `./src/templates/single-post-template.js`
  )
  const categoryTemplate = require.resolve(
    `./src/templates/category-template.js`
  )

  result.data.posts.edges.forEach(post => {
    createPage({
      path: `${post.node.categories.nodes[0].slug}/${post.node.slug}`,
      component: singlePostTemplate,
      context: { slug: post.node.slug },
    })
  })

  result.data.categories.edges.forEach(category => {
    createPage({
      path: `category/${category.node.slug}`,
      component: categoryTemplate,
      context: { slug: category.node.slug },
    })
  })
}
