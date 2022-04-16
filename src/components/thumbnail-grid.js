import * as React from 'react';
import { thumbNailGrid, thumbNail } from './thumbnail-grid.module.css';

import image0 from '../../assets/images/0.jpg';
import image1 from "../../assets/images/1.jpg"
import image2 from "../../assets/images/2.jpg"
import image3 from "../../assets/images/3.jpg"
import image4 from "../../assets/images/4.jpg"
import image5 from "../../assets/images/5.jpg"
import image6 from "../../assets/images/6.jpg"
import image7 from "../../assets/images/7.jpg"
import image8 from "../../assets/images/8.jpg"
import image9 from "../../assets/images/9.jpg"
import image11 from "../../assets/images/11.jpg"
import image21 from "../../assets/images/21.jpg"
import image22 from "../../assets/images/22.jpg"
import image25 from "../../assets/images/25.jpg"

const ThumbnailGrid = ({ images }) => {
    console.log(images["0.jpg"].default)
    return (
        <div className={thumbNailGrid}>
            <div className={thumbNail}>
                <img src={image0} alt="rug" />
            </div>
            <div className={thumbNail}><img src={image22} alt="rug" /></div>
            <div className={thumbNail}><img src={image25} alt="rug" /></div>
            <div className={thumbNail}><img src={image21} alt="rug" /></div>
            <div className={thumbNail}><img src={image5} alt="rug" /></div>
            <div className={thumbNail}><img src={image6} alt="rug" /></div>
            <div className={thumbNail}><img src={image11} alt="rug" /></div>
            <div className={thumbNail}><img src={image1} alt="rug" /></div>
            <div className={thumbNail}><img src={image9} alt="rug" /></div>
        </div>
    )
}

export default ThumbnailGrid;