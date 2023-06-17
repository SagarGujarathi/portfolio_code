import '../css/ProjectItem.css'
function Projectitem(props) {
    return (
        <a href={props.projectLink} target='_blank'>
            <div className="project-item">
                <img src={props.pic} />
                <p className='project-name'>{props.name}</p>
                <p className="project-info">
                    {props.content}
                </p>
                <div className="wrap">
                    <a href={props.repoLink} target='_blank'>
                        <button className='repo-link-button'>Repo Link</button>
                    </a>
                    <span className="tech-used">
                        {props.tech.map((item) => {
                            return (
                                <div >
                                    <img src={item} className="tech-item" />
                                </div>
                            )
                        })}
                    </span>
                </div>

            </div>
        </a>
    )
}

export default Projectitem