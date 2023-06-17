import '../css/Heading.css'
function Heading(props) {
    return (
        <div className="heading">
            {props.heading}
            <div className="sticker" style={{ backgroundImage: `url(${props.sticker})` }}></div>
            <div className="background">{props.heading}</div>
        </div >
    )
}

export default Heading