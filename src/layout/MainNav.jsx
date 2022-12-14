import React, { useState } from "react";
import AboutMe from "../component/AboutMe";
import Contact from "../component/Contact";
import HeroLayout from "../component/HeroLayout";
import Services from "../component/Services";
import Skills from "../component/Skills";
import Testimonials from "../component/Testimonials";
import Work from "../component/Work";
import "../css/mainnav.css";

export default function MainNav() {
  const [links, setLink] = useState([
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Project", link: "#" },
    { name: "Service", link: "#" },
    { name: "Hire Me", link: "#" },
    { name: "Contact", link: "#" },
  ]);
  const [open, setOpen] = useState(true);

  const hamburger = () => {
    setOpen(!open);
  };

  return (
    <main>
      <header id='header'>
        <nav className={`header_main-nav ${open ? "unclicked" : "clicked"}`}>
          <div className='header_main-nav-hamburger' onClick={hamburger}>
            {[...Array(3)].map((x, i) => (
              <div className={`line line-${i + 1}`} key={i}></div>
            ))}
          </div>
          <ul className='header_main-nav--links'>
            {links.map((link) => (
              <li
                key={link.name}
                className={`header_main-nav-link ${open ? "" : "fade"}`}>
                <a
                  href={link.link}
                  //   target='_blank'
                  rel='noopener noreferrer'
                  className='header_main-nav-link-anchor'>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <HeroLayout />
      <Work />
      <AboutMe />
      <Services />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
