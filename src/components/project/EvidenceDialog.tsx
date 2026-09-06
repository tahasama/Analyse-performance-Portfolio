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
      <DialogContent className="w-auto max-w-[94vw] border-0 bg-transparent p-0 shadow-none sm:rounded-none [&>button]:right-2 [&>button]:top-2 [&>button]:bg-black/75 [&>button]:p-2 [&>button]:text-white [&>button]:opacity-100">
        <DialogTitle className="sr-only">{image?.alt}</DialogTitle>
        <DialogDescription className="sr-only">
          {image?.caption}
        </DialogDescription>
        {image && (
          <img
            src={image.src}
            alt={image.alt}
            decoding="async"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
