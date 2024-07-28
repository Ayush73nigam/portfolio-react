import React from 'react'
import './footer.css'
import footerlogo from '../../assets/port.jpg'
function Footer() {
  return (
    <footer>
        <div className="footer-logo" id="footer-logo">
            <img src={footerlogo} alt="image" />
        </div>
        {/* cpyright */}
        <div className="footer-copywrite">
            <p>
            © 2023 Portfolio Ayush Nigam. All Right reserved
            </p>
        </div>
        {/* socials */}
        <ul className="contacts">
            <li>
                <a href="mailto:nigamayush739@gmail.com">
                    <i className='fa fa-envelope'></i>
                    <p>nigamayush739@gmail.com</p>
                </a>
            </li>
        </ul>
        <ul className='social'>
            <li>
                <a href="https://www.facebook.com/profile.php?id=100088083442474&mibextid=ZbWKwL" target='blank'>
                    <i className='fa-brands fa-facebook-f'></i>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/ayush-nigam-b37a05257/" target='blank'>
                    <i className='fa-brands fa-linkedin'></i>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/profile.php?id=100088083442474&mibextid=ZbWKwL" target='blank'>
                    <i className='fa-brands fa-instagram'></i>
                </a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer
