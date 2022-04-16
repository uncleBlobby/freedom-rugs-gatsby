import * as React from 'react';
import ImageHolder from '../components/image-holder';
import RugImage from '../components/rug-image';
import Layout from '../components/layout';
import SocialLinks from '../components/social-links';

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="FREEDOM RUGS">
      </Layout>
      <RugImage />
      <SocialLinks>
      </SocialLinks>
    </main>
  )
}

export default IndexPage;