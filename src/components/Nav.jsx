import { useEffect, useState } from "react";

const links = [
  { href: "#story", label: "Story" },
  { href: "#products", label: "Products" },
  { href: "#capabilities", label: "Process" },
  { href: "#contact", label: "Contact" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#story");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveHref(`#${visibleEntries[0].target.id}`);
        }
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setIsScrolled(false);
        return;
      }

      setIsScrolled(window.scrollY > 32);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      } else {
        setIsScrolled(false);
      }

      handleScroll();
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((current) => !current);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <nav className={`site-nav ${isScrolled ? "is-scrolled" : ""}`} aria-label="Primary">
        <a className="site-brand" href="#top" aria-label="Lucky Studio home">
          <img src="/logo2.png" alt="Lucky Studio logo" className="site-brand__logo" />
        </a>

        <button
          type="button"
          className={`site-nav__toggle ${isOpen ? "is-open" : ""}`}
          aria-expanded={isOpen}
          aria-controls="primary-menu"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`site-nav__links ${isOpen ? "is-open" : ""}`} id="primary-menu">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`site-nav__link ${activeHref === link.href ? "is-active" : ""}`}
              aria-current={activeHref === link.href ? "page" : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
