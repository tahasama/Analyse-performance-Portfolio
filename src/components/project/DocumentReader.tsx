import { useId, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface DocumentReaderPage {
  src: string;
  pageNumber: number;
  alt: string;
}

interface DocumentReaderProps {
  title: string;
  pages: DocumentReaderPage[];
}

export default function DocumentReader({ title, pages }: DocumentReaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const readerRef = useRef<HTMLDivElement>(null);
  const readButtonRef = useRef<HTMLButtonElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const pagesId = useId();
  const firstPage = pages[0];

  if (!firstPage) return null;

  const pageRange = `${pages[0].pageNumber}–${pages[pages.length - 1].pageNumber}`;
  const isSinglePage = pages.length === 1;
  const pageLabel = isSinglePage
    ? `Page ${firstPage.pageNumber}`
    : `Pages ${pageRange}`;
  const openLabel = isSinglePage
    ? "Open document sample"
    : `Read the ${pages.length}-page sample`;

  const open = () => {
    setIsOpen(true);
    requestAnimationFrame(() => scrollAreaRef.current?.focus());
  };

  const collapse = () => {
    setIsOpen(false);
    requestAnimationFrame(() => {
      readerRef.current?.scrollIntoView({ block: "center" });
      readButtonRef.current?.focus();
    });
  };

  return (
    <div
      ref={readerRef}
      role="group"
      className="mx-auto w-full max-w-[50rem]"
      aria-label={`${title} sample reader`}
    >
      {!isOpen ? (
        <div className="relative h-[212px] overflow-hidden border border-border bg-[#e3e0d7] sm:h-[425px]">
          <img
            src={firstPage.src}
            alt={firstPage.alt}
            decoding="async"
            className="mx-auto block h-auto w-full max-w-[47rem] bg-white shadow-sm"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent via-[#e3e0d7]/90 to-[#e3e0d7]" />
          <div className="absolute inset-x-0 bottom-6 flex justify-center px-4">
            <button
              ref={readButtonRef}
              type="button"
              aria-expanded="false"
              aria-controls={pagesId}
              onClick={open}
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground shadow-sm transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {openLabel}
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : (
        <div className="overflow-hidden border border-border bg-[#dedbd2] shadow-sm">
          <div className="flex min-h-14 items-center justify-between gap-4 border-b border-border bg-card px-4 py-2.5 sm:px-5">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">{title}</p>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-muted-foreground">
                {pageLabel} · Scroll to read
              </p>
            </div>
            <button
              type="button"
              aria-expanded="true"
              aria-controls={pagesId}
              onClick={collapse}
              className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Collapse
              <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>

          <div
            ref={scrollAreaRef}
            id={pagesId}
            role="region"
            aria-label={`${title}, ${pageLabel.toLowerCase()}`}
            tabIndex={0}
            className="h-[68vh] min-h-[430px] max-h-[740px] overflow-y-auto overscroll-contain px-3 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring sm:px-7 sm:py-7"
          >
            <div className="mx-auto flex max-w-[44rem] flex-col gap-4 sm:gap-6">
              {pages.map((page, index) => (
                <figure key={page.pageNumber} className="bg-white shadow-sm ring-1 ring-black/10">
                  <img
                    src={page.src}
                    alt={page.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="block h-auto w-full"
                  />
                  <figcaption className="sr-only">
                    {title}, page {page.pageNumber}
                  </figcaption>
                </figure>
              ))}
              <p className="py-2 text-center font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted-foreground">
                End of sample
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
