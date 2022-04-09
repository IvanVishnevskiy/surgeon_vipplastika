import React from "react";
import { graphql } from "gatsby";

import Layout from "../containers/layout";
import SEO from "../components/seo";
import Surgeries from '../components/surgeries'

import * as sharedStyles from '../styles/shared.module.css'
import * as styles from '../styles/pages/surgeries.module.css'

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
  
  
  
`;

const IndexPage = props => {
  const { data, errors } = props;
  const surgeryTypes = data.surgeryTypes.nodes

  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <div className={styles.heading}>
        <h2 className={sharedStyles.sectionTitle}>Операции</h2>
      </div>
      <Surgeries surgeryTypes={surgeryTypes} />
    </Layout>
  );
};

export default IndexPage;
