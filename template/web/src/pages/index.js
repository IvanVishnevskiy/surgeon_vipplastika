import React from "react";

import Layout from "../containers/layout";
import SEO from "../components/seo";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import OnlyBrowser from "../components/onlyBrowser";
import Surgeries from '../components/surgeries'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import Review from '../components/review'

import * as styles from "../styles/pages/index.module.css";
import * as sharedStyles from "../styles/shared.module.css";

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
    elena: file(base: {eq: "Elena.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
  
  
  
`;

const IndexPage = props => {
  const { data } = props;
  const surgeryTypes = data.surgeryTypes.nodes
  const reviews = data.reviews.nodes
  const models = data.modelPhotos.nodes
  const img = data.elena.childImageSharp.gatsbyImageData

  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const width = typeof window === 'undefined' ? 1920 : document.body.clientWidth

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <section className={styles.promo}>
        <GatsbyImage image={img} objectFit="contain" alt="Елена, Пластический хирург" className={styles.promoImage} backgroundColor="rgba(255,255,255,.05)" defaultValue="white" />
        <div className={styles.padding}>
          <p className={styles.bluetext}>Пластический хирург</p>
          <h1 className={styles.name}>{site.surgeonName}</h1>
          <p className={styles.desc}>Пластический хирург; кандидат медицинских наук; старший научный сотрудник отделения челюстно-лицевой хирургии ГБУЗ МО МОНИКИ им. М. Ф. Владимирского; врач-онколог,  челюстно-лицевой хирург медицинского центра  «Клиника кожи»; пластический хирург медицинского центра «Клиника Хартман»; Член Российского общества пластических, реконструктивных и эстетических хирургов и косметологов; член европейской ассоциации черепно-челюстно-лицевых хирургов; автор более 80 печатных работ и 9 патентов на изобретение. 
Неоднократный участник международных конференций, симпозиумов по пластической хирургии и косметологии, челюстно-лицевой хирургии, онкологии. Стаж работы с 2004 года.</p>
          <div className={styles.buttons}>
            <button className="filled">Записаться</button>
            <Link to="/about"><button>Обо мне</button></Link>
          </div>
        </div>
        <div className={styles.numbersDecor}>
          <div className={styles.numbers}>
            <div className={styles.numberPart}>
              <h3>18</h3>
              <p>лет практики</p>
            </div>
            <div className={styles.numberPart}>
              <h3>5000+</h3>
              <p>счастливых клиентов</p>
            </div>
            <div className={styles.numberPart}>
              <h3>9</h3>
              <p>патентов на изобретение</p>
            </div>
            <div className={styles.numberPart}>
              <h3>80+</h3>
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
      <Surgeries noBackground={true} surgeryTypes={surgeryTypes} id="indexSurgeries" />
      <div className={styles.surgeriesFooter}>
        <Link className="link-no-decoration" to="/surgeries"><button>Смотреть все</button></Link>
        <h2 className={sharedStyles.sectionTitle}>Отзывы</h2>
      </div>
      <section className={styles.reviews}>
        <div className={styles.reviewsBackground}>
          <StaticImage src="../media/BackgroundShift.svg" objectFit="contain" alt="Background transition" className={styles.reviewsBackgroundStaticImage} />
        </div>
        <Swiper
          slidesPerView={ width > 1120 ? 2.9 : width < 720 ? 1 : 2 }
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
          slidesPerView={ width > 690 ? 2.3 : width < 590 ? 1 : 1.5 } // 69? Nice!
          spaceBetween={70}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={styles.swiper}
        >
          {
            models.map(({ photo }, i) => {
              const { asset, alt = "" } = photo
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
