import '../css/Aboutme.css'
import Heading from '../components/Heading'
import Rocket from '../images/rocket.gif'
function Aboutme() {
    return (
        <div className="about-me-container">
            <Heading
                heading={'About Me'}
                sticker={Rocket}
            />
            <div className="about-me-content">Hello, my name is Sagar, and I am an enthusiastic 18-year-old aspiring full-stack web developer based in Hyderabad, India. I have a passion for exploring new technologies and solving complex problems. I am highly skilled in data structures and algorithms (DSA), which enables me to approach coding challenges with confidence.</div>
        </div>
    )
}

export default Aboutme