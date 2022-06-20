import React from "react";
import Layout from "../../containers/layout";
import SEO from "../../components/seo";
import { Link } from "gatsby";

import OnlyBrowser from "../../components/onlyBrowser";

import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

import * as styles from "../../styles/pages/photos.module.css";
import * as sharedStyles from "../../styles/shared.module.css";

const PhotosPageTemplate = props => {
    const { data, isEn } = props;
  
    const { photoCategories } = data
    const { nodes } = photoCategories
  
    const site = (data || {}).site;
  
    return (
      <Layout isEn={isEn}>
        <SEO title={site.title} description={site.description} keywords={site.keywords} />
        <div className={styles.main}>
          {
            nodes.map(node => {
              const { background, desc, link, title, title_en, desc_en, _id } = node
              const { alt, asset = {}, alt_en } = background
              const { gatsbyImageData } = asset
  
              return (
                <Link key={_id} className="link-no-decoration" to={ (isEn ? '/en' : '') + link}>
                  <div className={styles.photo}>
                    <OnlyBrowser>
                      <GatsbyImage className={styles.photoBackground} objectFit="cover" image={gatsbyImageData} alt={isEn ? alt_en : alt} />
                    </OnlyBrowser>
                    <div className={styles.photoDesc}>
                      <h3>{ isEn ? title_en : title }</h3>
                      <p>{ isEn ? desc_en : desc }</p>
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

  export default PhotosPageTemplate