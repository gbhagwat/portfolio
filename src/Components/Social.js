import linkedin from '../Assets/images/social/LinkedIn.png';
import github from '../Assets/images/social/GitHub.png';
import email from '../Assets/images/social/Email.png';

import '../Assets/styles/social.css';

export function Social(){
    return (
        <div className="join join-vertical" id="social">
            <a
            href="https://www.linkedin.com/in/gabriellebhagwat/"
            className="btn join-item"
            ><img src={linkedin} alt="Connect with Gabrielle on LinkedIn"
            /></a>
            <a
            href="https://github.com/gbhagwat"
            className="btn join-item"
            ><img src={github} alt="Check out Gabrielle's work on Github"
            /></a>
            <a
            href="mailto:gabrielle.bhagwat@gmail.com"
            className="btn join-item"
            ><img src={email} alt="Email Gabrielle Bhagwat"
            /></a>
        </div>
    )
}