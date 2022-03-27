const {isFuture,parseISO} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createSurgeryPages (graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanitySurgeryType {
        nodes {
          title
          id
          desc {
            children {
              text
            }
          }
          link
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const surgeryNodes = (result.data.allSanitySurgeryType || {}).nodes || []

  surgeryNodes
    .forEach(node => {
      const id = node.id
      const link = node.link
      const title = node.title
      const path = link
      createPage({
        path,
        component: require.resolve('./src/templates/surgeryType.js'),
        context: { id, title: title.trim() }
      })
    })
}

async function createPhotoPages (graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPhotoCategory {
        nodes {
          link
          title
          id
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const photoNodes = (result.data.allSanityPhotoCategory || {}).nodes || []

  photoNodes
    .forEach(node => {
      const id = node.id
      const link = node.link
      const title = node.title
      const path = link
      createPage({
        path,
        component: require.resolve('./src/templates/photoType.js'),
        context: { id, title: title.trim() }
      })
    })
}

exports.createPages = async ({graphql, actions}) => {
  await createSurgeryPages(graphql, actions)
  await createPhotoPages(graphql, actions)
}
