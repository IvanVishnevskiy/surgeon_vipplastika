import React from "react";
import { Parallax } from 'react-parallax'
import dotsSrc from '../media/dots.svg'
import Card from '../components/card'
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./surgeries.module.css";
import * as sharedStyles from '../styles/shared.module.css'

const Surgeries = ({ surgeryTypes, noBackground }) => 
    <section className={styles.surgeries}>
      <Parallax strength={600} renderLayer={percentage => (
        <>
          <img alt="Задний фон" src={dotsSrc} className={styles.dots + ' ' + styles.dotsDecor1} style={{transform: `translateY(${percentage * 200}px)`}} />
          <img alt="Задний фон" src={dotsSrc} className={styles.dots + ' ' + styles.dotsDecor2} style={{transform: `translateY(${150 + percentage * 150}px)`}} />
          <img alt="Задний фон" src={dotsSrc} className={styles.dots + ' ' + styles.dotsDecor3} style={{transform: `translateY(${percentage * 400}px)`}} />
        </>
      )} />
        
      <div className={styles.surgeriesHolder}>
        {
          typeof window === 'undefined' ? '' : surgeryTypes.map(item => {
            const { title, riveAnimation, link, desc, _id, Icon } = item
            const rivePath = riveAnimation?.asset?.url
            const description = desc[0]?.children[0]?.text
            const src = Icon?.asset?.gatsbyImageData
            return <Card key={_id} src={src} riveSrc={rivePath} title={title} link={link} desc={description} />
          })
        }
      </div>
        
      {
        noBackground ? '' : <div className={sharedStyles.transitionMargin}>
          <StaticImage src="../media/BackgroundShift.svg" objectFit="contain" alt="Background transition" className={sharedStyles.backgroundTransition} />
        </div>
      }
       
    </section>


export default Surgeries