import { Mail } from "lucide-react";
import { experience } from "@/data/experience";
import { Button } from "@/components/ui/button";

export default function ExperiencePage() {
  const { positioningStatement, summary, roles, education, skills, contact } =
    experience;

  return (
    <div>
      {/* Dark -- hero, same treatment as Home/Architecture/Research: eyebrow,
          large h1, italic one-line quote, supporting paragraph. */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <p className="section-label mb-4 animate-fade-in">Experience</p>
        <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6 leading-[1.1] max-w-3xl animate-fade-up">
          Document Control, Practiced and Built
        </h1>
        <p
          className="font-serif italic text-lg md:text-xl text-foreground/80 max-w-2xl mb-4 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          &ldquo;{positioningStatement}&rdquo;
        </p>
        <p
          className="text-muted-foreground max-w-2xl leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          {summary}
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <p className="section-label mb-6">Roles</p>
        <div className="relative pl-8">
          <div
            className="absolute left-0 top-1 bottom-1 w-px bg-border"
            aria-hidden="true"
          />
          <div className="space-y-12">
            {roles.map((role) => (
              <div
                key={`${role.organization}-${role.period}`}
                className="relative"
              >
                <span className="absolute -left-[35.3px] top-2.5 h-2 w-2 rounded-full bg-accent ring-4 ring-background" />
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-serif text-xl text-foreground">
                    {role.role}
                  </h3>
                  <span className="text-sm text-muted-foreground tabular-nums">
                    {role.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-accent mb-3">
                  {role.organization}
                </p>
                <ul className="space-y-2">
                  {role.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-foreground/85 leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16 border-t border-border pt-12">
        <p className="section-label mb-6">Education</p>
        {education.map((e) => (
          <div key={e.credential}>
            <h3 className="font-serif text-xl text-foreground mb-1">
              {e.credential}
            </h3>
            <p className="text-sm text-foreground/85 mb-1">{e.focus}</p>
            <p className="text-sm text-muted-foreground">{e.institution}</p>
          </div>
        ))}
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16 border-t border-border pt-12">
        <p className="section-label mb-6">Skills</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group) => (
            <div key={group.title}>
              <h3 className="font-serif text-lg text-foreground mb-3">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 pb-24 border-t border-border pt-12 scroll-mt-20"
      >
        <p className="section-label mb-4">Contact</p>
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
          Get in touch
        </h2>
        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href={`mailto:${contact.email}`}>
              <Mail className="h-4 w-4" />
              {contact.email}
            </a>
          </Button>
          {contact.linkedin && (
            <Button asChild size="lg" variant="outline">
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </Button>
          )}
        </div>
        {contact.location && (
          <p className="text-sm text-muted-foreground mt-4">
            {contact.location}
          </p>
        )}
      </section>
    </div>
  );
}
