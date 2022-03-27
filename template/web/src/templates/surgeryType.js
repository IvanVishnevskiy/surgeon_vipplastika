import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SurgeryType from "../components/surgeryType";
import SEO from "../components/seo";
import Layout from "../containers/layout";

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
  const { data, errors } = props;
  let surgery = data && data.surgeryType;
  surgery.photos = data.photos
  
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {surgery && <SEO title={surgery.title || "Untitled"} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {surgery && <SurgeryType {...surgery} />}
    </Layout>
  );
};

export default surgeryType;
