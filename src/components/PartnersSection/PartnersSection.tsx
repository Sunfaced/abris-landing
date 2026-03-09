import styles from "./PartnersSection.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import type { FC } from "react";
import { useEffect } from "react";

type Partner = {
  id: number;
  src?: string;
  alt: string;
};

// Автоматически подхватываем все логотипы из assets/partners.
// Если файлов нет, массив будет пустым, и слайдер покажет текстовые заглушки.
const importedLogos = import.meta.glob<string, string, { default: string }>(
  "../../assets/partners/*.{png,jpg,jpeg,svg}",
  {
    eager: true,
  },
);

const logoSources = Object.values(importedLogos).map(
  (mod) => (mod as unknown as { default: string }).default,
);

const partners: Partner[] =
  logoSources.length > 0
    ? logoSources.map((src, index) => ({
        id: index + 1,
        src,
        alt: `Партнёр ${index + 1}`,
      }))
    : [
        { id: 1, alt: "Партнёр 1" },
        { id: 2, alt: "Партнёр 2" },
        { id: 3, alt: "Партнёр 3" },
        { id: 4, alt: "Партнёр 4" },
      ];

const PartnersSection: FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    duration: 60, // более плавное перелистывание
  });

  const scrollPrev = () => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  };

  useEffect(() => {
    if (!emblaApi) return;
    const id = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 3000); // чуть реже, чтобы движение было спокойнее

    return () => window.clearInterval(id);
  }, [emblaApi]);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Наши партнёры</h2>

        <div className={styles.carousel}>
          <div className={styles.viewport} ref={emblaRef}>
            <div className={styles.container}>
              {partners.map((partner) => (
                <div key={partner.id} className={styles.slide}>
                  <div className={styles.partnerCard}>
                    {partner.src ? (
                      <img src={partner.src} alt={partner.alt} />
                    ) : (
                      partner.alt
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
