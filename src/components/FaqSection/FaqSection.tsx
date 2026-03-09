import { useState } from "react";
import styles from "./FaqSection.module.scss";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    id: "1",
    question: "Как оформить заказ на реагенты?",
    answer:
      "Вы можете оставить заявку на сайте, позвонить по бесплатному номеру 8 800 333-73-24 или отправить запрос на email. Менеджер свяжется с вами для уточнения деталей.",
  },
  {
    id: "2",
    question: "Осуществляете ли вы доставку в регионы?",
    answer:
      "Да, мы доставляем продукцию по всей территории РФ с соблюдением температурного режима с помощью проверенных транспортных компаний.",
  },
  {
    id: "3",
    question: "Проводите ли вы обучение работе на оборудовании?",
    answer:
      "Специалисты сервисной службы проводят пусконаладочные работы и обучают персонал лаборатории работе с новым оборудованием и реагентами.",
  },
];

const FaqSection = () => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Вопросы и ответы</h2>

        <div className={styles.list}>
          {faqs.map((item) => {
            const isOpen = item.id === openId;
            return (
              <article
                key={item.id}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              >
                <button
                  type="button"
                  className={styles.question}
                  onClick={() => toggle(item.id)}
                >
                  <span>{item.question}</span>
                  <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className={styles.answer}>{item.answer}</div>
                )}
              </article>
            );
          })}
        </div>

        <div className={styles.actions}>
          <a href="#" className={styles.moreLink}>
            Смотреть все вопросы
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

