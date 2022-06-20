import React from "react";
import Header from "./header";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./layout.module.css";

const Layout = ({ children, data, isEn }) => (
  <>
    <Header isEn={isEn} data={data} />
    <div>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerContents}>
        <form className={styles.form}>
          <StaticImage alt="Background" src="../media/backgroundAppointmentBlurred.png" className={styles.formBackgroundImage} />
          <div className={styles.formBackgroundColor} />
          <h2>{ isEn ? 'Create an appointment' : 'Записаться' }</h2>
          <label htmlFor="name">
            <input type="text" placeholder={ isEn ? 'Full name' : 'ФИО' } name="name" />
          </label>
          <label htmlFor="phone">
            <input type="phone" placeholder={ isEn ? 'Phone number' : 'Телефон' } name="phone" />
          </label>
          <label htmlFor="contactway">
            <input type="text" placeholder={ isEn ? 'Contact via' : 'Желаемый вид связи' } />
          </label>
          <label htmlFor="problem">
            <textarea name="problem" placeholder={ isEn ? 'Topic' : 'Описание проблемы' }></textarea>
          </label>
          <button className={'filled ' + styles.button}>{ isEn ? 'Send' : 'Отправить' }</button>
        </form>
        <div className={styles.contacts}>
          <StaticImage src="../media/footerdecorleft.svg" alt="Left decoration" className={styles.decorLeft} objectFit="contain" />
          <StaticImage src="../media/footerdecorright.svg" alt="Right decoration" className={styles.decorRight} objectFit="contain" />
          <h2>{ isEn ? 'Contacts' : 'Контакты' }</h2>
          <div className={styles.contactsList}>
              <div className={styles.contact}>
                <StaticImage src="../media/map.svg" alt={ isEn ? 'Map icon' : 'Карта' } className={styles.contactIcon} objectFit="contain" objectPosition="bottom" />
                <div className={styles.contactItem}>
                  <h4>{ isEn ? 'Hartman Clinic' : 'Хартман Клиник' }</h4>
                  <p>{ isEn ? 'Moscow, Myasnitskaya st., 19' : 'Москва, Мясницкая ул., 19'}</p>
                </div>
                <div className={styles.contactItem}>
                  <h4>{ isEn ? 'Skin Clinic' : 'Клиника Кожи' }</h4>
                  <p>{ isEn ? 'Moscow, Banniy Pereulok, 2c2' : 'Москва, Банный пер., 2с2'}</p>
                </div>
              </div>
              <div className={styles.contact}>
              <StaticImage src="../media/social.svg" alt={ isEn ? 'Get in touch' : 'Связаться' } className={styles.contactIcon} objectFit="contain" objectPosition="bottom" />
                <div className={styles.contactItem}>
                  <h4>+7 (926) 395-17-59</h4>
                  <br />
                  <p>{ isEn ? `I will answer any of your questions in WhatsApp or Telegram` : 'Отвечу на любые интересующие вопросы в WhatsApp или Telegram' }</p>
                </div>
              </div>
              <div className={styles.contact}>
                <StaticImage src="../media/email.svg" alt="E-mail" className={styles.contactIcon} objectFit="contain" objectPosition="bottom" />
                <div className={styles.contactItem}>
                  <h4><a href="mailto:plasticsurgeonavv@gmail.com">plasticsurgeonavv@gmail.com</a></h4>
                </div>
              </div>
          </div>
          <div className={styles.telegram}>
            <StaticImage src="../media/telegram.svg" alt="telegram" className={styles.telegramIcon} objectFit="contain" />
            <a href="https://t.me/victoriaplastic" rel="noopener noreferrer" target="_blank">https://t.me/victoriaplastic</a>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
