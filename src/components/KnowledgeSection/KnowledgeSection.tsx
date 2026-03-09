import styles from "./KnowledgeSection.module.scss";

const KnowledgeSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Полезные материалы</h2>

        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <div className={styles.iconPrimary}>📘</div>
              <h3 className={styles.columnTitle}>Копилка знаний</h3>
            </div>

            <div className={styles.cardList}>
              {[1, 2].map((i) => (
                <article key={i} className={styles.card}>
                  <h4 className={styles.cardTitle}>
                    Руководство по окраске мазков крови
                  </h4>
                  <p className={styles.cardText}>
                    Практические рекомендации по использованию
                    фиксаторов-красителей в рутинной практике.
                  </p>
                </article>
              ))}
            </div>

            <div className={styles.actions}>
              <a href="#" className={styles.link}>
                Перейти в копилку знаний
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <div className={styles.iconSecondary}>📄</div>
              <h3 className={styles.columnTitle}>Статьи</h3>
            </div>

            <div className={styles.cardList}>
              {[1, 2].map((i) => (
                <article key={i} className={styles.card}>
                  <h4 className={styles.cardTitle}>
                    Цитохимические исследования в современной лаборатории
                  </h4>
                  <p className={styles.cardText}>
                    Обзор современных методов и реагентов для цитохимии,
                    повышающих точность диагноза.
                  </p>
                  <span className={styles.smallLink}>Читать статью</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;

