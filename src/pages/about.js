// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import SocialLinks from '../components/social-links'

import loompic from '../../assets/images/15.jpg'

import { heading2, loomImage, container } from '../components/rug-image.module.css'

// Step 2: Define your component
const AboutPage = () => {
  return (
      <main>
    <Layout pageTitle="ABOUT">
    </Layout>
    <div className={container}>
        <img src={loompic} className={loomImage} alt='Loom'/>     
        <h2 className={heading2}>Freedom Rugs is a family-owned business that brings recycled fabric material back to life,
        <br />
            hand-weaving it into the highest-quality, beautiful rugs.
        <br />
            Find us on Facebook and Instagram.
        </h2>
    </div>
    <SocialLinks />
    </main>
  )
}
// Step 3: Export your component
export default AboutPage