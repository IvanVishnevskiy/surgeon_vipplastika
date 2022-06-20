import React from "react";
import Layout from "../containers/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import Photo from "../components/photo";

export const query = graphql`
  query photoTypeTemplateQuery($id: String, $title: String) {
    category: sanityPhotoCategory(id: { eq: $id }) {
      title
      title_en
      desc
      desc_en
    }
    photos: allSanityCategorizedPhotos(
      filter: {categories: {elemMatch: { title: { eq: $title } }}}
    ) {
      nodes {
        id
        title
        title_en
        desc
        photo {
          asset {
            gatsbyImageData(
              placeholder: BLURRED
            )
          }
          alt
          alt_en
        }
      }
    }
  }
`;

const photoType = props => {
  const { data, errors } = props;
  const { category, photos } = data
  const passProps = { ...category, photos }

  const isEn = window.location.href.includes('/en/')

  return (
    <Layout isEn={isEn}>
      {errors && <SEO title="GraphQL Error" />}
      {<SEO title={category.title || "Untitled"} />}
      {<Photo {...passProps} />}
    </Layout>
  );
};

export default photoType;
