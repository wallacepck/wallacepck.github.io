import React, { useRef } from 'react'
import "./contact.css";

const Contact = () => {
  //const form = useRef();
  //const form = document.forms['contact_form']
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyj_JXYqEZd-UX7orr3yxjn6ZZCTj8AutvKwZGKC73UdIcERP46_ZPzZUhD3FsBzkzEyw/exec'
  
  const sendEmail = (e) => {
    e.preventDefault()
    const form = document.forms['contact_form']
    const reply_msg = document.getElementById("reply_msg")

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            console.log('Success!', response)
            reply_msg.innerHTML = "Message Sent Successfully"
            setTimeout(function(){
                reply_msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
  };

  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in Touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">wallacepeck.000@gmail.com</span>

                        <a href="mailto:wallacepeck.000@gmail.com" className="contact__button">Write me 
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                </div>

                <div className="contact__social">
                    <a href="https://github.com/wallacepck" className="contact__social-icon" target="_blank">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    
                    <a href="https://t.me/wallace_tgm" className="contact__social-icon" target="_blank">
                        <i class="fa-brands fa-telegram"></i>
                    </a>

                    <a href="https://linkedin.com/in/wallacepck/" className="contact__social-icon" target="_blank">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact