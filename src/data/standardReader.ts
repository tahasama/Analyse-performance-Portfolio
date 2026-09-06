import standardPage10 from "@/assets/standard-reader/standard-page-010.png";
import standardPage11 from "@/assets/standard-reader/standard-page-011.png";
import standardPage12 from "@/assets/standard-reader/standard-page-012.png";
import standardPage13 from "@/assets/standard-reader/standard-page-013.png";
import standardPage14 from "@/assets/standard-reader/standard-page-014.png";
import type { DocumentReaderPage } from "@/components/project/DocumentReader";

export const standardReaderPages: DocumentReaderPage[] = [
  {
    src: standardPage10,
    pageNumber: 10,
    alt: "Document Management Standard page 10, opening Part 1 Scope, Accountability and Conformance with its at-a-glance requirements",
  },
  {
    src: standardPage11,
    pageNumber: 11,
    alt: "Document Management Standard page 11 covering accountability and the Core and Full levels of conformance",
  },
  {
    src: standardPage12,
    pageNumber: 12,
    alt: "Document Management Standard page 12 defining a conformance assessment statement and how it is produced",
  },
  {
    src: standardPage13,
    pageNumber: 13,
    alt: "Document Management Standard page 13 distinguishing non-conformance from non-compliance and setting the order of precedence",
  },
  {
    src: standardPage14,
    pageNumber: 14,
    alt: "Document Management Standard page 14 covering adoption, transition and published exceptions",
  },
];
