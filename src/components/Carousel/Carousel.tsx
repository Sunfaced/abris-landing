import type { FC } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carousel.module.scss";

import { useEffect, useState } from "react";

import { carouselSlides } from "../../data/carousel";

const slides = carouselSlides;

const Carousel: FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 60,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <button
          type="button"
          className={`${styles.button} ${styles.buttonPrev}`}
          onClick={scrollPrev}
        >
          ‹
        </button>
        <button
          type="button"
          className={`${styles.button} ${styles.buttonNext}`}
          onClick={scrollNext}
        >
          ›
        </button>

        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.container}>
            {slides.map((slide, index) => (
              <div key={index} className={styles.slide}>
                <img
                  className={styles.image}
                  src={slide.src}
                  alt={`Слайд ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <aside className={styles.side}>
        <div key={selectedIndex} className={styles.sideContent}>
          <h2 className={styles.title}>{slides[selectedIndex].title}</h2>
          <p className={styles.text}>{slides[selectedIndex].text}</p>
        </div>
      </aside>
    </div>
  );
};

export default Carousel;
