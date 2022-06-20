import React from "react";
import { StaticImage } from 'gatsby-plugin-image'

import * as styles from "./review.module.css";

const Review = ({ name = '', messages = [], stars = 5 }) => {
  const starPath = './icon/star.svg'
  const halfStarPath = './icon/halfStar.svg'
  return <div className={styles.main}>
      <div style={{ width: '100%' }}>
        <header>
            <h2 className={styles.name}>
                { name }
            </h2>
            <span>
              <StaticImage alt="star" src={starPath} />
              <StaticImage alt="star" src={starPath} />
              <StaticImage alt="star" src={starPath} />
              <StaticImage alt="star" src={starPath} />
              {
                stars === 5 ? 
                  <StaticImage alt="star" src={starPath} /> 
                  : stars === 4.5 ? <StaticImage alt="star" src={halfStarPath} />
                  : ''
              }
            </span>
        </header>
        <div>
          { messages.map(msg => <div key={msg} className={styles.message}>{ msg }</div>) }
        </div>
      </div>
  </div>
}

export default Review;
