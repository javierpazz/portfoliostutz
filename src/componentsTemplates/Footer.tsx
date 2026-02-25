
function Footer() {

  return (
      <>
<div>
  {/* Footer*/}
  <footer className="footer py-4">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4 text-lg-start">Copyright © Stutz Wines 2026</div>
        <div className="col-lg-4 my-3 my-lg-0">
          {/* <a className="btn btn-dark btn-social mx-2"   href="https://www.instagram.com/stutzvinos" aria-label="Twitter"><i className="fab fa-twitter" /></a> */}
          <a
            className="btn btn-dark btn-social mx-2"
            href="https://www.instagram.com/stutzvinos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            className="btn btn-dark btn-social mx-2"
            href="https://www.facebook.com/profile.php?id=100057151611833"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook">
              <i className="fab fa-facebook-f" /></a>
        </div>
        <div className="col-lg-4 text-lg-end">
          <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
          <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>

</div>

      </>
  )
}

export default Footer
