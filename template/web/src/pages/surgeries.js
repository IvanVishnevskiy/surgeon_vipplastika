import React from "react"
import { graphql } from "gatsby"

import SurgeriesPageTemplate from "../templates/pages/surgeries"

export const query = graphql`
  query SurgeriesQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      surgeonName
      title
      description
      keywords
    },
    surgeryTypes: allSanitySurgeryType {
      nodes {
        title
        Icon {
          asset {
            gatsbyImageData
          }
        }
        riveAnimation {
          asset {
            url
          }
        }
        _id
        link
        desc {
          children {
            text
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const { data } = props
  return (
    <SurgeriesPageTemplate data={data} />
  )
}

export default IndexPage
