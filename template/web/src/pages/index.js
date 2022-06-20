import React from "react"
import IndexPageTemplate from "../templates/pages"
import { graphql } from "gatsby"

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      surgeonName
      title
      description
      keywords
    },
    reviews: allSanityReview {
      nodes {
        name
        reviewMessages
        reviewStars
      }
    }
    modelPhotos: allSanityMainPagePhoto {
      nodes {
        photo {
          asset {
            gatsbyImageData
          }
          alt
        }
      }
    }
    surgeryTypes: allSanitySurgeryType(filter: {}, limit: 6) {
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
    elena: file(base: {eq: "Elena.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
  
  
  
`

const IndexPage = props => {
  const { data } = props;

  return (
    <IndexPageTemplate data={data} />
  )
}

export default IndexPage
