import GithubImage from '../assets/github.svg'
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>  
            <hr/>     
             <a href="https://github.com/Kiridea/Mini-project">
             <img className="github" src={GithubImage} alt="Github" /> 
             </a>
        </div>

    );
}

export default Footer