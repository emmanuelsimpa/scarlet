import React, { useState } from "react";
import "../css/testimonials.css";

export default function Testimonials() {
  const [links, setLink] = useState([
    {
      name: "Remarkable Eye",
      link: "/media/img/testimonials-1.jpg",
      note: "They are always willing to go the extra mile for their customers and make sure that their orders are delivered on time and in perfect condition. I highly recommend your efforts",
      alt: "tony",
    },
    {
      name: "Catchy Designs",
      link: "/media/img/testimonials-2.jpg",
      note: "They are always willing to go the extra mile for their customers and make sure that their orders are delivered on time and in perfect condition. I highly recommend your efforts",
      alt: "natasha",
    },
    {
      name: "Smoking websites",
      link: "/media/img/testimonials-3.jpg",
      note: "They are always willing to go the extra mile for their customers and make sure that their orders are delivered on time and in perfect condition. I highly recommend your efforts",
      alt: "veers",
    },
    {
      name: "Easy to work With",
      link: "/media/img/testimonials-4.jpg",
      note: "They are always willing to go the extra mile for their customers and make sure that their orders are delivered on time and in perfect condition. I highly recommend your efforts",
      alt: "odinson",
    },
  ]);
  return (
    <section id='testimonials'>
      {links.map((items) => (
        <div className='testimonials_card'>
          <div className='testimonials_card--img'>
            <img src={items.link} alt={items.alt} />
          </div>
          <div className='testimonials_card--content'>
            <h3 className='testimonials_card--content_title'>{items.name}</h3>
            <p className='testimonials_card--content_para'>{items.note}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
