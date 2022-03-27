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

import Surgeries from '../components/surgeries'
import Review from '../components/review'

import * as styles from "../styles/pages/index.module.css";
import * as sharedStyles from "../styles/shared.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";


import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      surgeonName
      title
      description
      keywords
    },
    reviews: allSanityReview {
      nodes {
        name
        reviewMessages
        reviewStars
      }
    }
    modelPhotos: allSanityMainPagePhoto {
      nodes {
        photo {
          asset {
            gatsbyImageData
          }
          alt
        }
      }
    }
    surgeryTypes: allSanitySurgeryType(filter: {}, limit: 6) {
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
  const reviews = data.reviews.nodes
  const models = data.modelPhotos.nodes

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
      <section className={styles.promo}>
        <div className={styles.padding}>
          <p className={styles.bluetext}>Пластический хирург</p>
          <h1 className={styles.name}>{site.surgeonName}</h1>
          <p className={styles.desc}>Кандидат медицинских наук, пластический хирург, научный сотрудник отделения челюстно-лицевой хирургии ГБУЗ МО МОНИКИ им. М.Ф.Владимирского, автор более 60 печатных работ и двух патентов на изобретение. Неоднократный участник международных конференций, симпозиумов по пластической хирургии и косметологии, челюстно-лицевой хирургии, онкологии.</p>
          <div className={styles.buttons}>
            <button className="filled">Записаться</button>
            <button>Обо мне</button>
          </div>
        </div>
        <div className={styles.numbersDecor}>
          <div className={styles.numbers}>
            <div className={styles.numberPart}>
              <h3>18</h3>
              <p>лет практики</p>
            </div>
            <div className={styles.numberPart}>
              <h3>2000+</h3>
              <p>счастливых клиентов</p>
            </div>
            <div className={styles.numberPart}>
              <h3>7</h3>
              <p>патентов на изобретение</p>
            </div>
            <div className={styles.numberPart}>
              <h3>60+</h3>
              <p>печатных работ</p>
            </div>
          </div>
        </div>

        <div className={styles.decor}>
          <h2>Plastic Surgeon</h2>
        </div>
      </section>
      <div className={styles.surgeriesFooter}>
        <h2 className={sharedStyles.sectionTitle}>Операции</h2>
      </div>
      <Surgeries surgeryTypes={surgeryTypes} id="indexSurgeries" />
      <div className={styles.surgeriesFooter}>
        <Link className="link-no-decoration" to="/surgeries"><button>Смотреть все</button></Link>
        <h2 className={sharedStyles.sectionTitle}>Отзывы</h2>
      </div>
      <section className={styles.reviews}>
        <div className={styles.reviewsBackground}>
          <StaticImage src="../media/BackgroundShift.svg" objectFit="contain" alt="Background transition" className={styles.reviewsBackgroundStaticImage} />
        </div>
        <Swiper
          slidesPerView={2.9}
          spaceBetween={70}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={styles.swiper}
        >
          {
            reviews.map(({ name, reviewMessages, reviewStars }, i) => 
              <SwiperSlide key={i}>
                <Review name={name} messages={reviewMessages} stars={reviewStars} />
              </SwiperSlide>
            )
          }
        </Swiper>
      </section>
      <section className={styles.models}>
        <Swiper
          slidesPerView={2.3}
          spaceBetween={70}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={styles.swiper}
        >
          {
            models.map(({ photo }, i) => {
              const { asset, alt } = photo
              return <SwiperSlide key={i}>
                  <GatsbyImage image={asset.gatsbyImageData} alt={alt} />
                </SwiperSlide>
              }
            )
          }
        </Swiper>
      </section>
    </Layout>
  );
};

export default IndexPage;
