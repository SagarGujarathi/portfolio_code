import '../css/Navbar.css'
import PhoneIcon from '@mui/icons-material/Phone';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import HomeIcon from '@mui/icons-material/Home';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import WorkIcon from '@mui/icons-material/Work';
function Navbar() {
    const [nav, setNav] = useState(false)
    const [state, setState] = useState(false)
    function handleResize() {
        let width = window.innerWidth
        if (width <= 500) {
            setNav(true)
        }
        else {
            setNav(false)
            setState(false)
        }

    }
    useEffect(() => {
        if (window.innerWidth <= 500) {
            setNav(true)
        }
        window.addEventListener('resize', () => { handleResize() })
        return () => window.removeEventListener('resize', () => { handleResize() })
    }, [])
    return (
        <>
            <div className="nav-bar">
                <div className="logo">SAGAR</div>
                {
                    nav ?
                        <ClickAwayListener onClickAway={() => { setTimeout(() => setState(false), 300) }}>
                            <MenuIcon onClick={() => setState(!state)} />
                        </ClickAwayListener>

                        :
                        <ul className="link-wrap">
                            <li
                                className="link"
                                onClick={() => {
                                    document.querySelector('.nav-bar').scrollIntoView({ behavior: 'smooth' })
                                }}>
                                Home
                            </li>
                            <li
                                className="link"
                                onClick={() => {
                                    document.querySelector('.about-me-container').scrollIntoView({ behavior: 'smooth' })
                                }}>
                                About
                            </li>
                            <li
                                className="link"
                                onClick={() => {
                                    document.querySelector('.skills-main-container').scrollIntoView({ behavior: 'smooth' })
                                }}>
                                Skills
                            </li>
                            <li
                                className="link"
                                onClick={() => {
                                    document.querySelector('.my-projects-main-container').scrollIntoView({ behavior: 'smooth' })
                                }}>
                                Projects
                            </li>
                            <li
                                className="link"
                                onClick={() => {
                                    document.querySelector('.my-contact-main-container').scrollIntoView({ behavior: 'smooth' })
                                }}>
                                <PhoneIcon />
                            </li>
                        </ul>
                }
            </div>
            {
                state ?
                    <div className="link-wrap-mobile">
                        <li
                            className="link-mobile"
                            onClick={() => {
                                document.querySelector('.nav-bar').scrollIntoView({ behavior: 'smooth' })
                            }}>
                            <HomeIcon /> Home
                        </li>
                        <li
                            className="link-mobile"
                            onClick={() => {
                                document.querySelector('.about-me-container').scrollIntoView({ behavior: 'smooth' })
                            }}>
                            <QuestionMarkIcon /> About
                        </li>
                        <li
                            className="link-mobile"
                            onClick={() => {
                                document.querySelector('.skills-main-container').scrollIntoView({ behavior: 'smooth' })
                            }}>
                            <LightbulbIcon />Skills
                        </li>
                        <li
                            className="link-mobile"
                            onClick={() => {
                                document.querySelector('.my-projects-main-container').scrollIntoView({ behavior: 'smooth' })
                            }}>
                            <WorkIcon /> Projects
                        </li>
                        <li
                            className="link-mobile"
                            onClick={() => {
                                document.querySelector('.my-contact-main-container').scrollIntoView({ behavior: 'smooth' })
                            }}>
                            <PhoneIcon />My Contacts
                        </li>
                    </div>
                    : ''
            }
        </>
    )
}

export default Navbar