import * as React from 'react'
import FBLOGO from "../../assets/badges/facebook-badge.png"
import INSTALOGO from "../../assets/badges/instagram-badge.png"
import { Link } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    socialIcon,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>HOME</Link></li>
          <li className={navLinkItem}><Link to="/rugs" className={navLinkText}>RUGS</Link></li>
          <li className={navLinkItem}><Link to="/about" className={navLinkText}>ABOUT</Link></li>
        </ul>
      </nav>

    </div>
  )
}
export default Layout