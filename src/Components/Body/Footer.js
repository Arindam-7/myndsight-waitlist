import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import '../../styles.css';

const Footer = () => {
    return (
        <div class="footerContainer">
            <div class="socialIcons">
                <a href="https://www.instagram.com/myndsight_"><i>
                    <FontAwesomeIcon icon={faInstagram} />
                    </i></a>
                <a href="https://www.linkedin.com/"><i>
                    <FontAwesomeIcon icon={faLinkedin} />
                </i></a>
            </div>
        </div>
    )
};

export default Footer;