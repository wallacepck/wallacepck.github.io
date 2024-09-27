import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section" id ="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className= {
                    toggleState === 1 
                        ? "qualification__button qualification__active button--flex" 
                        : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={
                    toggleState === 2 
                        ? "qualification__button qualification__active button--flex" 
                        : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(2)}    
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={
                    toggleState === 1
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"
                }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.Comp in Computer Science</h3>
                            <span className="qualification__subtitle">National University of Singapore</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2023 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Diploma in Engineering Science</h3>
                            <span className="qualification__subtitle">Ngee Ann Polytechnic</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">O Level's</h3>
                            <span className="qualification__subtitle">West Spring Secondary School</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2014 - 2017
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>

                <div className={
                    toggleState === 2
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"
                }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Software Engineer Intern</h3>
                            <span className="qualification__subtitle">Backbone Pte. Ltd.</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2024 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Admin & Training Specialist</h3>
                            <span className="qualification__subtitle">Minstry of Defence (NS)</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - 2023
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Software Engineer Intern</h3>
                            <span className="qualification__subtitle">Defence Science & Technology Agency</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - 2021
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Qualification;