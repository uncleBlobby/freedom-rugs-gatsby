import * as React from 'react';
import FBLOGO from "../../assets/badges/facebook-badge.png"
import INSTALOGO from "../../assets/badges/instagram-badge.png"
import { socialLinks,
         navLinkItem,
         navLinkText,
         socialIcon } from './layout.module.css';

const SocialLinks = () => {
    return (
    <ul className={socialLinks}>
    <li className={navLinkItem}>
        <a href="https://www.facebook.com/freedomrugs/" className={navLinkText}>
            <img className={socialIcon} src={FBLOGO} alt="Facebook" />
        </a>
    </li>
    <li className={navLinkItem}>
        <a href="https://www.instagram.com/freedomrugs/" className={navLinkText}>
        <img className={socialIcon} src={INSTALOGO} alt="Instagram" />
        </a>
    </li>
  </ul>
    )
}

export default SocialLinks;