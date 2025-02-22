import React from 'react'
import './home.css'

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://github.com/wallacepck" className="home__social-icon" target="_blank">
            <i class="fa-brands fa-github"></i>
        </a>

        <a href="https://t.me/wallace_tgm" className="contact__social-icon" target="_blank">
            <i class="fa-brands fa-telegram"></i>
        </a>

        <a href="https://linkedin.com/in/wallacepck/" className="home__social-icon" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
        </a>
    </div>
  )
}

export default Social