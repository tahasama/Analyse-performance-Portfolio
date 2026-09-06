import type { ReactNode } from "react";
import usePageMeta from "@/hooks/usePageMeta";

interface PageMetaProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function PageMeta({ title, description, children }: PageMetaProps) {
  usePageMeta(title, description);
  return children;
}
