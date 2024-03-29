import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return ( 
        <div className='nav-bar'>
            <Link className='logo' to='/' >
                <img src={LogoS} alt='logo' />
                <img className='sub-logo' src={LogoSubtitle} alt='logo' />
            </Link>
            <nav>
                <NavLink
                    exact="true" 
                    activeClassName="active" 
                    to='/'
                    >
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink 
                    exact="true" 
                    activeClassName="active" 
                    className="about-link" 
                    to='/about'
                    >
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink 
                    exact="true" 
                    activeClassName="active" 
                    className="contact-link" 
                    to='/contact'
                    >
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="">
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="">
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="">
                        <FontAwesomeIcon icon={faTwitter} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="">
                        <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
        </div>
     );
}
 
export default Sidebar;