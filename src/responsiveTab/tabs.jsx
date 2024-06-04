import React from "react";
import Logo1 from "../assert/logo-1.svg";
import Logo2 from "../assert/logo-2.svg";
import Logo3 from "../assert/logo-3 .svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Glogo from "../logo.svg";
import "../Footer/footercss/footer.css";
import { Col, Container, Row } from "react-bootstrap";
import "../Footer/media/media.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="p-4 border-bottom child-foot">
        <Container>
          <Row>
            <Col lg={6} md={12} sm={12} xs={12} className="text-center text-lg-start mb-3 mb-lg-0">
              <span className="span-text">
                TOP COMPANIES CHOOSE GCOM BUSINESS TO BUILD IN-DEMAND CAREER
                SKILLS.
              </span>
            </Col>

            <Col lg={6} md={12} sm={12} xs={12} className="text-center text-lg-end">
              <div className="main-clients">
                <a href="/" className="me-4 text-reset">
                  <img src={Logo1} alt="" style={{ height: "40px" }} />
                </a>
                <a href="/" className="me-4 text-reset">
                  <img src={Logo2} alt="" style={{ height: "40px" }} />
                </a>
                <a href="/" className="text-reset">
                  <img src={Logo3} alt="" style={{ height: "40px" }} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bg-dark">
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col lg={3} md={6} sm={6} className="mb-4">
              <h6 className="fw-bold">Explore</h6>
              <ul className="list-group">
                <li>
                  <a href="/" className="text-reset text-white">
                    GCOM Live
                  </a>
                </li>
                <li>
                  <a href="/" className="text-reset text-white">
                    Articles
                  </a>
                </li>
                <li>
                  <a href="/" className="text-reset text-white">
                    Sitemap
                  </a>
                </li>
                <li>
                  <a href="/" className="text-reset text-white">
                    Gifts
                  </a>
                </li>
                <li>
                  <a href="/" className="text-reset text-white">
                    Newsroom
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} sm={6} className="mb-4">
              <h6 className="fw-bold">About</h6>
              <ul className="list-group">
                <li>
                  <a href="/" className="text-reset text-white">
                    Diversity, Equity, and Inclusion Careers
                  </a>
                </li>
                <li>
                  <a href="/" className="text-reset text-white">
                    Security
                  </a>
                </li>
                <li>
                  <a href="/" className="text-reset text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/" className="text-reset text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="/" className="text-reset text-white">
                    Social Impact
                  </a>
                </li>
                <li>
                  <a href="/" className="text-reset text-white">
                    Support
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} sm={6} className="mb-4">
              <h6 className="fw-bold">Social</h6>
              <ul className="list-group">
                <li>
                  <a href="/" className="text-reset text-white">
                    <FontAwesomeIcon icon={faTwitter} className="me-2" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="/" className="text-reset text-white">
                    <FontAwesomeIcon icon={faInstagram} className="me-2" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="/" className="text-reset text-white">
                    <FontAwesomeIcon icon={faFacebook} className="me-2" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="/" className="text-reset text-white">
                    <FontAwesomeIcon icon={faYoutube} className="me-2" />
                    Youtube
                  </a>
                </li>
                <li>
                  <a href="/" className="text-reset text-white">
                    <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                    Linkedin
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} sm={6} className="mb-4">
              <h6 className="fw-bold">Latest tweets</h6>
              <div className="d-flex latesttweets">
                <FontAwesomeIcon icon={faTwitter} className="me-3" />
                <p>
                  Mei no ubique persecuti, at sit iusto aliquam interpretaris.
                </p>
              </div>

              <div className="d-flex latesttweets">
                <FontAwesomeIcon icon={faTwitter} className="me-3" />
                <p>
                  Graece postea usu ea. Sea diceret pertinax in. Melius
                  feugiat definitiones ex qui.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="p-4 bg-black">
        <Container>
          <div className="d-flex justify-content-between align-items-center flex-column flex-lg-row">
            <div className="me-5 mb-3 mb-lg-0">
              <a href="/" className="me-4 text-reset">
                <img src={Glogo} alt="" style={{ height: "40px" }} />
              </a>
            </div>
            <div className="text-center text-lg-end">
              <p className="text-white mb-0">
                &copy; {new Date().getFullYear()} GCOM All Right Reserved
              </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
