// create single post & category page templates
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      categories: allWpPost {
        group(field: categories___nodes___name) {
          fieldValue
          edges {
            node {
              slug
              categories {
                nodes {
                  slug
                }
              }
              title
              date(formatString: "MM . DD . YYYY")
            }
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

  result.data.categories.group.forEach(category => {
    console.log(category)
    const str = category.fieldValue
    const slug = str.replace(/\s+/g, "-").toLowerCase()
    paginate({
      createPage,
      items: category.edges,
      itemsPerPage: 6,
      pathPrefix: `category/${slug}`,
      component: categoryTemplate,
      context: { slug: slug, category: category.fieldValue },
    })
  })
}
