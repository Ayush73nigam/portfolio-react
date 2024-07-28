import React from 'react'
import './Works.css'
import jokes from '../../assets/jokenew.jpg'
import port from '../../assets/port.jpg'
import text from '../../assets/text.png'
import responsive from '../../assets/responsive.png'
import calculator from '../../assets/calculator.jpg'
import tictac from '../../assets/tictac.png'
function Works() {
  return (
    <div className="works-container">
        <h1 id='projects'>My Recent <span>Projects</span></h1>
        <div className="works-list-container">
            <a href="https://visionary-stardust-e1f982.netlify.app/" target='blank'>
            <div className="works-item">
                <img src={tictac} alt="image" />
                <p><span>Tic Tac Toe</span> Game</p>
            </div>
            </a>
            <a href="https://gregarious-griffin-b5ffe9.netlify.app/" target='blank'>
            <div className="works-item">
                <img src={port} alt="image" />
                <p><span>Portfolio</span> Website</p>
            </div>
            </a>
            <a href="https://cosmic-fenglisu-a690e1.netlify.app/" target='blank'>
            <div className="works-item">
                <img src={text} alt="image" />
                <p><span>Text</span> Customizer</p>
            </div>
            </a>
            <a href="https://monumental-manatee-02e70d.netlify.app/" target='blank'>
            <div className="works-item">
                <img src={responsive} alt="image" />
                <p><span>Responsive</span> Website</p>
            </div>
            </a>
            <a href="https://helpful-haupia-374485.netlify.app/" target='blank'>
            <div className="works-item">
                <img src={jokes} alt="image" />
                <p>Tell a <span>Joke</span></p>
            </div>
            </a>
            <a href="https://resonant-starship-8a6275.netlify.app/" target='blank'>
            <div className="works-item">
                <img src={calculator} alt="image" />
                <p>Basic <span>Calculator</span></p>
            </div>
            </a>
        </div>
    </div>
  )
}

export default Works
