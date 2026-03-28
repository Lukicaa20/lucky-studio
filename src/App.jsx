import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Capabilities from "./components/Capabilities";
import Story from "./components/Story";
import Contact from "./components/Contact";

const App = () => {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = document.querySelectorAll(".hero-intro__content, .content-section");

    if (!elements.length) {
      return undefined;
    }

    elements.forEach((element) => {
      element.classList.add("reveal-on-scroll");
    });

    if (reduceMotion) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.18,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-shell" id="top">
      <Nav />

      <main>
        <Hero />

        <div className="page-content">
          <Story />

          <Products />

          <Capabilities />

          <Contact />
        </div>
      </main>
    </div>
  );
};

export default App;
