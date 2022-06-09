import React from "react";
import "./css/style.css";
import "./css/nice-select.css";
import "./css/bootstrap.min.css";
// import "./css/elegant-icons.css";
// import "./css/owl.carousel.min.css";
import "./css/plyr.css";
import "./css/slicknav.min.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="page-up">
          <a href="#" id="scrollToTopButton">
            <span className="arrow_carrot-up"></span>
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer__logo">
                <a href="./index.html">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer__nav">
                <ul>
                  <li className="active">
                    <a href="./index.html">Homepage</a>
                  </li>
                  <li>
                    <a href="./categories.html">Categories</a>
                  </li>
                  <li>
                    <a href="./blog.html">Our Blog</a>
                  </li>
                  <li>
                    <a href="#">Contacts</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
