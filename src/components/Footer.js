import { Link, animateScroll as scroll } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {


  const linkStyle = {
    color: '#FFE598', // Replace 'your-color' with the desired color value
  };

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo" style={{color:'#FFE598'}}>DiJen Foods</h1>
              </div>
              <div className="col-md-3">
                <p className="footer-title" style={{color:'#FFE598'}}>Navigation</p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={1000}
                         to="headerbg"
                         style={linkStyle}
                  > Home </Link>
                  </li>
                  <li>
                  <Link to="about-scroll" spy={true} smooth={true} duration={1000} style={linkStyle}> About Us </Link>
                  </li>
                  <li>
                  <Link to="services" spy={true} smooth={true} duration={1000} style={linkStyle}> Brands </Link>
                  </li>
                  <li>
                    <RouterLink
                      to="/investor"
                      duration={1000}
                      style={{ color: '#FFE598'}}
                    >
                      Investors
                    </RouterLink>
                  </li>
                  <li>
                    <Link
                      to="teams"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      activeClass="active"
                      offset={35}
                      style={{ color: '#FFE598'}}
                    >
                      Teams
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      activeClass="active"
                      style={{ color: '#FFE598'}}
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <RouterLink
                      to="/franchise"
                      duration={1000}
                      style={{ color: '#FFE598'}}
                    >
                      Franchise
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title" style={{color:'#FFE598'}}>Contact</p>
                <ul style={{color:'#FFE598'}}>
                  <li>
                    dijenfoods@gmail.com 
                  </li>
                  <li>
                    +91 7200800886
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title" style={linkStyle}>Social Media</p>
                <ul style={{marginTop: 3}}>
                  <li>
                    <a target="_blank" rel="noreferrer" href="#" style={{color: '#FFE598', marginLeft: 2}}><FacebookIcon /></a>
                    <a target="_blank" rel="noreferrer" href="#" style={{color: '#FFE598', marginLeft: 10}}><YouTubeIcon /></a>
                    <a target="_blank" rel="noreferrer" href="#" style={{color: '#FFE598', marginLeft: 10}}><LinkedInIcon /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-icons">
        <button onClick={() => scroll.scrollToTop(2500)} className="gotop">
            <i className="fas fa-level-up-alt"></i>
        </button>
    </div>
    </footer>
    
    
  );
}
export default Footer;
