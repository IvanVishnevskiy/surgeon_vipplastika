import React from "react";
import { graphql } from "gatsby";

import Layout from "../containers/layout";
import SEO from "../components/seo";
import PortableText from "@sanity/block-content-to-react"
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "../styles/pages/about.module.css";
import * as sharedStyles from "../styles/shared.module.css";

export const query = graphql`
  query AboutPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      surgeonName
      title
      description
      keywords
    },
    about: sanityAbout {
      _rawText
    }
  }
  
  
  
`;

const IndexPage = props => {
  const { data, errors } = props;

  const site = data?.site;
  const about = data?.about
  console.log(about)
  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <div style={{ display: 'flex' }}>
        <h2 className={sharedStyles.sectionTitle}>Обо мне</h2>
      </div>
      <div className={styles.main}>
        <PortableText blocks={about._rawText} />
      </div>
      <div className={sharedStyles.transitionMargin}>
          <StaticImage src="../media/BackgroundShift.svg" objectFit="contain" alt="Background transition" className={sharedStyles.backgroundTransition} />
      </div>
    </Layout>
  );
};

export default IndexPage;
