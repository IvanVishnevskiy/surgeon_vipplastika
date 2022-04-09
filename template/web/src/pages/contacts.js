import React from "react";
import Layout from "../containers/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";


import * as styles from "../styles/pages/contacts.module.css";
import * as sharedStyles from "../styles/shared.module.css";

export const query = graphql`
  query ContactsPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      surgeonName
      title
      description
      keywords
    }
  }
`;

const IndexPage = props => {
  const { data } = props;

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
        <h2 className={sharedStyles.sectionTitle}>Контакты</h2>
      </div>
      <div className={styles.main}>
        <div className={styles.sectionItem}>
          <h4 className={styles.sectionTitle}>
            Адреса клиник
          </h4>
          <div className={styles.sectionItemPart}>
            <StaticImage objectFit="contain" className={styles.sectionIcon} src="../media/map.svg" />
            <div className={styles.sectionPartRight}>
              <div className={styles.sectionItemDesc}>
                <h5>Хартман Клиник</h5>
                <p>Москва, Мясницкая ул., 19</p>
              </div>
              <div className={styles.sectionItemDesc}>
                <p>Сайт клиники: <a rel="noopener noreferrer" target="_blank" href="https://hmclinic.ru/">https://hmclinic.ru/</a></p>
                <p>Телефон: <a href="tel:+74951197211">+7 (495) 119-72-11</a></p>
              </div>
            </div>
          </div>
          <div className={styles.sectionItemPart}>
            <StaticImage objectFit="contain" className={styles.sectionIcon} src="../media/map.svg" />
            <div className={styles.sectionPartRight}>
              <div className={styles.sectionItemDesc}>
                <h5>Клиника кожи</h5>
                <p>Москва, Банный пер., 2с2</p>
              </div>
              <div className={styles.sectionItemDesc}>
                <p>Сайт клиники: <a rel="noopener noreferrer" target="_blank" href="https://klinika-kozhi-v-bannom-pereulke.ru">https://klinika-kozhi-v-bannom-pereulke.ru/</a></p>
                <p>Телефон: <a href="tel:+79045679758">+7 (904) 567-97-58</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionItem}>
          <h4 className={styles.sectionTitle}>
            Мои контакты для записи
          </h4>
          <div className={styles.sectionItemPart}>
            <StaticImage objectFit="contain" className={styles.sectionIcon} src="../media/email.svg" />
            <div className={styles.sectionPartRight}>
              <div className={styles.sectionItemDesc}>
                <h5><a href="mailto:pokahz@mail.ru">pokahz@mail.ru</a></h5>
              </div>
            </div>
          </div>
          <div className={styles.sectionItemPart}>
            <StaticImage objectFit="contain" className={styles.sectionIcon} src="../media/social.svg" />
            <div className={styles.sectionPartRight}>
              <div className={styles.sectionItemDesc}>
                <h5><a href="tel:+79263951759">+7 (926) 395-17-59</a></h5>
                <p>WhatsApp или Telegram</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionItem}>
          <h4 className={styles.sectionTitle}>
            Социальные сети
          </h4>
          <div className={styles.sectionItemPart}>
            <StaticImage objectFit="contain" className={styles.sectionIcon} src="../media/telegram.svg" />
            <div className={styles.sectionPartRight}>
              <div className={styles.sectionItemDesc}>
                <h5><a rel="noopener noreferrer" target="_blank" href="https://t.me/victoriaplastic">https://t.me/victoriaplastic</a></h5>
              </div>
            </div>
          </div>
          <div className={styles.sectionItemPart}>
            <StaticImage objectFit="contain" className={styles.sectionIcon} src="../media/vk.svg" />
            <div className={styles.sectionPartRight}>
              <div className={styles.sectionItemDesc}>
                <h5><a rel="noopener noreferrer" target="_blank" href="https://vk.com/victoriaandreeva_plastic">https://vk.com/victoriaandreeva_plastic</a></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={sharedStyles.transitionMargin}>
        <StaticImage src="../media/BackgroundShift.svg" objectFit="contain" alt="Background transition" className={sharedStyles.backgroundTransition} />
      </div>
    </Layout>
  );
};

export default IndexPage;
