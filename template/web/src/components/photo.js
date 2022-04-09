import React, { useState } from "react"
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from "./photo.module.css"
import * as photoStyles from '../styles/pages/photos.module.css'
import * as sharedStyles from "../styles/shared.module.css"

import { StaticImage } from "gatsby-plugin-image"

const Photo = props => {
  const { photos = {} } = props
  const { nodes = [] } = photos

  const [imageData, setImageData] = useState(null)

  return (
    <>
      <div className={styles.heading}>
          <h2 className={sharedStyles.sectionTitle}>{ props.title }</h2>
        </div>
      <div className={styles.main}>
        <p>{ props.desc }</p>
        <div className={styles.photos}>
          {
            nodes.length ? nodes.map(node => {
              const { id, photo, title, desc } = node
              const { asset, alt } = photo
              return <div onClick={() => setImageData({ photo: asset.gatsbyImageData, alt, title, desc })} key={id} className={photoStyles.photo}>
                <GatsbyImage className={photoStyles.photoBackground} objectFit="contain" image={asset.gatsbyImageData} alt={alt} />
                <GatsbyImage className={photoStyles.photoBackgroundBlurred} objectFit="cover" image={asset.gatsbyImageData} alt="" />
                <div className={photoStyles.photoDesc}>
                  <h3>{ title }</h3>
                  <p>{ desc }</p>
                </div>
              </div>
            }) : 'Здесь пока что нет фотографий.'
          }
        </div>
        {
          (imageData && typeof imageData === 'object') ? (<div className={styles.fullscreenPhoto}>
            <GatsbyImage className={photoStyles.photoBackground} objectFit="contain" image={imageData.photo} alt={imageData.alt} />
            {
              (imageData.title || imageData.desc) ? <div className={styles.fullscreenDesc}>
              <h3>{ imageData.title }</h3>
              <p>{ imageData.desc }</p>
            </div> : ''
            }
            <StaticImage src="../media/add.svg" className={styles.exitIcon} onClick={() => setImageData()} />
          </div>) : ''
        }
        <div className={sharedStyles.transitionMargin}>
            <StaticImage src="../media/BackgroundShift.svg" objectFit="contain" alt="Background transition" className={sharedStyles.backgroundTransition} />
        </div>
      </div>
    </>
  )
}

export default Photo