// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import SocialLinks from '../components/social-links'
import ThumbnailGrid from '../components/thumbnail-grid'
// Step 2: Define your component

const importAll = require =>
    require.keys().reduce((acc, next) => {
        acc[next.replace("./", "")] = require(next);
        return acc;
    }, {});

const RUGS = importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/));

const RugsPage = () => {
  return (
      <main>
    <Layout pageTitle="RUGS">
    </Layout>
    <ThumbnailGrid images={RUGS}/>
    <SocialLinks>

    </SocialLinks>
    </main>
  )
}
// Step 3: Export your component
export default RugsPage