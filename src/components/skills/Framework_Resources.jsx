import React from 'react'
import './skills.css';
import arduino_icon from '../../assets/skills_pictures/skills_arduino_icon.jpeg'
import nodeJS_icon from '../../assets/skills_pictures/skills_nodeJS_icon.png'
import cv2_icon from '../../assets/skills_pictures/skills_cv2_icon.png'
import torch_icon from '../../assets/skills_pictures/skills_torch_icon.png'
import tensorflow_icon from '../../assets/skills_pictures/skills_tensorflow_icon.png'
import godot_icon from '../../assets/skills_pictures/skills_godot_icon.png'
import ros_icon from '../../assets/skills_pictures/skills_ros_icon.png'
import flutter_icon from '../../assets/skills_pictures/skills_flutter_icon.png'
import blender_icon from '../../assets/skills_pictures/skills_blender_icon.png'
import r_icon from '../../assets/skills_pictures/skills_r_icon.jpeg'
import robotc_icon from '../../assets/skills_pictures/skills_robotc_icon.webp'
import webrtc_icon from '../../assets/skills_pictures/skills_webrtc_icon.png'
import appScript_icon from '../../assets/skills_pictures/skills_google_app_script_icon.png'
import unity_icon from '../../assets/skills_pictures/skills_unity_icon.png'
import firebase_icon from '../../assets/skills_pictures/skills_firebase_icon.png'
import git_icon from '../../assets/skills_pictures/skills_git_icon.png'
import react_icon from '../../assets/skills_pictures/skills_react_icon.png'
import mongo_icon from '../../assets/skills_pictures/skills_mongodb_icon.png'

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frameworks & Resources</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <img src={torch_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">Torch</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                
                <div className="skills__data">
                    <img src={cv2_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">OpenCV</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={tensorflow_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">Tensorflow</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={ros_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">ROS</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <img src={godot_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">Godot</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={blender_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">Blender</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={git_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={react_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={flutter_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">Flutter</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Backend