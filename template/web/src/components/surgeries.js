import React from "react";

import Card from '../components/card'

import * as styles from "./surgeries.module.css";

import { Parallax, Background } from 'react-parallax'

import dotsSrc from '../media/dots.svg'

const Surgeries = ({ surgeryTypes }) => 
    <section className={styles.surgeries}>
        <Parallax strength={600} renderLayer={percentage => (
            <>
              <img src={dotsSrc} className={styles.dots + ' ' + styles.dotsDecor1} style={{transform: `translateY(${percentage * 200}px)`}} />
              <img src={dotsSrc} className={styles.dots + ' ' + styles.dotsDecor2} style={{transform: `translateY(${percentage * 350}px)`}} />
              <img src={dotsSrc} className={styles.dots + ' ' + styles.dotsDecor3} style={{transform: `translateY(${percentage * 500}px)`}} />
            </>
        )}>
          <div className={styles.surgeriesHolder}>
            {
              surgeryTypes.map(item => {
                const { title, riveAnimation, link, desc, _id, Icon } = item
                const rivePath = riveAnimation?.asset?.url
                const description = desc[0]?.children[0]?.text
                const src = Icon?.asset?.gatsbyImageData
                return <Card key={_id} src={src} riveSrc={rivePath} title={title} link={link} desc={description} />
              })
            }
          </div>
        </Parallax>
      </section>


export default Surgeries