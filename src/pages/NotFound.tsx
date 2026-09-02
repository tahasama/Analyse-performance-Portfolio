import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Renders inside Layout (header + footer already present), so it sizes to a
// comfortable band rather than a full screen of its own.
export default function NotFound() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-24 pb-32">
      <p className="section-label mb-4">Error 404</p>
      <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl text-foreground mb-6 leading-[1.1] max-w-3xl">
        This page doesn&rsquo;t exist
      </h1>
      <p className="text-muted-foreground max-w-2xl leading-relaxed mb-8">
        The address you followed doesn&rsquo;t match anything on this site. It may
        have been moved, or the link may be incomplete.
      </p>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <Link
          to="/"
          className="text-sm font-medium text-accent hover:underline hover:underline-offset-2 inline-flex items-center gap-1.5"
        >
          Back to the six systems <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link
          to="/architecture"
          className="text-sm font-medium text-accent hover:underline hover:underline-offset-2 inline-flex items-center gap-1.5"
        >
          See the architecture <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
