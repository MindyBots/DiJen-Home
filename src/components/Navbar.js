import { Link } from "react-scroll";
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  document.addEventListener("scroll", function (e) {
    if (window.screen.width < 768 && window.scrollY > 690) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else if (window.screen.width > 768 && window.scrollY > 220) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else {
      const nav = document.querySelector(".navbar");
      const gotop = document.querySelector(".gotop");
      gotop.classList.remove("display");
      nav.classList.remove("navopened");
    }
  });
  function openBar() {
    const bar = document.querySelector(".bar");

    bar.classList.toggle("opened");
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          <h1 className="logo">
          
            <Link
              spy={true}
              smooth={true}
              duration={1000}
              to="headerbg"
              style={{ cursor: "pointer",color: '#FFE598'}}
            >
              DiJen Foods
            </Link>
          </h1>
          <ul className="bar">
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="about-scroll"
                style={{ color: '#FFE598'}}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
                style={{ color: '#FFE598'}}
              >
                Brands
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="about-scroll"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
                offset={35}
                style={{ color: '#FFE598'}}
              >
                Investors
              </Link>
            </li>
            {/*<li>
              <Link
                onClick={openBar}
                to="about-scroll"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
                offset={35}
              >
                Careers
              </Link>
            </li>*/}
            <li>
              <Link
                onClick={openBar}
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
<<<<<<< HEAD
<<<<<<< HEAD
                activeClass="active"
=======
                style={{ color: '#FFE598'}}
>>>>>>> 3622c6d2effc51951437f16d619fe29bf57e507c
=======
                style={{ color: '#FFE598'}}
>>>>>>> 3622c6d2effc51951437f16d619fe29bf57e507c
              >
                Contact Us
              </Link>
            </li>
            <li>
              <RouterLink
                to="/franchise"
                onClick={openBar}
                duration={1000}
                style={{ color: '#FFE598'}}
              >
                Franchise
              </RouterLink>
            </li>
          </ul>
          <div className="button" onClick={openBar}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
