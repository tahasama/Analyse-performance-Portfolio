import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { to: "/architecture", label: "Architecture" },
  { to: "/research", label: "Research" },
  { to: "/experience", label: "Experience" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-lg text-foreground tracking-wide">
          Maatof Taha
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeClassName="text-foreground"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/experience#contact">Contact</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetHeader>
              <SheetTitle className="text-left font-serif">Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <SheetClose asChild key={item.to}>
                  <NavLink
                    to={item.to}
                    className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                    activeClassName="text-foreground"
                  >
                    {item.label}
                  </NavLink>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/experience#contact">Contact</Link>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
