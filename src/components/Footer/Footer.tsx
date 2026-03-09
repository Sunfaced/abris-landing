import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.column}>
          <h3 className={styles.logo}>Абрис+</h3>
          <p className={styles.description}>
            Российский производитель и поставщик продукции для медицинских
            лабораторий. Надежные решения для точной диагностики с 1998 года.
          </p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Компания</h4>
          <ul className={styles.links}>
            <li>
              <NavLink to="/catalog" className={styles.link}>
                Каталог
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={styles.link}>
                О компании
              </NavLink>
            </li>
            <li>
              <NavLink to="/partners" className={styles.link}>
                Партнёрам
              </NavLink>
            </li>
            <li>
              <NavLink to="/news" className={styles.link}>
                Новости
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Поддержка</h4>
          <ul className={styles.links}>
            <li>
              <a href="#" className={styles.link}>
                Сервисная служба
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Обучение
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Документы к товару
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Вопросы и ответы
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Контакты</h4>
          <ul className={styles.contacts}>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <span>г. Санкт-Петербург, ул. Лабораторная, д. 12, оф. 45</span>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon}>☎</span>
              <a href="tel:88003337324" className={styles.link}>
                8 800 333-73-24
              </a>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon}>✉</span>
              <a href="mailto:info@abrisplus.ru" className={styles.link}>
                info@abrisplus.ru
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {currentYear} ООО «Абрис+». Все права защищены.</p>
        <div className={styles.bottomLinks}>
          <a href="#" className={styles.link}>
            Политика конфиденциальности
          </a>
          <a href="#" className={styles.link}>
            Условия использования
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
