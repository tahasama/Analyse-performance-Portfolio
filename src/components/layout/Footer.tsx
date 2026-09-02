import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";

const navItems = [
  { to: "/architecture", label: "Architecture" },
  { to: "/standard", label: "Standard" },
  { to: "/research", label: "Research" },
  { to: "/experience", label: "Experience" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <Link to="/" className="font-serif text-lg text-foreground">
            Maatof Taha
          </Link>
          <p className="text-sm text-muted-foreground mt-1">
            Document control, reporting, and governance-oriented systems.
          </p>
        </div>

        {/* Wraps: the link set outgrew a single 375px row once Standard was
            added, and would otherwise push the page into horizontal scroll. */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeClassName="text-foreground"
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/experience#contact"
            className="text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            Contact
          </Link>
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="max-w-5xl mx-auto px-6 py-6 text-xs text-muted-foreground text-center sm:text-left">
          Maatof Taha · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
