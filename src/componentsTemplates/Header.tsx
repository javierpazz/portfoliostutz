import { useEffect } from "react";
import { Collapse } from "bootstrap";

function Header() {

  useEffect(() => {

    const navbarElement = document.getElementById("navbarResponsive");
    if (!navbarElement) return;

    const bsCollapse = new Collapse(navbarElement, { toggle: false });

    const navLinks = document.querySelectorAll(
      "#navbarResponsive .nav-link"
    );

    const handleClick = () => {
      // Solo cerrar en mobile
      if (window.innerWidth < 992) {
        bsCollapse.hide();
      }
    };

    navLinks.forEach(link =>
      link.addEventListener("click", handleClick)
    );

    return () => {
      navLinks.forEach(link =>
        link.removeEventListener("click", handleClick)
      );
    };

  }, []);

  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          id="mainNav"
        >
          <div className="container">
            {/* <a className="navbar-brand" href="#page-top"> */}
            {/* <a className="navbar-brand" href="#page-top">
              S·t·u·t·z Wines
            </a> */}

            <a className="navbar-brand logo-stutz" href="#page-top">
              <span className="logo-main">S·T·U·T·Z</span>
              <span className="logo-sub">Organic - Wines</span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars ms-1" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarResponsive"
            >
              <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#ourwines">
                    Our wines
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#quienessomos">
                    Who we are
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="http://localhost:5174/"
                  >
                    Ecommerce
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="masthead">
          <div className="container">
            <div className="masthead-heading masthead-subheading">
              Stutz Wines
            </div>
            <div className="masthead-subheading">
              Welcome To Our Winery!
            </div>
            <div className="masthead-heading text-uppercase">
              It's Nice To Meet You
            </div>
            <a
              className="btn btn-primary btn-xl text-uppercase"
              href="#ourwines"
            >
              Our Wines
            </a>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;