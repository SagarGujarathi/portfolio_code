import '../css/Skills.css'
import Skillitem from './Skillitem'
import Heading from './Heading'
import diamond from '../images/diamond.gif'
import { languages } from '../App'

function Skills() {
    const skills = [
        {
            name: 'html',
            image: languages.html
        },
        {
            name: 'css',
            image: languages.css
        }, ,
        {
            name: 'javascript',
            image: languages.javascript
        },
        {
            name: 'cpp',
            image: languages.cpp
        },
        {
            name: 'mongodb',
            image: languages.mongodb
        },
        {
            name: 'expressjs',
            image: languages.expressjs
        },
        {
            name: 'reactjs',
            image: languages.reactjs
        },
        {
            name: 'nodejs',
            image: languages.nodejs
        },
        {
            name: 'typescript',
            image: languages.typescript
        },
        {
            name: 'socket',
            image: languages.socket
        }
    ]
    return (
        <div className="skills-main-container">
            <Heading
                heading={'My Skills'}
                sticker={diamond}
            />
            <div className="skills-wrap-container">
                {
                    skills.map(item => {
                        return <Skillitem name={item.name} image={item.image} percentage={90} />
                    })
                }
            </div>
        </div>
    )
}

export default Skills