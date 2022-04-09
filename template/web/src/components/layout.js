import React from "react";
import Header from "./header";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./layout.module.css";

const Layout = ({ children, data }) => (
  <>
    <Header data={data} />
    <div>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerContents}>
        <form className={styles.form}>
          <StaticImage alt="Background" src="../media/backgroundAppointmentBlurred.png" className={styles.formBackgroundImage} />
          <div className={styles.formBackgroundColor} />
          <h2>Записаться</h2>
          <label htmlFor="name">
            <input type="text" placeholder="ФИО" name="name" />
          </label>
          <label htmlFor="phone">
            <input type="phone" placeholder="Телефон" name="phone" />
          </label>
          <label htmlFor="contactway">
            <input type="text" placeholder="Желаемый вид связи" />
          </label>
          <label htmlFor="problem">
            <textarea name="problem" placeholder="Описание проблемы"></textarea>
          </label>
          <button className={'filled ' + styles.button}>Отправить</button>
        </form>
        <div className={styles.contacts}>
          <StaticImage src="../media/footerdecorleft.svg" alt="Декорация слева" className={styles.decorLeft} objectFit="contain" />
          <StaticImage src="../media/footerdecorright.svg" alt="Декорация справа" className={styles.decorRight} objectFit="contain" />
          <h2>Контакты</h2>
          <div className={styles.contactsList}>
              <div className={styles.contact}>
                <StaticImage src="../media/map.svg" alt="Карта" className={styles.contactIcon} objectFit="contain" objectPosition="bottom" />
                <div className={styles.contactItem}>
                  <h4>Хартман клиник</h4>
                  <p>Москва, Мясницкая ул., 19</p>
                </div>
                <div className={styles.contactItem}>
                  <h4>Клиника кожи</h4>
                  <p>Москва, Банный пер., 2с2</p>
                </div>
              </div>
              <div className={styles.contact}>
              <StaticImage src="../media/social.svg" alt="Связаться" className={styles.contactIcon} objectFit="contain" objectPosition="bottom" />
                <div className={styles.contactItem}>
                  <h4>+7 (926) 395-17-59</h4>
                  <br />
                  <p>Отвечу на любые интересующие вопросы в WhatsApp или Telegram</p>
                </div>
              </div>
              <div className={styles.contact}>
                <StaticImage src="../media/email.svg" alt="E-mail" className={styles.contactIcon} objectFit="contain" objectPosition="bottom" />
                <div className={styles.contactItem}>
                  <h4><a href="mailto:pokahz@mail.ru">pokahz@mail.ru</a></h4>
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
