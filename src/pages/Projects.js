import { useState, useEffect } from "react"

const Projects = props => {
    const [projects, setProjects] = useState(null)

    const getProjectsData = async () => {
        const response = await fetch(`${props.URL}projects`)
        const data = await response.json()
        setProjects(data)
    }
    
    useEffect(() => getProjectsData(), [])

    const loaded = ( )=> {
        return projects.map((project) => (
        <div>
            <h1>{project.name}</h1>
            <img src={project.image} alt=""/>
            <a href={project.git}>
                <button>Github</button>
            </a>
            <a href={project.live}>
                <button>Live Site</button>
            </a>
        </div>
    ))
    }

    return projects ? loaded() : <img src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/02/Rickrolling-in-4K.jpg" alt=""/>


}

export default Projects