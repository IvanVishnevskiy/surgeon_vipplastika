import React from "react"
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Rive, { useRive, useStateMachineInput, Layout, Fit, Alignment } from 'rive-react'

import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./card.module.css"



const Card = ({ src, riveSrc, title, desc, link }) => {
  console.log(riveSrc)
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
      <Link to={link} className={styles.link + ' link-no-decoration'}>
        <div 
        className={styles.main}
        onMouseEnter={() => onClickInput ? onClickInput.fire() : ''}
        onMouseLeave={() => onClickInput ? onClickInput.fire() : ''}
      >
          {/* <StaticImage src="../media/surgery1.svg" className={styles.image} objectFit="contain" alt={title} /> */}
          <div className={styles.riveOrImageHolder}>
            { 
              RiveComponent ? <RiveComponent
              // ref={riveRef}
              className={styles.rive}
            /> : <GatsbyImage className={styles.image} image={src} alt={title} />
            }
          </div>
          <div className={styles.text}>
            <h3>{ title }</h3>
            <p>{ desc }</p>
            <div className={styles.glow} />
            <div className={styles.decor} />
            <StaticImage src="../media/neon border.png" className={styles.decor1} />
            <StaticImage src="../media/neon border.png" className={styles.decor2} />
          </div>
        </div>
      </Link>
  )
}

export default Card
