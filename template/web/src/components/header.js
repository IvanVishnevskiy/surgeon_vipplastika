import React from "react";
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from "gatsby";

import * as styles from "./header.module.css";

const Header = ({ data }) => {
  return <div className={styles.root}>
    <div className={styles.part}>
      <div>
        <GatsbyImage objectFit="contain" className={styles.logo} image={data.logo.asset.gatsbyImageData} alt={data.logo.alt || "Logo"} />
      </div>
      <div>
        <a className={styles.phone} href="tel:+79263951759">+7 (926) 395-17-59</a>
      </div>
    </div>
    <div className={styles.part}>
      <ul className={styles.part + ' ' + styles.menu}>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/surgeries">Операции</Link></li>
        <li><Link to="/photos">Фото</Link></li>
        <li><Link to="/contacts">Контакты</Link></li>
      </ul>
      <div className={styles.part + ' ' + styles.rightBottom}>
        <a href="https://instagram.com" className="link-no-decoration" rel="noreferrer noopener" target="_blank">
          {/* <GatsbyImage image={data.instagramIcon.asset.gatsbyImageData} alt={data.instagramIcon.alt} /> */}
        </a>
        <button className="filled">Записаться</button>
      </div>
    </div>
  </div>
}

export default Header;
