import React from 'react'
import './home.css'

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://github.com/Darren-Tung" className="home__social-icon" target="_blank">
            <i class="fa-brands fa-github"></i>
        </a>

        <a href="https://t.me/dat_yanzuo" className="home__social-icon" target="_blank">
            <i class="fa-brands fa-telegram"></i>
        </a>

        <a href="https://linkedin.com/in/darren-tung-271113168/" className="home__social-icon" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://www.instagram.com/dat_yanzuo/" className="home__social-icon" target="_blank">
            <i class="fa-brands fa-instagram"></i>
        </a>
    </div>
  )
}

export default Social