"use client";

import { useState } from "react";
import { Menu, X, Download, BookOpen } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const links = [
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Patents", href: "#patents" },
  { label: "Upcoming", href: "#upcoming" },
  { label: "Fellowships", href: "#research-experience" },
  { label: "Industry", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a
          href="#top"
          className="navbar-brand"
          aria-label="Gokul Ram Kannan — home"
          onClick={handleNavClick}
        >
          <span className="navbar-mark">GRK</span>

          <span className="navbar-name">
            Gokul Ram Kannan
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="navbar-links" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}

          <a
            href={personalInfo.resumePdf}
            target="_blank"
            rel="noreferrer"
            className="button button-sm button-secondary nav-resume-btn"
          >
            <Download size={13} />
            Resume
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="navbar-menu-button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile navigation */}
        {menuOpen && (
          <nav className="navbar-mobile" aria-label="Mobile navigation">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            ))}
            <a
              href={personalInfo.resumePdf}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary mobile-resume-btn"
              onClick={handleNavClick}
            >
              <Download size={14} />
              Download Resume (PDF)
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}