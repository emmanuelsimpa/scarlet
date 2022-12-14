import React, { useState } from "react";
import "../css/sidenav.css";

export default function SideNav() {
  const [socialIcon, setSocialIcon] = useState([
    { icon: "fab fa-facebook-f", link: "#" },
    { icon: "fa-brands fa-twitter", link: "#" },
    { icon: "fa-brands fa-linkedin-in", link: "#" },
    { icon: "fa-brands fa-instagram", link: "#" },
    { icon: "fa-brands fa-dribbble", link: "#" },
    { icon: "fa-brands fa-pinterest-p", link: "#" },
  ]);
  return (
    <>
      <aside id='side-nav'>
        <div className='side-nav_content'>
          <div className='side-nav_content--logo'>
            <img src='/media/img/logo-01.jpg' alt='logo' />
          </div>
          <div></div>
          <ul className='side-nav_content--social'>
            {socialIcon.map((item, index) => (
              <a
                href={item.link}
                key={index}
                // target='_blank'
                rel='noopener noreferrer'>
                <i className={item.icon}></i>
              </a>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
