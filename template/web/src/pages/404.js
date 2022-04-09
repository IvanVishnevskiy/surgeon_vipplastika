import React from "react";
import Layout from "../containers/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

export const query = graphql`
  query QueryNotFound {
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

import * as styles from "../styles/pages/photos.module.css";
import * as sharedStyles from "../styles/shared.module.css";

const IndexPage = ({ data }) => {
  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <div className={styles.main}>
        Упс. такой страницы нет.
      </div>
      <div className={sharedStyles.transitionMargin}>
        <StaticImage src="../media/BackgroundShift.svg" style={{ top: '75%' }} objectFit="contain" alt="Background transition" className={sharedStyles.backgroundTransition} />
      </div>
    </Layout>
  );
};

export default IndexPage;
