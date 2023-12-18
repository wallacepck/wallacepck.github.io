import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>
        <div className="section__subsubtitle">
          <i class="fa-solid fa-diamond"></i> 
          A Jack of All Trades
          <i class="fa-solid fa-diamond"></i>
        </div>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skills;