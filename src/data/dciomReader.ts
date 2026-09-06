import page05 from "@/assets/dciom-reader/dciom-page-05.png";
import page06 from "@/assets/dciom-reader/dciom-page-06.png";
import page07 from "@/assets/dciom-reader/dciom-page-07.png";
import page08 from "@/assets/dciom-reader/dciom-page-08.png";
import page09 from "@/assets/dciom-reader/dciom-page-09.png";
import type { DocumentReaderPage } from "@/components/project/DocumentReader";

export const dciomReaderPages: DocumentReaderPage[] = [
  {
    src: page05,
    pageNumber: 5,
    alt: "DCIOM Framework Standard page 5 presenting its Authority and Purpose, framework status, purpose statement, and three-pillar scope",
  },
  {
    src: page06,
    pageNumber: 6,
    alt: "DCIOM Framework Standard page 6 continuing the pillar scope and presenting the framework's official outputs",
  },
  {
    src: page07,
    pageNumber: 7,
    alt: "DCIOM Framework Standard page 7 presenting mandatory action triggers",
  },
  {
    src: page08,
    pageNumber: 8,
    alt: "DCIOM Framework Standard page 8 presenting the framework architecture and philosophy",
  },
  {
    src: page09,
    pageNumber: 9,
    alt: "DCIOM Framework Standard page 9 presenting the capability ladder and foundational principles",
  },
];
