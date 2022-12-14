import React, { useState } from "react";
import "../css/service.css";

export default function Services() {
  const [links, setLink] = useState([
    {
      icon: "fa-solid fa-broom-ball",
      title: "Ui Design",
      note: " A UX (User Experience) designer is responsible for creating products and experiences that are user-friendly and visually appealing. They use research, user feedback, and data to design user interfaces, creating user flows and develop products prototypes",
    },
    {
      icon: "fa-solid fa-list-check",
      title: "Web Development",
      note: "Web development is the process of creating websites and web applications. It includes the tasks of designing, coding, scripting, optimizing, and maintaining webpages and websites. Web development can range from developing a simple single static page of plain text to complex web-based internet applications, electronic businesses, and social network services.",
    },
    {
      icon: "fa-solid fa-mobile-screen-button",
      title: "App Development",
      note: "App development is the process of creating software applications that run on mobile devices such as smartphones and tablets. This process includes creating the user interface, coding the app, testing it, and submitting it to app stores. Developers use various programming languages, software development kits (SDKs), and frameworks to create the apps.",
    },
    {
      icon: "fa-solid fa-paint-roller",
      title: "Type Design",
      note: "A type design is the process of creating a typeface. It involves the selection of glyphs, as well as their design and placement within the typeface. Type design may be done by hand or by computer. Type designers often use a variety of methods and techniques to create a typeface that fits a specific purpose. They may take inspiration from existing typefaces or create something completely new.",
    },
    {
      icon: "fa-solid fa-pen-to-square",
      title: "Blog Writer",
      note: "A Blog writers create content for a variety of topics, ranging from lifestyle and entertainment to technology, health, and finance. They may also write about current events, product reviews, and more. Blog writers typically research their topics thoroughly and craft blog posts that are informative, interesting, and engaging. They may also be responsible for editing and proofreading blog posts before they are published.",
    },
    {
      icon: "fa-solid fa-diagram-project",
      title: "Project Management",
      note: "Project management is the process of planning, organizing, and managing resources to achieve specific goals and objectives within a given time frame. It involves setting objectives, developing strategies to help meet those objectives, and managing resources (time, money, and personnel) to ensure the project is completed on time and within budget.",
    },
  ]);
  return (
    <section id='services'>
      {links.map((link, index) => (
        <div
          key={index + 1}
          className={`service services_service-${index + 1}`}>
          <i className={link.icon}></i>
          <h3
            className={`services--title services_service-${index + 1}--title`}>
            {link.title}
          </h3>
          <p className={`services--para services_services-${index + 1}--para`}>
            {link.note}
          </p>
        </div>
      ))}
    </section>
  );
}
