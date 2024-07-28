import React from 'react';
import Typical from 'react-typical';
import "./Header.css";
import Profile from '../../assets/image.png'
function Header() {
  return (
    <div className="head-container" id="head-container">
        <div className="head-content">
            <h1>Hi  !  I Am</h1>
            <h2 className="name">Ayush Nigam</h2>
            <h2 className='type' id='type'>
                I'm a {""}
                <Typical
                steps={[
                    "Front-end Web Developer✨",1000,
                    "Programming Enthusiast🚀",1000
                ]}
                    loop={Infinity}
                    wrapper='b'
                />
            </h2>
            <p>
            Passionate about transforming ideas into impactful experiences, my portfolio reflects a commitment to innovation, attention to detail, and a relentless pursuit of excellence in every project undertaken.
            </p>
            <div className="resume">
                <a href="https://www.canva.com/design/DAFuh4Hi2Po/Hjul-00NuBp6OIBn3gfE6Q/edit?utm_content=DAFuh4Hi2Po&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target='blank'><button>Resume Link</button></a>
            </div>
        </div>
        <div className="profile-img">
            <img src={Profile} alt="img" />
            <div className="circle-1"></div>
            <div className="circle-2"></div>
        </div>
    </div>
  )
}

export default Header
