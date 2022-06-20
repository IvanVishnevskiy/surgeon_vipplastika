import React from "react";
import { graphql } from "gatsby";

import PhotosPageTemplate from "../templates/pages/photos";

export const query = graphql`
  query MyQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      surgeonName
      title
      description
      keywords
    },
    photoCategories: allSanityPhotoCategory {
      nodes {
        desc
        title
        background {
          alt
          asset {
            gatsbyImageData
          }
        }
        link
        _id
      }
    }
  }  
`;

const IndexPage = props => {
  const { data } = props;

  return <PhotosPageTemplate data={data} />
};

export default IndexPage;
