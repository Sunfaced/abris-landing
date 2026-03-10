import styles from "./Header.module.scss";
import logo from "../../assets/logo/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const navLinks = [
  { name: "Каталог", href: "/catalog" },
  { name: "О компании", href: "/about" },
  { name: "Поддержка", href: "/support" },
  { name: "Партнёрам", href: "/partners" },
  { name: "Новости", href: "/news" },
  { name: "Контакты", href: "/contacts" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logoBlock}>
          <NavLink to="/" className={styles.logoLink} onClick={handleLinkClick}>
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

        <button
          type="button"
          className={styles.burgerButton}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </div>

      <div
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.name} className={styles.mobileNavItem}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `${styles.mobileNavLink} ${
                      isActive ? styles.mobileNavLinkActive : ""
                    }`
                  }
                  onClick={handleLinkClick}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.mobileActions}>
          <a href="tel:88003337324" className={styles.mobilePhone}>
            8 800 333-73-24
          </a>
          <span className={styles.mobilePhoneNote}>Бесплатно по России</span>
          <button className={styles.mobileCtaButton}>Оставить заявку</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
