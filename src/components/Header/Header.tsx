import styles from "./Header.module.scss";
import logo from "../../assets/logo/logo.png";
import { NavLink } from "react-router-dom";
const navLinks = [
  { name: "Каталог", href: "/catalog" },
  { name: "О компании", href: "/about" },
  { name: "Поддержка", href: "/support" },
  { name: "Партнёрам", href: "/partners" },
  { name: "Новости", href: "/news" },
  { name: "Контакты", href: "/contacts" },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logoBlock}>
          <NavLink to="/" className={styles.logoLink}>
            <img className={styles.logo} src={logo} alt="Абрис+" />
            <span className={styles.logoSubtitle}>
              Российский производитель для медицинских лабораторий
            </span>
          </NavLink>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name} className={styles.navItem}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.right}>
          <div className={styles.phoneBlock}>
            <a href="tel:88003337324" className={styles.phone}>
              8 800 333-73-24
            </a>
            <span className={styles.phoneNote}>Бесплатно по России</span>
          </div>
          <button className={styles.ctaButton}>Оставить заявку</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
