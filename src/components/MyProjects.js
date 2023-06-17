import '../css/MyProjects.css'
import Projectitem from './Projectitem'
import Heading from './Heading'
import build from '../images/build.gif'
import { languages } from '../App'
import taskManagementTool from '../images/project/taskManagementTool.jpeg'
import chessify from '../images/project/chessify.jpeg'
import boldify from '../images/project/boldify.jpeg'
import mazeSolver from '../images/project/mazeSolver.jpeg'
import ecommerceApp from '../images/project/ecommerceApp.jpg'
import cookieCatcher from '../images/project/cookieCatcher.jpeg'

function MyProjects() {

    const projectData = [
        {
            name: 'Task Management tool',
            body: 'Build by react technology, Your tasks are stored in local storage permanently as long as you are not done with them. Managing your task priority is also available.',
            techStack: [languages.html, languages.css, languages.javascript, languages.reactjs],
            image: taskManagementTool,
            projectLink: 'https://todolist.sagargujarathi.me/',
            repoLink: 'https://github.com/SagarGujarathi/Task_Management_tool'
        },
        {
            name: 'chessify',
            body: 'Chessify helps beginners learn chess. It assists the players in moving the pieces. The algorithm is designed such that it can find the safest and best paths.',
            techStack: [languages.html, languages.css, languages.javascript],
            image: chessify,
            projectLink: 'https://chess.sagargujarathi.repl.co/',
            repoLink: 'https://github.com/SagarGujarathi/Chess-Assist-Algorithm'
        },
        {
            name: 'boldify',
            body: 'Boldify is a font changer, It has over 53 unique fonts. Just a click on required font to copy it!',
            techStack: [languages.html, languages.css, languages.javascript],
            image: boldify,
            projectLink: 'https://boldify.tech/',
            repoLink: 'https://github.com/SagarGujarathi/Boldify'
        },
        {
            name: 'Maze Solver',
            body: 'Maze solver is a web version of famous rat in maze problem, Make the maze and challenge the algorithm to solve it!',
            techStack: [languages.html, languages.css, languages.javascript],
            image: mazeSolver,
            projectLink: 'https://maze-solver.sagargujarathi.repl.co/',
            repoLink: 'https://github.com/SagarGujarathi/MazeSolver'
        },
        {
            name: 'Ecommerce app',
            body: 'Easily scable Ecommerce app, with good ui, performance and responsiveness.',
            techStack: [languages.html, languages.css, languages.javascript, languages.reactjs],
            image: ecommerceApp,
            projectLink: 'https://golden-semifreddo-7f52b7.netlify.app/',
            repoLink: 'https://github.com/SagarGujarathi/Ecommerce_App'
        },
        {
            name: 'Cookie Catcher',
            body: 'A simple game in which the task is to catch the falling cookies in the basket, Arrow keys on keyboard for desktop and Arrow buttons on screen for mobile to move the basket.',
            techStack: [languages.html, languages.css, languages.javascript, languages.reactjs],
            image: cookieCatcher,
            projectLink: 'https://cookiecatcher.netlify.app/',
            repoLink: 'https://github.com/SagarGujarathi/Cookie_Catcher'
        }
    ]
    return (
        <div className="my-projects-main-container">
            <Heading
                heading={'My Projects'}
                sticker={build}
            />
            <div className="projects-wrap">
                {
                    projectData.map((project) => {
                        return <Projectitem
                            name={project.name}
                            content={project.body}
                            tech={project.techStack}
                            pic={project.image}
                            projectLink={project.projectLink}
                            repoLink={project.repoLink}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default MyProjects