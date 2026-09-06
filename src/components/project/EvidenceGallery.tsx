import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { ProjectImage } from "@/data/projects";
import EvidenceDialog from "./EvidenceDialog";

interface EvidenceGalleryProps {
  images: ProjectImage[];
  artifactName: string;
}

export default function EvidenceGallery({
  images,
  artifactName,
}: EvidenceGalleryProps) {
  const [activeImage, setActiveImage] = useState<ProjectImage | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const hasMultiple = images.length > 1;

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div>
      {/* Framed like an exhibited artifact, not a generic screenshot embed --
          same file-tab motif as Home's FileCard, so the object presented
          here reads as the real thing behind that earlier preview. */}
      <div className="relative w-full max-w-[50rem] mx-auto">
        <span
          className="absolute -top-3.5 left-0 z-10 max-w-[calc(100%-1rem)] truncate whitespace-nowrap bg-foreground text-background font-mono text-[0.68rem] tracking-[0.08em] px-2.5 py-1"
          title={`Artifact · ${artifactName}`}
        >
          Artifact · {artifactName}
        </span>
        <Carousel
          setApi={setApi}
          aria-label={`${artifactName} evidence preview`}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem
                key={image.src}
                aria-label={`${index + 1} of ${images.length}: ${image.alt}`}
              >
                <button
                  type="button"
                  onClick={() => setActiveImage(image)}
                  className="surface-light flex h-[300px] w-full items-center justify-center overflow-hidden border-2 border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring sm:h-[420px]"
                  aria-label={`Open full view: ${image.alt}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full cursor-zoom-in object-contain"
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* shadcn's defaults park these 48px outside the carousel, which
              runs off-screen once the frame is full-width -- tuck them inside
              the frame below sm, keep the outside placement from sm up. */}
          {hasMultiple && (
            <>
              <CarouselPrevious className="left-2 h-10 w-10 sm:-left-12" />
              <CarouselNext className="right-2 h-10 w-10 sm:-right-12" />
            </>
          )}
        </Carousel>
      </div>

      {hasMultiple && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Go to image ${index + 1}`}
              aria-current={current === index ? "true" : undefined}
            >
              <span
                className={`block h-2 w-2 rounded-full transition-all motion-reduce:transition-none ${
                  current === index
                    ? "scale-125 bg-accent"
                    : "bg-muted-foreground/50"
                }`}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      )}

      <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto mt-4 leading-relaxed">
        {images[current]?.caption}
      </p>

      <EvidenceDialog
        image={activeImage}
        onOpenChange={(open) => !open && setActiveImage(null)}
      />
    </div>
  );
}
