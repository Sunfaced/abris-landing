import slide1 from "../assets/slides/slide-1.png";
import slide2 from "../assets/slides/slide-2.png";
import slide3 from "../assets/slides/slide-3.png";

export type CarouselSlide = {
  src: string;
  title: string;
  text: string;
};

export const carouselSlides: CarouselSlide[] = [
  {
    src: slide1,
    title: "Заголовок 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur quia adipisci assumenda nisi, accusantium eaque est doloribus laborum dolorem autem repudiandae facilis, odio porro ipsum tempora inventore magnam non?",
  },
  {
    src: slide2,
    title: "Заголовок 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur quia adipisci assumenda nisi, accusantium eaque est doloribus laborum dolorem autem repudiandae facilis, odio porro ipsum tempora inventore magnam non?",
  },
  {
    src: slide3,
    title: "Заголовок 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur quia adipisci assumenda nisi, accusantium eaque est doloribus laborum dolorem autem repudiandae facilis, odio porro ipsum tempora inventore magnam non?",
  },
];
