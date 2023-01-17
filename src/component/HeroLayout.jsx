import React from "react";
import "../css/hero.css";

export default function HeroLayout() {
  return (
    <section id='showcase'>
      <div className='showcase_content'>
        <h1 className='showcase_content--title'>Doctor Bosey</h1>
        <p className='showcase_content--para'>
          UX Designer / Frontend Engineer
        </p>
        <a href='#' className='showcase_content--link'>
          My Work
        </a>
      </div>
    </section>
  );
}
