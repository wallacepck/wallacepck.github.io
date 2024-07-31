import React from 'react';
import './skills.css';
import python_icon from '../../assets/skills_pictures/skills_python_icon.jpeg'
import javascript_icon from '../../assets/skills_pictures/skills_javascript_icon.png'
import java_icon from '../../assets/skills_pictures/skills_java_icon.png'
import VBA_icon from '../../assets/skills_pictures/skills_VBA_icon.png'
import C_icon from '../../assets/skills_pictures/skills_C_icon.png'
import Cpp_icon from '../../assets/skills_pictures/skills_Cpp_icon.png'
import Csharp_icon from '../../assets/skills_pictures/skills_Csharp_icon.webp'
import html_icon from '../../assets/skills_pictures/skills_html_icon.png'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Programming Languages</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <img src={python_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={javascript_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={java_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">Java</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                <img src={VBA_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">Microsoft VBA</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <img src={C_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">C</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Cpp_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">C++</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Csharp_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">C#</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={html_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend;