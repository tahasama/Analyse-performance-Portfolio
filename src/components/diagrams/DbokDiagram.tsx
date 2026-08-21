import { Link } from "react-router-dom";
import { dbok, type DbokChapter } from "@/data/research";

// A nested containment tree, not a flat summary -- the actual DBoK
// hierarchy, not a linear 1-through-6 chain: Information Governance and
// Performance Governance are parallel children of the Enterprise
// Documentation Ecosystem; Records Management and Document Management both
// branch out of Information Governance; Project Information Management
// branches out of Document Management; Document Control branches out of
// Project Information Management. The sub-item "pills" under each chapter
// are parsed straight from that chapter's real gloss in the data --
// nothing invented for the diagram. Performance Governance is the one
// deliberately emphasized node; DCIOM nests under it as a link out to the
// Architecture page rather than re-expanding DCIOM's own six components
// here, which already have their own diagram there.
function pillsFromGloss(gloss: string): string[] {
  return gloss
    .replace(/\.$/, "")
    .split(/,\s*(?:and\s+)?/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function chapterByNumber(number: string): DbokChapter {
  return dbok.chapters.find((c) => c.number === number)!;
}

function ChapterNode({
  chapter,
  accent = false,
}: {
  chapter: DbokChapter;
  accent?: boolean;
}) {
  return (
    <div>
      <div
        className={
          accent
            ? "inline-flex items-center gap-2 border-2 border-accent px-4 py-[0.3071rem]"
            : "inline-flex items-center gap-2 border border-border bg-card px-4 py-[0.3071rem]"
        }
      >
        <span
          className={
            accent
              ? "font-mono text-xs text-accent"
              : "font-mono text-xs text-status-healthy bg-status-healthy/10 border border-status-healthy/30 rounded px-1.5 py-0.5"
          }
        >
          {chapter.number.padStart(2, "0")}
        </span>
        <span className="font-serif text-base text-foreground">
          {chapter.title}
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-[0.4606rem]">
        {pillsFromGloss(chapter.gloss).map((pill) => (
          <span
            key={pill}
            className="rounded-full border border-data/30 bg-data/[0.07] px-3 py-1 text-xs text-muted-foreground sm:whitespace-nowrap"
          >
            {pill}
          </span>
        ))}
      </div>
      {chapter.note && (
        <p className="text-xs text-muted-foreground/80 leading-relaxed mt-2 max-w-md">
          {chapter.note}
        </p>
      )}
    </div>
  );
}

const enterprise = chapterByNumber("1");
const informationGovernance = chapterByNumber("2");
const recordsManagement = chapterByNumber("3");
const documentManagement = chapterByNumber("5");
const projectInformationManagement = chapterByNumber("4");
const documentControl = chapterByNumber("6");
const performanceGovernance = chapterByNumber("7");

const crossCutting = [
  {
    number: "08",
    name: "Standards",
    does: "Say whether a discipline is being done correctly.",
  },
  { number: "09", name: "Technologies", does: "Execute it." },
  { number: "10", name: "Roles", does: "Are the people accountable for it." },
  { number: "11", name: "Maturity", does: "Measures how well it is done." },
];

export default function DbokDiagram() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="border border-accent px-6 py-[0.5375rem] text-center mb-[1.5354rem]">
        <p className="font-mono text-sm uppercase tracking-[0.14em] text-accent">
          Documentation Body of Knowledge
        </p>
      </div>

      {/* The real hierarchy: Information Governance and Performance
          Governance are parallel children of the Enterprise Documentation
          Ecosystem; Records Management and Document Management both branch
          out of Information Governance; Project Information Management
          branches out of Document Management; Document Control branches
          out of Project Information Management. */}
      <div className="border-l-2 border-border pl-3 sm:pl-6">
        <ChapterNode chapter={enterprise} />

        {/* Information Governance branch */}
        <div className="border-l-2 border-border pl-3 sm:pl-6 mt-[0.7676rem]">
          <ChapterNode chapter={informationGovernance} />
          <div className="border-l-2 border-border pl-3 sm:pl-6 mt-[0.7676rem]">
            <ChapterNode chapter={recordsManagement} />
          </div>
          <div className="border-l-2 border-border pl-3 sm:pl-6 mt-[0.7676rem]">
            <ChapterNode chapter={documentManagement} />
            <div className="border-l-2 border-border pl-3 sm:pl-6 mt-[0.7676rem]">
              <ChapterNode chapter={projectInformationManagement} />
              <div className="border-l-2 border-border pl-3 sm:pl-6 mt-[0.7676rem]">
                <ChapterNode chapter={documentControl} />
              </div>
            </div>
          </div>
        </div>

        {/* Performance Governance branch -- parallel to Information
            Governance, not downstream of Document Control */}
        <div className="border-l-2 border-accent pl-3 sm:pl-6 mt-[1.2283rem]">
          <ChapterNode chapter={performanceGovernance} accent />
          <div className="border-l-2 border-border pl-3 sm:pl-6 mt-[0.7676rem]">
            <Link
              to="/architecture"
              className="inline-flex items-center gap-2 border border-border bg-card px-4 py-[0.3613rem] hover:border-accent transition-colors"
            >
              <span className="font-mono text-xs font-semibold text-foreground">
                DCIOM
              </span>
              <span className="text-xs text-muted-foreground">
                documentation-specific performance-governance framework →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Cross-cutting -- applies across the chain and Performance
          Governance both, so it sits outside the tree rather than nested
          in it */}
      <div className="border-t border-dashed border-border mt-[1.5354rem] pt-[1.2283rem]">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground text-center mt-[0.5rem] mb-[1.5rem]">
          Cross-Cutting Dimensions
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-[0.9212rem]">
          {crossCutting.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center text-center gap-1.5"
            >
              <span className="inline-flex items-center gap-1.5">
                <span className="font-mono text-xs text-status-healthy bg-status-healthy/10 border border-status-healthy/30 rounded px-1.5 py-0.5">
                  {item.number}
                </span>
                <span className="font-mono text-sm text-foreground">
                  {item.name}
                </span>
              </span>
              <span className="text-xs text-muted-foreground leading-relaxed">
                {item.does}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
