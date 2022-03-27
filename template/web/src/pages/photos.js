import React from "react";
import { graphql, Link } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

import { GatsbyImage } from "gatsby-plugin-image";

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

import * as styles from "../styles/pages/photos.module.css";
import * as sharedStyles from "../styles/shared.module.css";

const IndexPage = props => {
  const { data, errors } = props;

  const { photoCategories } = data
  const { nodes } = photoCategories

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
      <div className={styles.main}>
        {
          nodes.map(node => {
            const { background, desc, link, title, _id } = node
            const { alt, asset } = background
            const { gatsbyImageData } = asset

            return (
              <Link key={_id} className="link-no-decoration" to={link}>
                <div className={styles.photo}>
                  <GatsbyImage className={styles.photoBackground} objectFit="cover" image={gatsbyImageData} alt={alt} />
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
    </Layout>
  );
};

export default IndexPage;
