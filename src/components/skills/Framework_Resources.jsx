import React from 'react'
import './skills.css';
import cv2_icon from '../../assets/skills_pictures/skills_cv2_icon.png'
import torch_icon from '../../assets/skills_pictures/skills_torch_icon.png'
import ros_icon from '../../assets/skills_pictures/skills_ros_icon.png'
import aws_icon from '../../assets/skills_pictures/skills_aws.png'
import haystack_icon from '../../assets/skills_pictures/skills_haystack.jpg'
import blender_icon from '../../assets/skills_pictures/skills_blender_icon.png'
import git_icon from '../../assets/skills_pictures/skills_git_icon.png'
import react_icon from '../../assets/skills_pictures/skills_react_icon.png'
import docker_icon from '../../assets/skills_pictures/skills_docker.png'
import webots_icon from '../../assets/skills_pictures/skills_webots.png'

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
                    <img src={webots_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">Webots</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={aws_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">AWS Cloud</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <img src={ros_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">ROS/ROS2</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={docker_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">Docker</h3>
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
                    <img src={blender_icon} alt="" className="skills__img" />
                    <div>
                        <h3 className="skills__name">Blender</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Backend