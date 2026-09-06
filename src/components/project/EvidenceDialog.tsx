import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import type { ProjectImage } from "@/data/projects";

interface EvidenceDialogProps {
  image: ProjectImage | null;
  onOpenChange: (open: boolean) => void;
}

export default function EvidenceDialog({
  image,
  onOpenChange,
}: EvidenceDialogProps) {
  return (
    <Dialog open={Boolean(image)} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] w-[calc(100vw-2rem)] max-w-[50rem] overflow-hidden border-0 bg-[#dedbd2] p-0 shadow-lg sm:max-w-[50rem] sm:rounded-none [&>button]:right-3 [&>button]:top-3 [&>button]:z-10 [&>button]:bg-black/75 [&>button]:p-2 [&>button]:text-white [&>button]:opacity-100">
        <DialogTitle className="sr-only">{image?.alt}</DialogTitle>
        <DialogDescription className="sr-only">
          {image?.caption}
        </DialogDescription>
        {image && (
          <div className="max-h-[90vh] overflow-y-auto overscroll-contain px-3 py-4 sm:px-7 sm:py-7">
            <figure className="mx-auto max-w-[44rem] bg-white shadow-sm ring-1 ring-black/10">
              <img
                src={image.src}
                alt={image.alt}
                decoding="async"
                className="block h-auto w-full"
              />
            </figure>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
