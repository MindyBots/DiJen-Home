import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">DiJen Foods</h1>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Navigation</p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={1000}
                         to="headerbg"
                  > Home </Link>
                  </li>
                  <li>
                  <Link to="services" spy={true} smooth={true} duration={1000} > Brands </Link>
                  </li>
                  <li>
                  <Link to="about-scroll" spy={true} smooth={true} duration={1000}> About Us </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="#">Facebook</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="#">Youtube</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="#">LinkedIn</a>
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
