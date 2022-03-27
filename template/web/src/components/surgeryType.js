import React, { useState } from "react";
import PortableText from "@sanity/block-content-to-react"
import SurgeryTypeText from "./surgeryTypeText";
import Rive, { useRive, useStateMachineInput, Layout, Fit, Alignment } from 'rive-react'

import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from "./surgeryType.module.css"
import * as sharedStyles from "../styles/shared.module.css";

const SurgeryType = props => {
  const [isFullTextOpen, setFullTextOpen] = useState(false)
  console.log(props)
  const toggleFullText = () => setFullTextOpen(!isFullTextOpen)

  let RiveComponent, RiveComponentDecor, rive

  if(props.riveAnimationPage?.asset?.url) {
    const riveDecorStuff = useRive({
      src: props.riveAnimationPage.asset.url,
      autoplay: true,
      layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
    })

    const riveStuff = useRive({
      src: props.riveAnimation.asset.url,
      autoplay: true,
      layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
    })

    RiveComponent = riveStuff.RiveComponent
    RiveComponentDecor = riveDecorStuff.RiveComponent
    rive = riveDecorStuff.rive
  }

  return <section className={styles.main} style={{ overflow: isFullTextOpen ? 'hidden' : 'auto' }}>
    <h1 className={styles.heading}>{ props.title }</h1>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <PortableText
            blocks={props._rawPageDesc}
          />
        </div>
        <div className={styles.headerRight}>
          <RiveComponentDecor />
        </div>
        <div className={styles.headerRightImage}>
          <RiveComponent />
        </div>
      </header>
      <button onClick={toggleFullText}>Узнать больше</button>
      <br />
      <h2 className={sharedStyles.sectionTitle}>Работы</h2>
      <div className={styles.photos}>
        {
          props.photos?.nodes?.length ? props.photos.nodes.map(({ photo }, i) => {
            const { asset, alt } = photo
            return <GatsbyImage key={i} placeholder="blurred" className={styles.image} objectFit="cover" image={asset.gatsbyImageData} alt={alt} />
          }) : <h3 style={{ paddingBottom: 27 }}>Примеры работ скоро появятся</h3>
        }
      </div>
      <SurgeryTypeText isOpen={isFullTextOpen} text={props._rawFullDesc} toggle={toggleFullText} />
    </section>
  }
  
  
  
  export default SurgeryType