"use client";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
const Links = () => {
  const [openMenu, setOpenMenu] = useState(false);

  //TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink key={link.title} item={link} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink item={{ title: "Login", path: "/login" }} />
          </>
        )}
      </div>
      <button className={styles.menuButton} onClick={() => setOpenMenu((prev)=>!prev)}>Menu</button>
      {openMenu && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink key={link.title} item={link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
