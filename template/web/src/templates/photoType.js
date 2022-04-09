import React from "react";
import Layout from "../containers/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import Photo from "../components/photo";

export const query = graphql`
  query photoTypeTemplateQuery($id: String, $title: String) {
    category: sanityPhotoCategory(id: { eq: $id }) {
      title
      desc
    }
    photos: allSanityCategorizedPhotos(
      filter: {categories: {elemMatch: { title: { eq: $title } }}}
    ) {
      nodes {
        id
        title
        desc
        photo {
          asset {
            gatsbyImageData(
              placeholder: BLURRED
            )
          }
          alt
        }
      }
    }
  }
`;

const photoType = props => {
  const { data, errors } = props;
  const { category, photos } = data
  const passProps = { ...category, photos }

  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {<SEO title={category.title || "Untitled"} />}
      {<Photo {...passProps} />}
    </Layout>
  );
};

export default photoType;
