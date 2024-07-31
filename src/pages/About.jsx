import './About.css'
import placeholderImage from '../assets/placeholder.png'
import githubIcon from '../assets/github-icon.png'
import aquilesImage from '../assets/Aquiles-Sokka.webp'
import EstebanImage from '../assets/Esteban-Bolin.webp'
import KimImage from '../assets/kim-Toph.webp'

function About() {
    return (
        <div id="about">
            <h1 id="headings">Project Description</h1>
            <section id="project-description">
                <p>
                Habitat is an innovative apartment listing platform designed to simplify the rental process for both <br />
                 property owners and seekers. Created by founders and developers Aquiles Hinestrosa, Esteban <br />
                 Escalante, and Kim Delgado, our website and app make it easy for people to list and find rental <br /> 
                 properties with ease and efficiency. Whether you’re looking to rent out your apartment or find a <br /> 
                 new place to call home, Habitat provides a user-friendly experience to meet your needs.</p>
                
            </section>
            <section id="team-container">
            <h2 id="headings">Habita Developer Team</h2>
            <div id="members-container">
                <div id="team-member">
                    <img id="member-pic" src={aquilesImage} alt="aquiles' picture" />
                    <h4>Aquiles Hinestrosa</h4>
                    <a target="_blank" href="https://github.com/CelestialTrash"><img id="gh-icon" src={githubIcon} alt="" />CelestialTrash</a>
                </div>
                <div id="team-member">
                    <img id="member-pic" src={EstebanImage} alt="esteban's picture" />
                    <h4>Esteban Escalante</h4>
                    <a target="_blank" href="https://github.com/eea88"><img id="gh-icon" src={githubIcon} alt="" />eea88</a>
                </div>
                <div id="team-member">
                    <img id="member-pic" src={KimImage} alt="kim's picture" />
                    <h4>Kim Delgado</h4>
                    <a target="_blank" href="https://github.com/Kiridea"><img id="gh-icon" src={githubIcon} alt="" />Kiridea</a>
                </div>
                </div>

            </section>

        </div>
    )
}

export default About;