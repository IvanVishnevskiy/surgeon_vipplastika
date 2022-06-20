import React from "react"
import { Link } from 'gatsby'
import { useRive, useStateMachineInput, Layout, Fit, Alignment } from 'rive-react'

import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./card.module.css"



const Card = ({ riveSrc, title, desc, link, isEn }) => {
  console.log(title)
  let RiveComponent, rive, onClickInput

  const stateMachineName = 'Animation State'
  const triggerName = 'Hover'

  if(riveSrc) {
    const riveStuff = useRive({
      src: riveSrc,
      stateMachines: stateMachineName,
      autoplay: true,
      layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center}),
      maxY: 300,
    })

    RiveComponent = riveStuff.RiveComponent
    rive = riveStuff.rive
  
    onClickInput = useStateMachineInput(
      rive,
      stateMachineName,
      triggerName,
    )
  }
  return (
      <Link to={(isEn ? '/en' : '') + link} className={styles.link + ' link-no-decoration'}>
        <div 
        className={styles.main}
        onMouseEnter={() => onClickInput ? onClickInput.fire() : ''}
        onMouseLeave={() => onClickInput ? onClickInput.fire() : ''}
      >
          {/* <StaticImage src="../media/surgery1.svg" className={styles.image} objectFit="contain" alt={title} /> */}
          <div className={styles.riveOrImageHolder}>
          <RiveComponent className={styles.rive} />
          </div>
          <div>
            <h3>{ title }</h3>
            <p>{ desc }</p>
            <div className={styles.glow} />
            <div className={styles.decor} />
            <StaticImage alt="" src="../media/neon border.png" className={styles.decor1} />
            <StaticImage alt="" src="../media/neon border.png" className={styles.decor2} />
          </div>
        </div>
      </Link>
  )
}

export default Card
