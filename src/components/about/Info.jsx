import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-award'></i>
            <h3 className="about__title">Experience</h3>
            {/* Date is from Red Eclipse, game project in Sec 2... I can't find my first one. */}
            <span className="about__subtitle">{new Date().getFullYear() - 2016} Years Coding</span>
        </div>

        <div className="about__box">
            <i class='bx bx-briefcase-alt'></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">9 + Projects</span>
        </div>
    </div>
  )
}

export default Info