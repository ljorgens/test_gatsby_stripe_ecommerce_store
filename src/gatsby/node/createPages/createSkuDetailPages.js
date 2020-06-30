const path = require('path')

const createSkuDetailPages = async ({ graphql, createPage }) => {
  const { errors, data } = await graphql(`
    query skuList {
      allStripeSku(filter: { product: { active: { eq: true } } }) {
        edges {
          node {
            id
            fields {
              slug
            }
            product {
              active
            }
          }
        }
      }
    }
  `)

  if (errors) {
    Promise.reject(errors)
  }

  data.allStripeSku.edges.forEach(({ node: sku }) => {
    createPage({
      path: sku.fields.slug,
      component: path.resolve('src/templates/SkuDetailPage/index.js'),
      context: { skuId: sku.id },
    })
  })
}

module.exports = createSkuDetailPages
