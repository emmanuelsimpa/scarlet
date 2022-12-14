import React, { useState } from "react";
import "../css/skills.css";

export default function Skills() {
  const [links, setLink] = useState([
    { title: "Web Design", percentage: 80 },
    { title: "Print Design", percentage: 75 },
    { title: "Logo Design", percentage: 95 },
    { title: "Graphics Design", percentage: 65 },
    { codeTitle: "HTML / CSS", percentage: 95 },
    { codeTitle: "JavaScript", percentage: 80 },
    { codeTitle: "Python", percentage: 65 },
    { codeTitle: "SQL", percentage: 90 },
  ]);

  return (
    <section id='skills'>
      <div className='skills_design'>
        <h3 className='skills_design--title'>Design Skills</h3>
        {links.slice(0, 4).map((link, i) => (
          <>
            <h4 key={i}>{link.title}</h4>
            <div key={i} className='skills_design--progress'>
              <span className={`skills_design--progress_${i + 1}`}></span>
              <div className={`percentage_${i + 1}`}>{link.percentage}%</div>
            </div>
          </>
        ))}
      </div>
      <div className='skills_coding'>
        <h3 className='skills_coding--title'>Coding Skills</h3>
        {links.slice(4, 8).map((link, i) => (
          <>
            <h4 key={i}>{link.codeTitle}</h4>
            <div key={i} className='skills_coding--progress'>
              <span className={`skills_coding--progress_${i + 1}`}></span>
              <div className={`percentage_${i + 1}`}>{link.percentage}%</div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
