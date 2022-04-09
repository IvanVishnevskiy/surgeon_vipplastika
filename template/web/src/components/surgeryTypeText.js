import React from "react";
import PortableText from "@sanity/block-content-to-react"
import { cn } from '../lib/helpers'
import arrow from '../media/arrow.svg'

import * as styles from "./surgeryTypeText.module.css"

const SurgeryTypeText = props => {
  return <section className={cn(styles.main, props.isOpen && styles.opened)}>
      <img onClick={props.toggle} src={arrow} alt="Назад" />
      <PortableText
        blocks={props.text}
      />
    </section>
  }
  
  
  
  export default SurgeryTypeText