import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isSticky, setSticky] = useState(false);
  const [isToggle, setToggle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 245) {
        setSticky(true);
      } else {
        setSticky(false);
      }
      console.log();
    });
  }, []);

  const handleSideMenu = () => {
    setToggle(!isToggle);
  };

  return (
    <div
      id="sticky-header-with-topbar"
      className={`mainmenu__wrap sticky__header ${isSticky && "scroll-header"}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-6">
            <div className="logo">
              <Link to="/">
                <img
                  src="images/logo/sinply-construction.png"
                  alt="logo image"
                />
              </Link>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 d-lg-block d-none">
            <nav className="main__menu__nav d-lg-block d-md-none d-none">
              <ul className="main__menu">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/about">ABOUT</Link>
                </li>
                <li>
                  <Link to="/services">SERVICES</Link>
                </li>
                <li>
                  <Link to="/blogs">BLOG</Link>
                </li>
                <li>
                  <Link to="contact">CONTACT</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-2 col-md-6 d-lg-block d-md-block d-none">
            <div className="htc__header__search">
              <input type="text" placeholder="SEARCH" />
              <Link to="#">
                <i className="fa fa-search" />
              </Link>
            </div>
          </div>
          <div className="col-6 d-block d-md-none">
            <div className="hamburger-menu h-100 d-flex align-items-center justify-content-end">
              <div className="toggle-btn" onClick={handleSideMenu}>
                <i className="fa-solid fa-bars"></i>
              </div>
            </div>
          </div>
          <div className={`mobile-side-menu ${isToggle && "showSide"}`}>
            <nav className="mean-nav">
              <ul className="">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/about">ABOUT</Link>
                </li>
                <li>
                  <Link to="/services">SERVICES</Link>
                </li>
                <li>
                  <Link to="/blogs">BLOG</Link>
                </li>
                <li>
                  <Link to="contact">CONTACT</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
