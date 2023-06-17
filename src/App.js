
import './css/App.css'
import Navbar from './components/Navbar'
import Home from './components/Home.js'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'
import MyProjects from './components/MyProjects'
import MyContact from './components/MyContact'
import github from './images/github.png'
import linkedin from './images/linkedin.png'
import replit from './images/replit.png'
import discord from './images/discord.png'
import ClickEffect from './components/ClickEffect'
import Switch from '@mui/material/Switch';
import { useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { ToastContainer } from 'react-toastify'

import cpp from './images/languages/cpp.svg'
import css from './images/languages/css.svg'
import expressjs from './images/languages/expressjs.svg'
import html from './images/languages/html.svg'
import javascript from './images/languages/javascript.svg'
import mongodb from './images/languages/mongodb.svg'
import nodejs from './images/languages/nodejs.svg'
import reactjs from './images/languages/reactjs.svg'
import socket from './images/languages/socket.svg'
import typescript from './images/languages/typescript.svg'
import 'react-toastify/dist/ReactToastify.css';

export const languages = { cpp, css, expressjs, html, javascript, mongodb, nodejs, reactjs, socket, typescript }
function App() {
  const [clickAnimate, setClickAnimate] = useState(true)
  return (
    <>
      <Navbar />
      <div className="main-content-wrap-container">
        <Home />
        <Aboutme />
        <Skills />
        <MyProjects />
        <MyContact />
      </div>
      <div class="custom-shape-divider-top-1683437920">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
        <div className="footer-content">
          <span className="footer-links">
            <a href="https://github.com/SagarGujarathi" target='_blank'>
              <img src={github} className='footer-link' />
            </a>
            <a href="https://www.linkedin.com/in/gujarathisagar/" target='_blank'>
              <img src={linkedin} className='footer-link' />
            </a>
            <a href="https://replit.com/@SagarGujarathi" target='_blank'>
              <img src={replit} className='footer-link' />
            </a>
            <a href="https://discord.gg/aspiredevs" target='_blank'>
              <img src={discord} className='footer-link' />
            </a>
          </span>
          <span className="email">
            sagargujarathi108@gmail.com
          </span>
          <span className="copyright">
            © {new Date().getFullYear} Sagar Gujarathi. All Rights Reserved.
          </span>
          <span className="footer-button">
            <span className="switch-wrap">
              <Switch onChange={() => setClickAnimate(!clickAnimate)} checked={clickAnimate}></Switch>
              {
                clickAnimate ?
                  'Disable Click Effect'
                  :
                  'Enable Click Effect'

              }
            </span>
          </span>
        </div>
        <span className="go-home" onClick={() => {
          document.querySelector('.nav-bar').scrollIntoView({ behavior: 'smooth' })
        }}>
          <ArrowUpwardIcon />
        </span>
      </div>
      {
        clickAnimate ?
          <ClickEffect />
          : ''
      }
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
