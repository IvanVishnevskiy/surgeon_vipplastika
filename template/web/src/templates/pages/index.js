import React from "react";

import Surgeries from '../../components/surgeries'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import Layout from "../../containers/layout";
import SEO from "../../components/seo";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Review from '../../components/review'

import * as styles from "../../styles/pages/index.module.css";
import * as sharedStyles from "../../styles/shared.module.css";

const IndexPageTemplate = props => {
    const { data, isEn = false } = props;
    const { site } = data
    const prefix = isEn ? '_en' : ''
    const surgeryTypes = data.surgeryTypes.nodes
    const reviews = data.reviews.nodes
    const models = data.modelPhotos.nodes
  
    const width = typeof window === 'undefined' ? 1920 : document.body.clientWidth
    return (
      <Layout isEn={isEn}>
        <SEO title={site.title} description={site.description} keywords={site.keywords} />
        <section className={styles.promo}>
          <StaticImage objectFit="contain" className={styles.promoImage} src="../../media/Victoria.png" alt="Виктория Пластический Хирург" />
          <div className={styles.padding}>
            <p className={styles.bluetext}>
              { isEn? 'Plastic surgeon' : 'Пластический хирург' }
            </p>
            <h1 className={styles.name}>{isEn ? site.surgeonNameEn : site.surgeonName}</h1>
            <p className={styles.desc}>
              { isEn ? 'Plastic surgeon; Candidate of Medical Sciences; Senior Researcher, Department of Oral and Maxillofacial Surgery, GBUZ MO MONIKI n.a. M. F. Vladimirsky; oncologist, maxillofacial surgeon at the Skin Clinic Medical Center; plastic surgeon of the medical center "Clinic Hartman"; Member of the Russian Society of Plastic, Reconstructive and Aesthetic Surgeons and Cosmetologists; member of the European Association of Cranio-Maxillofacial Surgeons; author of more than 80 publications and 9 invention patents. Repeated participant of international conferences, symposiums on plastic surgery and cosmetology, maxillofacial surgery, oncology. Work experience since 2004.' :
                'Пластический хирург; кандидат медицинских наук; старший научный сотрудник отделения челюстно-лицевой хирургии ГБУЗ МО МОНИКИ им. М. Ф. Владимирского; врач-онколог, челюстно-лицевой хирург медицинского центра «Клиника кожи»; пластический хирург медицинского центра «Клиника Хартман»; Член Российского общества пластических, реконструктивных и эстетических хирургов и косметологов; член европейской ассоциации черепно-челюстно-лицевых хирургов; автор более 80 печатных работ и 9 патентов на изобретение. Неоднократный участник международных конференций, симпозиумов по пластической хирургии и косметологии, челюстно-лицевой хирургии, онкологии. Стаж работы с 2004 года.'
              }
            </p>
            <div className={styles.buttons}>
              <button className="filled">{ isEn ? 'Make an appoinment' : 'Записаться'}</button>
              <Link to={ isEn ? '/en/about' : '/about'}><button>{ isEn ? 'About me' : 'Обо мне'}</button></Link>
            </div>
          </div>
          <div className={styles.numbersDecor}>
            <div className={styles.numbers}>
              <div className={styles.numberPart}>
                <h3>18</h3>
                <p>{isEn ? 'years of practice' : 'лет практики'}</p>
              </div>
              <div className={styles.numberPart}>
                <h3>5000+</h3>
                <p>{ isEn ? 'happy clients' : 'счастливых клиентов'}</p>
              </div>
              <div className={styles.numberPart}>
                <h3>9</h3>
                <p>{ isEn ? 'development patents' : 'патентов на изобретение'}</p>
              </div>
              <div className={styles.numberPart}>
                <h3>80+</h3>
                <p>{ isEn ? 'printed works' : 'печатных работ'}</p>
              </div>
            </div>
          </div>
  
          <div className={styles.decor}>
            <h2>Plastic Surgeon</h2>
          </div>
        </section>
        <div className={styles.surgeriesFooter}>
          <h2 className={sharedStyles.sectionTitle}>{ isEn ? 'Surgeries' : 'Операции' }</h2>
        </div>
        <Surgeries isEn={isEn} noBackground={true} surgeryTypes={surgeryTypes} id="indexSurgeries" />
        <div className={styles.surgeriesFooter}>
          <Link className="link-no-decoration" to={ isEn ? '/en/surgeries' : '/surgeries' }><button>{ isEn ? 'See all' : 'Смотреть все' }</button></Link>
          <h2 className={sharedStyles.sectionTitle}>{ isEn ? 'Reviews' : 'Отзывы' }</h2>
        </div>
        <section className={styles.reviews}>
          <div className={styles.reviewsBackground}>
            <StaticImage src="../../media/BackgroundShift.svg" objectFit="contain" alt="Background transition" className={styles.reviewsBackgroundStaticImage} />
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
              reviews.map((data, i) => 
                <SwiperSlide key={i}>
                  <Review name={data[prefix + 'name']} messages={data[prefix + 'reviewMessages']} stars={data[prefix + 'reviewStars']} />
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
                const { asset, alt, altEn = 'undefined' } = photo
                return <SwiperSlide key={i}>
                    <GatsbyImage image={asset.gatsbyImageData} alt={isEn ? altEn : alt} />
                  </SwiperSlide>
                }
              )
            }
          </Swiper>
        </section>
      </Layout>
    );
  };
  
  export default IndexPageTemplate;