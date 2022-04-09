import React from "react";
import Layout from "../containers/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import SurgeryType from "../components/surgeryType";

export const query = graphql`
  query ProjectTemplateQuery($id: String!, $title: String) {
    surgeryType: sanitySurgeryType(id: { eq: $id }) {
      id
      link
      riveAnimationPage {
        asset {
          url
        }
      }
      riveAnimation {
        asset {
          url
        }
      }
      title
      fullDesc {
        children {
          text
          marks
          _type
          _key
        }
        list
        style
      }
      desc {
        children {
          text
          marks
          _type
        }
      }
      pageDesc {
        children {
          text
          marks
          _type
        }
      }
      _rawPageDesc
      _rawFullDesc
      _rawDesc
    }
    photos: allSanitySurgeryPhotos(
      filter: {categories: {elemMatch: { title: { eq: $title } }}}
    ) {
      nodes {
        photo {
          asset {
            gatsbyImageData(
              width: 450
              placeholder: BLURRED
            )
          }
          alt
        }
      }
    }
  }
`;

const surgeryType = props => {
  const { data } = props;
  let surgery = data && data.surgeryType;
  surgery.photos = data.photos
  
  return (
    <Layout>
      <SEO title={surgery.title || "Untitled"} />
      <SurgeryType {...surgery} />
    </Layout>
  );
};

export default surgeryType;
