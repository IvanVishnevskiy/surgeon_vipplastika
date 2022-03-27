import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

import Surgeries from '../components/surgeries'
import * as sharedStyles from '../styles/shared.module.css'
import * as styles from '../styles/pages/surgeries.module.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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

  console.log(data)
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

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
