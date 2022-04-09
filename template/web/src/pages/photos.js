import React from "react";
import Layout from "../containers/layout";
import SEO from "../components/seo";
import { graphql, Link } from "gatsby";

import OnlyBrowser from "../components/onlyBrowser";

import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

import * as styles from "../styles/pages/photos.module.css";
import * as sharedStyles from "../styles/shared.module.css";

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

  const { photoCategories } = data
  const { nodes } = photoCategories

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
        {
          nodes.map(node => {
            const { background, desc, link, title, _id } = node
            const { alt, asset = {} } = background
            const { gatsbyImageData } = asset

            return (
              <Link key={_id} className="link-no-decoration" to={link}>
                <div className={styles.photo}>
                  <OnlyBrowser>
                    <GatsbyImage className={styles.photoBackground} objectFit="cover" image={gatsbyImageData} alt={alt} />
                  </OnlyBrowser>
                  <div className={styles.photoDesc}>
                    <h3>{ title }</h3>
                    <p>{ desc }</p>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
      <div className={sharedStyles.transitionMargin}>
        <OnlyBrowser>
          <StaticImage src="../media/BackgroundShift.svg" style={{ top: '75%' }} objectFit="contain" alt="Background transition" className={sharedStyles.backgroundTransition} />
        </OnlyBrowser>
      </div>
    </Layout>
  );
};

export default IndexPage;
