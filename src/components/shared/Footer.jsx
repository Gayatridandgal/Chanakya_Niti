import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../context/Context";
import Visitors from "./Visitors";
import {
  FaGithub,
  FaHome,
  FaInfoCircle,
  FaUser,
  FaSignInAlt,
  FaMusic,
  FaVideo,
  FaBook,
  FaNewspaper,
  FaQuestionCircle,
  FaRobot,
} from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import "../../css/Footer.css";
import { TbHelpSquareFilled } from "react-icons/tb";
import GoogleTranslate from "../../pages/contributor/GoogleTranslate";

const Footer = () => {
  const { isDarkMode } = useContext(Context);

  return (
    <footer
      className="footer font-small pt-4"
      style={{
        backgroundColor: `${
          isDarkMode ? "rgba(0, 0, 0, 0.4)" : "rgba(223, 223, 176, 0.4)"
        }`,
      }}
    >
      <div className="container pt-2">
        <div className="row">
          <div className="col-md-6 d-lg-flex">
            <figure className="figure d-flex flex-column align-items-center">
              <Tilt>
                <img src="logo.webp" height="200" alt="Chanakya Image" />
              </Tilt>
              <figcaption
                className="figure-caption text-center mt-2"
                style={{ color: isDarkMode ? "white" : "black" }}
              >
                चाणक्य नीति
              </figcaption>
            </figure>

            <div className="my-auto star-btn d-flex flex-column align-items-center">
              <a
                href="https://github.com/Avdhesh-Varshney/chanakya-niti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-dark p-2 rounded text-decoration-none d-inline-block"
              >
                <FaGithub className="me-2" /> Star Us ⭐
              </a>
              <div>
                <GoogleTranslate />
              </div>
              <Visitors />
            </div>
          </div>

          <div className="col">
            <h3
              className="text-uppercase fw-bold"
              style={{ color: isDarkMode ? "white" : "black" }}
            >
              चाणक्य नीति
            </h3>
            <ul className="list-unstyled">
              <li>
                <NavLink
                  to="/"
                  className="text-decoration-none"
                  style={{ color: isDarkMode ? "white" : "black" }}
                >
                  <FaHome className="me-2" /> Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-decoration-none"
                  style={{ color: isDarkMode ? "white" : "black" }}
                >
                  <FaInfoCircle className="me-2" /> About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Help"
                  className="text-decoration-none"
                  style={{ color: isDarkMode ? "white" : "black" }}
                >
                  <TbHelpSquareFilled className="me-2" /> Help
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contributor"
                  className="text-decoration-none"
                  style={{ color: isDarkMode ? "white" : "black" }}
                >
                  <FaUser className="me-2" /> Contributors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/auth/login"
                  className="text-decoration-none"
                  style={{ color: isDarkMode ? "white" : "black" }}
                >
                  <FaSignInAlt className="me-2" /> Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Feedback"
                  className="text-decoration-none"
                  style={{ color: isDarkMode ? "white" : "black" }}
                >
                  <FaInfoCircle className="me-2" /> Feedback
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col my-auto">
            <h3
              className="text-uppercase fw-bold"
              style={{ color: isDarkMode ? "white" : "black" }}
            >
              Resources
            </h3>
            <ul className="list-unstyled">
              <li>
                <NavLink
                  to="/resources/chanakyagpt"
                  className="text-decoration-none"
                  style={{ color: isDarkMode ? "white" : "black" }}
                >
                  <FaRobot className="me-2" /> ChanakyaGpt
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resources/audio"
                  className="text-decoration-none"
                  style={{ color: isDarkMode ? "white" : "black" }}
                >
                  <FaMusic className="me-2" /> Audio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resources/video"
                  className="text-decoration-none"
                  style={{ color: isDarkMode ? "white" : "black" }}
                >
                  <FaVideo className="me-2" /> Video
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resources/book"
                  className="text-decoration-none"
                  style={{ color: isDarkMode ? "white" : "black" }}
                >
                  <FaBook className="me-2" /> Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resources/news"
                  className="text-decoration-none"
                  style={{ color: isDarkMode ? "white" : "black" }}
                >
                  <FaNewspaper className="me-2" /> News
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resources/quiz"
                  className="text-decoration-none"
                  style={{ color: isDarkMode ? "white" : "black" }}
                >
                  <FaQuestionCircle className="me-2" /> Quiz
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="text-center"
        style={{ color: isDarkMode ? "white" : "black" }}
      >
        <p>
          &copy; {new Date().getFullYear()} Chanakya Niti. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
