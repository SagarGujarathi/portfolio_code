import '../css/Skillitem.css'
function Skillitem(props) {
    return (
        <div className="skill-item">
            <img src={props.image} />
            {props.name}
        </div>
    )
}

export default Skillitem