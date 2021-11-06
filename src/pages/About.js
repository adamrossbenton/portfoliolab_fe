import { useState, useEffect } from "react"

const About = props => {
    const [about, setAbout] = useState(null)

    const getAboutData = async () => {
        const response = await fetch(`${props.URL}about`)
        const data = await response.json()
        setAbout(data)
    }
    
    useEffect(() => getAboutData(), [])

    return <>
        <div>
            <h2>{about?.name ?? "..."}</h2>
            <h3>{about?.email ?? "..."}</h3>
            <img id="the-beek" src="https://upload.wikimedia.org/wikipedia/commons/5/5b/JamesVanDerBeekSept2013TIFF.jpg" alt="this is literally me"/>
            <p>{about?.bio ?? "..."}</p>
        </div>
    </>
}

export default About