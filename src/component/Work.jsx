import React, { useState } from "react";
import "../css/work.css";

export default function Work() {
  const [links, setLink] = useState([
    {
      title: "Poster",
      link: "/media/img/portfolio-design-01-1.jpg",
    },
    {
      title: "Paper Bag",
      link: "/media/img/portfolio-creative-02-1.jpg",
    },
    {
      title: "Cloth Bag",
      link: "/media/img/portfolio-creative-01-1.jpg",
    },
    {
      title: "Branding",
      link: "/media/img/portfolio-branding-02-1.jpg",
    },
    {
      title: "Cup",
      link: "/media/img/portfolio-branding-01-1.jpg",
    },
    {
      title: "Book Cover",
      link: "/media/img/portfolio-print-02-1.jpg",
    },
  ]);
  return (
    <section id='work'>
      {links.map((link, index) => (
        <div key={index} className='work_card'>
          <img src={link.link} alt={link.title} />
        </div>
      ))}
    </section>
  );
}
