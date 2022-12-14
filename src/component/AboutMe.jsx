import React from "react";
import "../css/about.css";

export default function AboutMe() {
  return (
    <section id='about-me'>
      <div className='about-me_img'>
        <img src='/media/img/content-img-02.jpg' alt='me' />
      </div>
      <div className='about-me_content'>
        <h2 className='about-me_content--title'>About Me</h2>
        <p className='about-me_content--para'>
          A UX (User Experience) designer is responsible for creating products
          and experiences that are user-friendly and visually appealing. They
          use research, user feedback, and data to design user interfaces,
          create user flows, and develop product prototypes. A UI (User
          Interface) designer is responsible for creating the visuals and look
          and feel of a product. They create visual designs, including logos,
          icons, layouts, and color palettes, and then turn those designs into
          user interfaces that are easy to use and visually appealing.
        </p>
        <a href='#' className='about-me_content--link'>
          Read More
        </a>
      </div>
    </section>
  );
}
