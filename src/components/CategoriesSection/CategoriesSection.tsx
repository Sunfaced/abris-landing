import styles from "./CategoriesSection.module.scss";
import hema from "../../assets/categories/hematology.png";
import bio from "../../assets/categories/biochemistry.png";
import genClinic from "../../assets/categories/general-clinic.png";
import vet from "../../assets/categories/veterinary.png";
import cito from "../../assets/categories/citology.png";
import equipment from "../../assets/categories/equipment.png";

type Category = {
  id: number;
  name: string;
  description: string;
  src: string;
};

const categories: Category[] = [
  {
    id: 1,
    name: "Гематология",
    description: "Реагенты и контроли для гематологических анализаторов.",
    src: hema,
  },
  {
    id: 2,
    name: "Биохимия",
    description:
      "Наборы для биохимических исследований с высокой стабильностью.",
    src: bio,
  },
  {
    id: 3,
    name: "Цитология",
    description: "Красители и фиксаторы для точной микроскопии.",
    src: genClinic,
  },
  {
    id: 4,
    name: "Общая клиника",
    description: "Расходные материалы для рутинных лабораторных задач.",
    src: vet,
  },
  {
    id: 5,
    name: "Ветеринария",
    description: "Специализированные решения для ветеринарных лабораторий.",
    src: cito,
  },
  {
    id: 6,
    name: "Оборудование",
    description: "Анализаторы и вспомогательная лабораторная техника.",
    src: equipment,
  },
];

const CategoriesSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Основные направления</h2>
            <p className={styles.subtitle}>
              Оснащение лабораторий качественной продукцией для различных
              областей диагностики.
            </p>
          </div>
          <a href="#" className={styles.allLink}>
            <span>Весь каталог</span>
            <span className={styles.arrow}>→</span>
          </a>
        </div>

        <div className={styles.grid}>
          {categories.map((cat) => (
            <article key={cat.id} className={styles.card}>
              <div className={styles.iconCircle}>
                <img className={styles.iconImg} src={cat.src} alt={cat.name} />
              </div>
              <h3 className={styles.cardTitle}>{cat.name}</h3>
              <p className={styles.cardText}>{cat.description}</p>
              <a href="#" className={styles.cardLink}>
                <span>В каталог</span>
                <span className={styles.arrow}>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
