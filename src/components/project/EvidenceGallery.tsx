import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { ProjectImage } from "@/data/projects";

interface EvidenceGalleryProps {
  images: ProjectImage[];
  artifactName: string;
}

export default function EvidenceGallery({ images, artifactName }: EvidenceGalleryProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }));
  const hasMultiple = images.length > 1;

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <div>
      {/* Framed like an exhibited artifact, not a generic screenshot embed --
          same file-tab motif as Home's FileCard, so the object presented
          here reads as the real thing behind that earlier preview. */}
      <div className="relative w-full max-w-[50rem] mx-auto">
        <span className="absolute -top-3.5 left-0 z-10 bg-foreground text-background font-mono text-[0.68rem] tracking-[0.08em] px-2.5 py-1">
          Artifact · {artifactName}
        </span>
        <Carousel plugins={hasMultiple ? [autoplay.current] : []} setApi={setApi}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="surface-light border-2 border-border">
                  <img
                    src={image.src}
                    alt={image.alt}
                    onClick={() => setActiveImage(image.src)}
                    className="w-full max-h-[420px] object-contain cursor-zoom-in"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* shadcn's defaults park these 48px outside the carousel, which
              runs off-screen once the frame is full-width -- tuck them inside
              the frame below sm, keep the outside placement from sm up. */}
          {hasMultiple && (
            <>
              <CarouselPrevious className="left-2 sm:-left-12" />
              <CarouselNext className="right-2 sm:-right-12" />
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
              className={`h-2 w-2 rounded-full transition-all ${
                current === index ? "bg-accent scale-125" : "bg-muted-foreground/40"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto mt-4 leading-relaxed">
        {images[current]?.caption}
      </p>

      {activeImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setActiveImage(null)}
        >
          <div className="absolute top-4 right-4">
            <button className="text-white/80 hover:text-white" aria-label="Close">
              <X className="h-6 w-6" />
            </button>
          </div>
          <img src={activeImage} alt="Expanded view" className="max-h-[90vh] max-w-[90vw] object-contain" />
        </div>
      )}
    </div>
  );
}
