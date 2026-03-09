import styles from "./Hero.module.scss";
import heroImg from "../../assets/hero/hero-lab.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            Решения для
            <br />
            <span className={styles.accentText}>
              медицинских
              <br />
              лабораторий
            </span>
          </h1>
          <p className={styles.subtitle}>
            Российский производитель и поставщик лабораторной продукции. От
            реагентов до оснащения лаборатории под ключ.
          </p>
          <div className={styles.actions}>
            <button className={styles.primaryButton}>Перейти в каталог</button>
            <button className={styles.secondaryButton}>
              Узнать о компании
            </button>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.heroVisual}>
            <img
              src={heroImg}
              alt="Современная медицинская лаборатория"
              className={styles.image}
            />
            <div className={styles.heroCard}>
              <div className={styles.statBlock}>
                <span className={styles.statNumber}>25+</span>
                <span className={styles.statLabel}>лет на рынке</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statBlock}>
                <span className={styles.statNumber}>1000+</span>
                <span className={styles.statLabel}>лабораторий</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
