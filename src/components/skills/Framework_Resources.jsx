import React from 'react'
import './skills.css';
import arduino_icon from '../../assets/skills_pictures/skills_arduino_icon.jpeg'
import nodeJS_icon from '../../assets/skills_pictures/skills_nodeJS_icon.png'
import cv2_icon from '../../assets/skills_pictures/skills_cv2_icon.png'
import r_icon from '../../assets/skills_pictures/skills_r_icon.jpeg'
import robotc_icon from '../../assets/skills_pictures/skills_robotc_icon.webp'
import webrtc_icon from '../../assets/skills_pictures/skills_webrtc_icon.png'
import appScript_icon from '../../assets/skills_pictures/skills_google_app_script_icon.png'
import unity_icon from '../../assets/skills_pictures/skills_unity_icon.png'
import firebase_icon from '../../assets/skills_pictures/skills_firebase_icon.png'
import git_icon from '../../assets/skills_pictures/skills_git_icon.png'
import react_icon from '../../assets/skills_pictures/skills_react_icon.png'
import mongo_icon from '../../assets/skills_pictures/skills_mongodb_icon.webp'

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frameworks & Resources</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <img src={arduino_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">Arduino</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={nodeJS_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">NodeJS</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={cv2_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">Computer Vison</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={r_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">R</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={robotc_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">RobotC</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={webrtc_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">Google WebRTC</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <img src={appScript_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">Google App Script</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={unity_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">Unity</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={firebase_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">Firebase</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={git_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={react_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">ReactJS</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={mongo_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">MongoDB</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Backend