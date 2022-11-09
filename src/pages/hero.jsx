import './hero.css';

import logo from '../img/logosquarewhite.png';
import twitter from '../img/twitter.png';
import linkedin from '../img/linkedin.png';
import email from '../img/email.png';
import bluebg from '../img/square.png';
import arrow from '../img/blue-arrow.png';
import koftw from '../img/koftw.png';

function Hero() {

    return(
        <div className="hero">
        <div className="right">
        <div className="wave-container-right">
                <div className="wave"></div>           
            </div>
            <img src={koftw} alt="koft" id="render-right-blur" />
            <img src={koftw} alt="koft" id="render-right" />
        </div>
        <div className="left">
        <div className="wave-container">
                <div className="wave"></div>           
            </div>
            <img src={koftw} alt="koft" id="render-left-blur" />
            <img src={koftw} alt="koft" id="render-left" />
        </div>
        <div className="content">
            <div className="content-left">
    
            <img src={logo} alt="logo" id="logo" className="logo clickable" />
            <img src={bluebg} alt="sideways square" id="squares" />
            <h2 id="txt1">This is my<br></br><div id="txt3">Portfolio</div></h2>
            <div id="seperator"></div>
            <div id="socials">
                <div className="socials-item clickable" id="item-twitter">
                <svg height="44" width="44" className="socials-circle-svg">
                    <circle cx="22" cy="22" r="22" strokeWidth="0" className="socials-circle">
                    </circle>
                </svg>
                </div>
                <img src={twitter} alt="twitter" className="socials-img" />
                <div className="socials-item clickable" id="item-linkedin">
                <svg height="44" width="44" className="socials-circle-svg">
                    <circle cx="22" cy="22" r="22" className="socials-circle" strokeWidth="0"></circle>
                </svg>
                </div>
                <img src={linkedin} alt="linkedin" className="socials-img" />
                <div className="socials-item clickable" id="item-email">
                <svg height="44" width="44" className="socials-circle-svg">
                    <circle cx="22" cy="22" r="22" className="socials-circle" strokeWidth="0"></circle>
                </svg>
                </div>
                <img src={email} alt="email" className="socials-img" />
            </div>
            </div>
            <div className="content-right">
            <div id="header-main">
                Hello world!<br></br>&nbsp;&nbsp;&nbsp;&nbsp;I'm Jens<br></br><div id="vander">van der</div><div id="sloot">Sloot</div>
            </div>
            <div className="nav-list">
                <div className="nav-list-item nav-list-active clickable">
                Home
                </div>
                <svg className="nav-list-circle nav-list-circle-active">
                <circle cx="4" cy="4" r="4"></circle>
                </svg>
                <div className="nav-list-item clickable">
                Work
                </div>
                <svg className="nav-list-circle2">
                <circle cx="4" cy="4" r="4"></circle>
                </svg>
                <div className="nav-list-item clickable">
                Journey
                </div>
                <svg className="nav-list-circle3">
                <circle cx="4" cy="4" r="4"></circle>
                </svg>
                <div className="nav-list-item clickable">
                Contact
                </div>
                <svg className="nav-list-circle4">
                <circle cx="4" cy="4" r="4"></circle>
                </svg>
            </div>
            <div className="nav-list-scrolling">
            </div>
            <div className="central-section">
                <div id="central-name">
                -&nbsp;Jens van der Sloot
                </div>
                <div id="central-description">
                Product Designer and
                Developer, based in
                Lisse, Netherlands.
                </div>
                <div id="central-text">
                It’s certainly not easy to get noticed in today’s
    marketplace, but one thing is for certain: quality online representation is what
    it takes to make a modern brand truly shine, and I'm here to help with that.    
                </div>
                <div id="central-start" className="clickable">
                Start Our Story
                <img src={arrow} alt="arrow" id="central-start-arrow"/>
                </div>
            
            </div>
            
            </div>
            </div>
            <div className="gradientback">
        </div>
        </div>
    );
}

export default Hero;