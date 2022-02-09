import React, { Component } from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="site-footer text-center text-lg-start bg-light text-muted">
      {/* Section: Social Media  */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Connect with us on social media</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div>
          <a href="" className="me-4 text-reset">
            <i className="bi bi-facebook" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="bi bi-twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="bi bi-instagram" />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social Media  */}
      {/* Section: Links */}
      <section>
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">DogDayz</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                quas hic mollitia harum sed aliquam, animi a nemo nihil
                molestiae asperiores rem atque, voluptates reprehenderit
                provident laudantium libero doloremque ullam.
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Links</h6>
                <p>
                    <Link className="text-reset text-decoration-none" to='/'>Home</Link>
                </p>
                <p>
                    <Link className="text-reset text-decoration-none" to='/services'>Services</Link>
                </p>
                <p>
                    <Link className="text-reset text-decoration-none" to='/contactus'>Contact Us</Link>
                </p>
            </div>
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                    Contact
                </h6>
                <p><i className="bi bi-house-fill me-3"></i> Vineland, NJ 08360, USA</p>
                <p><i className="bi bi-envelope-fill me-3"></i>info@example.com</p>
                <p><i className="bi bi-telephone-fill me-3"></i>+1 (609) 234-5678</p>
            </div>
            {/* Grid column */}

          </div>
        </div>
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0,0,0,0.05)" }}
      >
        <p>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="/" className="text-reset fw-bold text-decoration-none">
            DogDayz.com
          </a>
        </p>
      </div>
      {/* Copyright */}

      {/* <div className='container'>
                <div className='row'>
                    <div className='col-4 col-sm-2 offset-1'>
                        
                        <ul className='list-unstyled'>
                            <Link className='nav-link' to='/'>Home</Link>
                            <Link className='nav-link' to='/services'>Services</Link>
                            <Link className='nav-link' to='/contactus'>Contact Us</Link>

                        </ul>
                    </div>
                </div>
            </div> */}
    </footer>
  );
}

export default Footer;
