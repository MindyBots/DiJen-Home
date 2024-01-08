import { Link } from "react-scroll";
import { Link as RouterLink } from 'react-router-dom';

function Navbar1() {
  function openBar() {
    const bar = document.querySelector(".bar");

    bar.classList.toggle("opened");
  }

  return (
    <nav className="navbar navopened">
      <div className="container">
        <div className="row">
          <h1 className="logo">
            <Link
              style={{ cursor: "pointer" }}
            >
              DiJen Foods
            </Link>
          </h1>
          <ul className="bar">
            <li>
              <RouterLink
                to="/"
                onClick={openBar}
                duration={1000}
              >
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/"
                onClick={openBar}
                duration={1000}
              >
                Brands
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/"
                onClick={openBar}
                duration={1000}
              >
                Investors
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/"
                onClick={openBar}
                duration={1000}
              >
                Contact Us
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar1;
