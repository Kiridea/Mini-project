import './About.css'
import placeholderImage from '../assets/placeholder.png'
import githubIcon from '../assets/github-icon.png'

function About() {
    return (
        <div id="about">
            <h1 id="headings">Project Description</h1>
            <section id="project-description">
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sapiente eius nobis eveniet neque
                    consectetur assumenda illo iure commodi laudantium
                    perspiciatis nemo vero expedita aliquam earum
                    mollitia excepturi autem, non atque.</p>
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sapiente eius nobis eveniet neque
                    consectetur assumenda illo iure commodi laudantium
                    perspiciatis nemo vero expedita aliquam earum
                    mollitia excepturi autem, non atque.</p>
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sapiente eius nobis eveniet neque
                    consectetur assumenda illo iure commodi laudantium
                    perspiciatis nemo vero expedita aliquam earum
                    mollitia excepturi autem, non atque.</p>
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sapiente eius nobis eveniet neque
                    consectetur assumenda illo iure commodi laudantium
                    perspiciatis nemo vero expedita aliquam earum
                    mollitia excepturi autem, non atque.</p>
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sapiente eius nobis eveniet neque
                    consectetur assumenda illo iure commodi laudantium
                    perspiciatis nemo vero expedita aliquam earum
                    mollitia excepturi autem, non atque.</p>
            </section>
            <section id="team-container">
            <h2 id="headings">Habita Developer Team</h2>
            <div id="members-container">
                <div id="team-member">
                    <img id="member-pic" src={placeholderImage} alt="aquiles' picture" />
                    <h4>Aquiles Hinestrosa</h4>
                    <a target="_blank" href="https://github.com/CelestialTrash"><img id="gh-icon" src={githubIcon} alt="" />CelestialTrash</a>
                </div>
                <div id="team-member">
                    <img id="member-pic" src={placeholderImage} alt="esteban's picture" />
                    <h4>Esteban Escalante</h4>
                    <a target="_blank" href="https://github.com/eea88"><img id="gh-icon" src={githubIcon} alt="" />eea88</a>
                </div>
                <div id="team-member">
                    <img id="member-pic" src={placeholderImage} alt="kim's picture" />
                    <h4>Kim Delgado</h4>
                    <a target="_blank" href="https://github.com/Kiridea"><img id="gh-icon" src={githubIcon} alt="" />Kiridea</a>
                </div>
                </div>

            </section>

        </div>
    )
}

export default About;