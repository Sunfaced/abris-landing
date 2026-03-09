import Hero from "../components/Hero/Hero";
import CategoriesSection from "../components/CategoriesSection/CategoriesSection";
import KnowledgeSection from "../components/KnowledgeSection/KnowledgeSection";
import PartnersSection from "../components/PartnersSection/PartnersSection";
import VideoSection from "../components/VideoSection/VideoSection";
import FaqSection from "../components/FaqSection/FaqSection";

const HomePage = () => {
  return (
    <>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <CategoriesSection />
        </section>
        <section>
          <KnowledgeSection />
        </section>
        <section>
          <PartnersSection />
        </section>
        <section>
          <VideoSection />
        </section>
        <section>
          <FaqSection />
        </section>
      </main>
    </>
  );
};

export default HomePage;
