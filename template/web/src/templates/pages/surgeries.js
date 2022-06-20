
import React from "react"
import Layout from "../../containers/layout";
import SEO from "../../components/seo";
import Surgeries from '../../components/surgeries'

import * as sharedStyles from '../../styles/shared.module.css'
import * as styles from '../../styles/pages/surgeries.module.css'

const SurgeriesPageTemplate = props => {
    const { data, isEn } = props;
    const surgeryTypes = data.surgeryTypes.nodes
  
    const site = (data || {}).site;
  
    return (
      <Layout isEn={isEn}>
        <SEO title={site.title} description={site.description} keywords={site.keywords} />
        <div className={styles.heading}>
          <h2 className={sharedStyles.sectionTitle}>{ isEn ? 'Surgeries' : 'Операции' }</h2>
        </div>
        <Surgeries isEn={isEn} surgeryTypes={surgeryTypes} />
      </Layout>
    );
  };
  
  export default SurgeriesPageTemplate;