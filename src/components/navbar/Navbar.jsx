import React from 'react'
import Links from "./links/Links"
import styles from "./navbar.module.css"
import NavLink from './links/navLink/navLink'
const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div>Logo</div>
      <div>
        <Links/>
      </div>
    </nav>
  )
}

export default Navbar