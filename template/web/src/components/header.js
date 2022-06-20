import React from "react";
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from "gatsby";

import * as styles from "./header.module.css";

const Header = ({ data, isEn }) => {
  const prefix = isEn ? '/en' : ''
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
        <li><Link to={isEn ? '/en' : '/'}>{ isEn ? 'Home' : 'Главная' }</Link></li>
        <li><Link to={ prefix + '/surgeries'}>{ isEn ? 'Surgeries' : 'Операции' }</Link></li>
        <li><Link to={ prefix + '/photos' }>{ isEn ? 'Photos' : 'Фото' }</Link></li>
        <li><Link to={ prefix + '/contacts' }>{ isEn ? 'Contacts' : 'Контакты' }</Link></li>
      </ul>
      <div className={styles.part + ' ' + styles.rightBottom}>
        <a href="https://instagram.com" className="link-no-decoration" rel="noreferrer noopener" target="_blank">
          {/* <GatsbyImage image={data.instagramIcon.asset.gatsbyImageData} alt={data.instagramIcon.alt} /> */}
        </a>
        <button className="filled">{ isEn ? 'Make an appointment' : 'Записаться' }</button>
      </div>
    </div>
  </div>
}

export default Header;
