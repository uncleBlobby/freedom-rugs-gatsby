import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { mainRugImage } from './rug-image.module.css';

const RugImage = () => {
    return (
        <StaticImage
            className={mainRugImage} 
            src="../../assets/images/22.jpg" 
            alt="Rug" 
            placeholder="blurred"
            layout="fixed" 
        />
    )
}

export default RugImage;