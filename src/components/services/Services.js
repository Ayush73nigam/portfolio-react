import React from 'react'
import './Services.css'
function Services() {
  return (
    <div className="services-container">
        <div className="service-list-container">
            {/* desc */}
            <div className="service-description">
                <h1>My <span>Services</span></h1>
                <p>Empowering digital presence through a fusion of web development and intuitive UI/UX design.My services encompass crafting responsive and dynamic websites to shaping user-centric interfaces that captivate and engage. i built frontend of Fine-tuning websites for optimal speed, efficiency, and overall performance.</p>
                <button>Hire Me</button>
            </div>
            {/* services */}
            <div className="service-item-container" id="service-item-container">
              <div className="services-item">
                <i className='fa-solid fa-code'></i>
                <div className="item-desc">
                  <h3>Web Development</h3>
                  <p>I have worked on many frontend project from most basic projects to better projects.i built frontend of Fine-tuning websites for overall performance.This protfolio website is built totally with react.you can have a look at my previous frontend projects in the projects section.</p>
                </div>
              </div>
              <div className="services-item">
                <i className='fa-solid fa-tablet-alt'></i>
                <div className="item-desc">
                  <h3>Ui/Ux Design</h3>
                  <p>I have designed the frontend of the websites as well. The design of all the projects in project section is prepared by me on my own, as we know the design and user experience of the website is the most important part of a project.</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Services
