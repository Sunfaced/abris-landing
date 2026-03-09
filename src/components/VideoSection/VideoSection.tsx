import styles from "./VideoSection.module.scss";
import video from "../../assets/video/video-picture.png";

const VideoSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Видеоматериалы</h2>

        <div className={styles.previewWrapper}>
          <div className={styles.preview}>
            <img
              src={video}
              alt="Демонстрация работы оборудования"
              className={styles.image}
            />
            <div className={styles.playCircle}>
              <span className={styles.playIcon}>▶</span>
            </div>
          </div>
        </div>

        <div className={styles.textBlock}>
          <h3 className={styles.subtitle}>
            Практическое применение реагентов Абрис+
          </h3>
          <p className={styles.description}>
            Краткая демонстрация подготовки и окраски препаратов в лабораторных
            условиях с использованием линейки красителей «Абрис+».
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
