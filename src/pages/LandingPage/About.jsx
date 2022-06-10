import { about } from '../../resources/database'

const About = () => {
    return (
        <div className="about-text" id="about">
            <h2>{about.title}</h2>
            <p>{about.text}</p>
        </div>
    )
}

export default About
