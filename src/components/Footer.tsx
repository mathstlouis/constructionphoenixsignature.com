import {Link} from "react-router-dom";
import {Toaster} from "react-hot-toast";

const Footer = () => {


  return (
    <>
      <Toaster position="bottom-right" reverseOrder={true} />
      <footer className="site-footer style-1" id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-xl-7 col-lg-10">
                <h4 className="mail-text">
                  <span className="text-primary">Courriel:</span> info@constructionphoenixsignature.com
                </h4>
                <h4 className="mail-text">
                  <span className="text-primary">(418) 934-6815</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-7 text-start">
                <span className="copyright-text">
                  Copyright © 2023{" "}
                  <Link
                    to="https://dexignzone.com/"
                    className="text-primary"
                    target="_blank"
                  >
                    DexignZone
                  </Link>{" "}
                  All rights reserved.
                </span>
              </div>
              <div className="col-lg-6 col-md-5 text-end">
                <ul className="social-list style-1">
                  <li>
                    <Link to="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
