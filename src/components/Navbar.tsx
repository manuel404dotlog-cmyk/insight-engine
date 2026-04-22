import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BrandIcon } from "./BrandIcon";
import { SocialIconButton } from "./Icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 text-brand-orange">
          <BrandIcon />
          <span className="font-heading text-lg font-bold text-foreground">Eonix Studio</span>
        </Link>

        <div className="hidden items-center gap-1 sm:flex">
          <Link
            to="/"
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
              isActive("/") ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            to="/case-study"
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
              isActive("/case-study") ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Case Study
          </Link>
        </div>

        <div className="flex items-center gap-1">
          <SocialIconButton platform="linkedin" />
          <SocialIconButton platform="twitter" />
          <SocialIconButton platform="instagram" />
          <SocialIconButton platform="email" />
        </div>
      </div>
    </nav>
  );
}
