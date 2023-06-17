import '../css/Home.css'
import DownloadIcon from '@mui/icons-material/Download';
import profilePic from '../images/profilepic2.jpg'
import CV from '../resources/CV.pdf'
function Home() {
    return (
        <div className="home">
            <div className="home-left-container">
                <div className="intro-text">
                    <div className="intro-greet">
                        Hey There!
                        <span className='fire'>I'm Sagar Gujarathi</span>
                    </div>
                    <span className='intro-quote'>A passionate developer who turns what may seem impossible into a reality.</span>
                    <div className='download-cv-button' onClick={() => { window.open(CV, '_blank') }}>Download CV <DownloadIcon /></div>
                </div>
            </div>
            <div className="home-right-container">
                {
                    <img src={profilePic} className='my-pic' />
                }
            </div>
        </div >
    )
}

export default Home